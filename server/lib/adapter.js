var fs = Npm.require('fs');
var path = Npm.require('path');
//var Fiber = Npm.require('fibers');
var toml = Meteor.npmRequire('toml-js');
var mime = Meteor.npmRequire('mime');
var ntemp = Meteor.npmRequire('temp').track();

//var mime = Npm.require('mime');

medbook_config = null  // config file for apps and tools
medbook_config_file = null  // config file for apps and tools

Meteor.startup(function () {
	medbook_config_file = process.env["MEDBOOK_CONFIG"]
	console.log('Reading config from env MEDBOOK_CONFIG', medbook_config_file)
	read_config = function(){
	   console.log('reading ',medbook_config_file)
       fs.readFile(medbook_config_file, function (err, data) {
		   if (err) {
			   console.log('error opening config', err)
			   fs.readFile('../../../../../config.toml', function (err, data) {
				   if (err) {
				   		console.log('cannot open config.toml', err, 'from', process.cwd())
					   return;
				   }
		   		   medbook_config = toml.parse(data);
		   		})
		   }
		   medbook_config = toml.parse(data);
       });
	}
	Meteor.methods({
		boxplot_adapter: function (argList) {
			console.log('user', this.userId)
			console.log('boxplot adapter',argList)
			read_config()
			var contrastId = argList[0]
			var sampleList =  {'_id':0}
			var gene = argList[1]
			workDir = ntemp.mkdirSync('boxplotWork')
			var phenofile =path.join(workDir, 'pheno.tab')
			var contrast = Contrast.findOne({'_id':contrastId},{list1:1,'name':1,'studyID':1,_id:0});	
			try {
				var contrastName = contrast['name']
			}
			catch(error) {
				console.log('No contrast found for ', argList, " error is ", error)
				return -1
			}
			var studyID = contrast['studyID']
			var wstream = fs.createWriteStream(phenofile)
			wstream.write( "sample\tgroup\n")
			console.log('# of samples in each side of' , contrast['name'],': ' , contrast['list1'].length, 'vs',contrast['list2'].length)
			_.each(contrast['list1'], function(item) {
				wstream.write(item)
				sampleList[item] = 1
				wstream.write('\t')
				wstream.write(contrast['group1'])
				wstream.write( '\n')
			})
			_.each(contrast['list2'], function(item) {
				wstream.write(item)
				sampleList[item] = 1
				wstream.write('\t')
				wstream.write(contrast['group2'])
				wstream.write( '\n')
			})
			wstream.end()
			var expfile =path.join(workDir, 'expdata.tab')
	
			console.log('sample list length from study', studyID , Object.keys(sampleList).length )
			console.log('input files', expfile, phenofile)
			var exp_curs = Expression.find({'gene':{$in:gene}}, sampleList);
			//var exp_curs = Expression.find({}, sampleList);
			var fd = fs.openSync(expfile,'w');
			fs.writeSync(fd,'gene\t')
			_.map(sampleList, function(value, key) {
		
				if (value == 1) {
					fs.writeSync(fd,key)
					fs.writeSync(fd,'\t')
				}
			})
			fs.writeSync(fd,'\n')
			console.log('exp count' , exp_curs.count())

			exp_curs.forEach(function(exp) {

				fs.writeSync(fd,exp['gene'])
				fs.writeSync(fd,'\t')
				_.map(sampleList, function(value, key) {
			
					if (value == 1) {
						geneExp = exp[key]
						fs.writeSync(fd,geneExp+'')
						fs.writeSync(fd,'\t')
					}
				})
				fs.writeSync(fd,'\n')
			})
			fs.closeSync(fd)
			fs.exists(expfile, function(data) {
				console.log('file',	 expfile, 'exists?', data )
			})
			
			var cmd = medbook_config.tools.boxplot.path;
			var whendone = function(retcode, workDir, contrastId, contrastName, studyID, uid) { 
				var idList = [];  
				console.log('whendone work dir', workDir, 'return code', retcode, 'user id', uid)
				var buf = fs.readFileSync(path.join(workDir,'report.list'), {encoding:'utf8'}).split('\n')
				_.each(buf, function(item) {
					if (item) {
						var opts = {};
						ext = path.extname(item).toString();
						filename = path.basename(item).toString();
						if (ext == '.xgmml') 
							opts.type = 'text/xgmml'
						else if (ext == '.sif')
							opts.type = 'text/network'
						else if (ext == '.tab')
							opts.type = 'text/tab-separated-values'
						//else if (filename == 'genes.tab')
						//	opts.type = ' Top Diff Genes'
						else 
							opts.type = mime.lookup(item)
					
						var f = new FS.File();
						f.attachData(item, opts);
					
						var blob = Blobs.insert(f);
						console.log('name', f.name(),'blob id', blob._id, 'ext' , ext, 'type', opts.type, 'opts', opts, 'size', f.size());
						idList.push(blob._id);
					}	
				})
				console.log('insert list of blobs', idList);
				var resObj = Results.insert({'contrast': contrastId, 'name':'boxplot for '+contrastName,'studyID':studyID,'return':retcode, 'blobs':idList});
				/*var post = {
					title: "Results for contrast: "+contrastName,
					url: "/wb/results/"+resObj,
					body: "boxplot on 2/14/2015",
					medbookfiles: idList
				}
				console.log('user is ',uid)
				if (uid) {
					var user = Meteor.users.findOne({_id:uid})
					if (user) {
						console.log('user.services', user.services)
						var token = user.services.resume.loginTokens[0].hashedToken
						console.log('before post',post, token, 'username', user.username)
						HTTP.post("http://localhost:10001/medbookPost", {data:{post:post, token:token}})
						console.log('after post')
					}
				}*/
				//if (retcode == 0) {
				//	ntemp.cleanup(function(err, stats) {
			//			if (err)
			//				console.log('error deleting temp files', err)
			//			console.log('deleting temp files');
			//	  	});
			//	}
			};
			//"Rscript">limma_ng.R $input $contrast $top_count $output $top_genes $mds_plot
		    Meteor.call('runshell', cmd, [expfile,phenofile, gene, gene.join('_')+'.pdf', gene.join('_')+'.svg'], 
				workDir, contrastId, contrastName, studyID, path.join(workDir,'report.list'), whendone, function(err,response) {
					if(err) {
						console.log('serverDataResponse', "boxplot_adapter :" + err);
						return ;
					}
			resultObj = response['stderr'];
			console.log('limma started stdout stream id: '+resultObj._id+ ' stdout name '+resultObj.name());
			var readstream = resultObj.createReadStream('blobs');
			readstream.setEncoding('utf8');
			readstream.on('data', function(chunk) {
				console.log('chunk', chunk);
			})
		});
			},
		violinplot_adapter: function (argList) {
				console.log('user', this.userId)
				console.log('violinplot adapter',argList)
				read_config()
				var contrastId = argList[0]
				var sampleList =  {'_id':0}
				var gene = argList[1]
				workDir = ntemp.mkdirSync('boxplotWork')
				var phenofile =path.join(workDir, 'pheno.tab')
				var contrast = Contrast.findOne({'_id':contrastId},{list1:1,'name':1,'studyID':1,_id:0});	
				try {
					var contrastName = contrast['name']
				}
				catch(error) {
					console.log('No contrast found for ', argList, " error is ", error)
					return -1
				}
				var studyID = contrast['studyID']
				var wstream = fs.createWriteStream(phenofile)
				wstream.write( "sample\tgroup\n")
				console.log('# of samples in each side of' , contrast['name'],': ' , contrast['list1'].length, 'vs',contrast['list2'].length)
				_.each(contrast['list1'], function(item) {
					wstream.write(item)
					sampleList[item] = 1
					wstream.write('\t')
					wstream.write(contrast['group1'])
					wstream.write( '\n')
				})
				_.each(contrast['list2'], function(item) {
					wstream.write(item)
					sampleList[item] = 1
					wstream.write('\t')
					wstream.write(contrast['group2'])
					wstream.write( '\n')
				})
				wstream.end()
				var expfile =path.join(workDir, 'expdata.tab')
	
				console.log('sample list length from study', studyID , Object.keys(sampleList).length )
				console.log('input files', expfile, phenofile)
				var exp_curs = Expression.find({'gene':{$in:gene}}, sampleList);
				//var exp_curs = Expression.find({}, sampleList);
				var fd = fs.openSync(expfile,'w');
				fs.writeSync(fd,'gene\t')
				_.map(sampleList, function(value, key) {
		
					if (value == 1) {
						fs.writeSync(fd,key)
						fs.writeSync(fd,'\t')
					}
				})
				fs.writeSync(fd,'\n')
				console.log('exp count' , exp_curs.count())

				exp_curs.forEach(function(exp) {

					fs.writeSync(fd,exp['gene'])
					fs.writeSync(fd,'\t')
					_.map(sampleList, function(value, key) {
			
						if (value == 1) {
							geneExp = exp[key]
							fs.writeSync(fd,geneExp+'')
							fs.writeSync(fd,'\t')
						}
					})
					fs.writeSync(fd,'\n')
				})
				fs.closeSync(fd)
				fs.exists(expfile, function(data) {
					console.log('file',	 expfile, 'exists?', data )
				})
			
				var cmd = medbook_config.tools.violinplot.path;
				var whendone = function(retcode, workDir, contrastId, contrastName, studyID, uid) { 
					var idList = [];  
					console.log('whendone work dir', workDir, 'return code', retcode, 'user id', uid)
					try {
						var buf = fs.readFileSync(path.join(workDir,'report.list'), {encoding:'utf8'}).split('\n')
					}
					catch (err){
						console.log('no report.list file', err)
						return -1
					}
					_.each(buf, function(item) {
						if (item) {
							var opts = {};
							ext = path.extname(item).toString();
							filename = path.basename(item).toString();
							if (ext == '.xgmml') 
								opts.type = 'text/xgmml'
							else if (ext == '.sif')
								opts.type = 'text/network'
							else if (ext == '.tab')
								opts.type = 'text/tab-separated-values'
							//else if (filename == 'genes.tab')
							//	opts.type = ' Top Diff Genes'
							else 
								opts.type = mime.lookup(item)
					
							var f = new FS.File();
							f.attachData(item, opts);
					
							var blob = Blobs.insert(f);
							console.log('name', f.name(),'blob id', blob._id, 'ext' , ext, 'type', opts.type, 'opts', opts, 'size', f.size());
							idList.push(blob._id);
						}	
					})
					console.log('insert list of blobs', idList);
					var resObj = Results.insert({'contrast': contrastId, 'name':'violinplot for '+contrastName,'studyID':studyID,'return':retcode, 'blobs':idList});
					/*var post = {
						title: "Results for contrast: "+contrastName,
						url: "/wb/results/"+resObj,
						body: "violinplot on 2/14/2015",
						medbookfiles: idList
					}
					console.log('user is ',uid)
					if (uid) {
						var user = Meteor.users.findOne({_id:uid})
						if (user) {
							console.log('user.services', user.services)
							var token = user.services.resume.loginTokens[0].hashedToken
							console.log('before post',post, token, 'username', user.username)
							HTTP.post("http://localhost:10001/medbookPost", {data:{post:post, token:token}})
							console.log('after post')
						}
					}*/
					//if (retcode == 0) {
					//	ntemp.cleanup(function(err, stats) {
				//			if (err)
				//				console.log('error deleting temp files', err)
				//			console.log('deleting temp files');
				//	  	});
				//	}
				};  /* end of whendone */
				
				//"Rscript">limma_ng.R $input $contrast $top_count $output $top_genes $mds_plot
		 	Meteor.call('runshell', cmd, [expfile,phenofile, gene, gene.join('_')+'.pdf', gene.join('_')+'.svg' ], 
					workDir, contrastId, contrastName, studyID, path.join(workDir,'report.list'), whendone, function(err,response) {
						if(err) {
							console.log('serverDataResponse', "boxplot_adapter :" + err);
							return ;
						}
				resultObj = response['stderr'];
				console.log('plot started stdout stream id: '+resultObj._id+ ' stdout name '+resultObj.name());
				var readstream = resultObj.createReadStream('blobs');
				readstream.setEncoding('utf8');
				readstream.on('data', function(chunk) {
					console.log('chunk', chunk);
				})
			});
		},
	
	limma_adapter: function (argList) {
		console.log('user', this.userId)
		console.log('limma_adapter',argList)
		read_config()
		var contrastId = argList[0]
		var sampleList =  {'_id':0}
		//workDir = '/private/var/tmp/limmaTmp'
		workDir = ntemp.mkdirSync('limmaWork')
		var phenofile =path.join(workDir, 'pheno.tab')
		var contrast = Contrast.findOne({'_id':contrastId},{list1:1,'name':1,'studyID':1,_id:0});	
		try {
			var contrastName = contrast['name']
		}
		catch(error) {
			console.log('No contrast found for ', argList, " error is ", error)
			return -1
		}
		var studyID = contrast['studyID']
		var wstream = fs.createWriteStream(phenofile)
		wstream.write( "sample\tgroup\n")
		console.log('# of samples in each side of' , contrast['name'],': ' , contrast['list1'].length, 'vs',contrast['list2'].length)
		_.each(contrast['list1'], function(item) {
			wstream.write(item)
			sampleList[item] = 1
			wstream.write('\t')
			wstream.write(contrast['group1'])
			wstream.write( '\n')
		})
		_.each(contrast['list2'], function(item) {
			wstream.write(item)
			sampleList[item] = 1
			wstream.write('\t')
			wstream.write(contrast['group2'])
			wstream.write( '\n')
		})
		wstream.end()
		var expfile =path.join(workDir, 'expdata.tab')
	
		console.log('sample list length from study', studyID , Object.keys(sampleList).length )
		console.log('input files', expfile, phenofile)
		var exp_curs = Expression.find({}, sampleList);
		var fd = fs.openSync(expfile,'w');
		fs.writeSync(fd,'gene\t')
		_.map(sampleList, function(value, key) {
		
			if (value == 1) {
				fs.writeSync(fd,key)
				fs.writeSync(fd,'\t')
			}
		})
		fs.writeSync(fd,'\n')
		console.log('exp count' , exp_curs.count())

		exp_curs.forEach(function(exp) {

			fs.writeSync(fd,exp['gene'])
			fs.writeSync(fd,'\t')
			_.map(sampleList, function(value, key) {
			
				if (value == 1) {
					geneExp = exp[key]
					fs.writeSync(fd,geneExp+'')
					fs.writeSync(fd,'\t')
				}
			})
			fs.writeSync(fd,'\n')
		})
		fs.closeSync(fd)
		fs.exists(expfile, function(data) {
			console.log('file',	 expfile, 'exists?', data )
		})
			
		var cmd = medbook_config.tools.limma.path;
		var whendone = function(retcode, workDir, contrastId, contrastName, studyID, uid) { 
			var idList = [];  
			console.log('whendone work dir', workDir, 'return code', retcode, 'user id', uid)
			var buf = fs.readFileSync(path.join(workDir,'report.list'), {encoding:'utf8'}).split('\n')
			_.each(buf, function(item) {
				if (item) {
					var opts = {};
					ext = path.extname(item).toString();
					filename = path.basename(item).toString();
					if (ext == '.xgmml') 
						opts.type = 'text/xgmml'
					else if (ext == '.sif')
						opts.type = 'text/network'
					else if (ext == '.tab')
						opts.type = 'text/tab-separated-values'
					//else if (filename == 'genes.tab')
					//	opts.type = ' Top Diff Genes'
					else 
						opts.type = mime.lookup(item)
					
					var f = new FS.File();
					f.attachData(item, opts);
					
					var blob = Blobs.insert(f);
					console.log('name', f.name(),'blob id', blob._id, 'ext' , ext, 'type', opts.type, 'opts', opts, 'size', f.size());
					if (f.name() == 'genes.tab') {
						// Write signature object to MedBook
						console.log('write gene signature')
						var sig_lines = fs.readFileSync(item, {encoding:'utf8'}).split('\n')
						var count = 0
						var sig_version = Signature.find({'contrast':contrastId}, {'version':1, sort: { version: -1 }}).fetch()
						var version = 0.9
						var sigDict = {'AR' :{'weight':3.3}}
						try {
							version = Number(sig_version[0]['version']);
						}
						catch(error) {
							version = 0.9;
						}	
						console.log('previous signature version', version)
						version = version + 0.1
						_.each(sig_lines, function(sig_line) {
							var line = sig_line.split('\t')
							
							// logFC AveExpr t P.Value adj.P.Val B
							gene = line[0]
							fc = line[1]
							aveExp = line[2]
							tStat = line[3]
							pVal = line[4]
							adjPval = line[5]
							Bstat = line[6]
							if (gene) {
								try { 
									sig = {}
									//sig['name'] = gene
									sig['weight'] = fc
									sig['pval'] = pVal
										sigDict[gene] = sig
									count += 1
									//if (count < 10) {
									//	console.log(gene,fc, sig)
										//}
								}
								catch (error) {
									console.log('cannot insert signature for gene', gene, error)
								}
							}
						})
						var sigID = new Meteor.Collection.ObjectID();
						var sigObj = Signature.insert({'_id':sigID, 'name':contrastName, 'studyID': studyID, 
							'version':version,'contrast':contrastId, 'signature':  sigDict });
						console.log('signature insert returns', sigObj)						
					}
					idList.push(blob._id);
				}	
			})  /* each item in report.list */
 			console.log('insert list of blobs', idList);
			var resObj = Results.insert({'contrast': contrastId, 'name':'differential results for '+contrastName,'studyID':studyID,'return':retcode, 'blobs':idList});
			var post = {
				title: "Results for contrast: "+contrastName,
				url: "/wb/results/"+resObj,
				body: "this is the results of limmma differential analysis run on 2/14/2015",
				medbookfiles: idList
			}
			//var s = JSON.stringify(post)
			//var uid = this.userId
			console.log('user is ',uid)
			if (uid) {
				var user = Meteor.users.findOne({_id:uid})
				if (user) {
					console.log('user.services', user.services)
					var token = user.services.resume.loginTokens[0].hashedToken
					console.log('before post',post, token, 'username', user.username)
					HTTP.post("http://localhost:10001/medbookPost", {data:{post:post, token:token}})
					console.log('after post')
				}
			}
			//if (retcode == 0) {
			//	ntemp.cleanup(function(err, stats) {
		//			if (err)
		//				console.log('error deleting temp files', err)
		//			console.log('deleting temp files');
		//	  	});
		//	}
		};  /* end of whendon */
		
		Meteor.call('runshell', cmd, [expfile,phenofile, '200', 'sig.tab', 'genes.tab', 'mds.pdf'], 
			workDir, contrastId, contrastName, studyID, path.join(workDir,'report.list'), whendone, function(err,response) {
				if(err) {
					console.log('serverDataResponse', "pathmark_adapter Error:" + err);
					return ;
				}
		resultObj = response['stderr'];
		console.log('limma started stdout stream id: '+resultObj._id+ ' stdout name '+resultObj.name());
		var readstream = resultObj.createReadStream('blobs');
		readstream.setEncoding('utf8');
		readstream.on('data', function(chunk) {
			console.log('chunk', chunk);
		})
	});
		},
 	   	pathmark_adapter: function (argList) {
		    read_config()
			var contrastId = argList[0]
			var sampleList =  {'_id':0}
			workDir = ntemp.mkdirSync('pathmarkWork')
			var phenofile =path.join(workDir, 'pheno.tab')
			var contrast = Contrast.findOne({'_id':contrastId},{list1:1,'name':1,'studyID':1,_id:0});	
			var contrastName = contrast['name']
			var studyID = contrast['studyID']
			var wstream = fs.createWriteStream(phenofile)
			wstream.write( "sample\tgroup\n")
			console.log('# of samples in each side of' , contrastName,': ' , contrast['list1'].length, 'vs',contrast['list2'].length)
				_.each(contrast['list1'], function(item) {
					wstream.write(item)
					sampleList[item] = 1
					wstream.write('\t')
					wstream.write(contrast['group1'])
					wstream.write( '\n')
				})
				_.each(contrast['list2'], function(item) {
					wstream.write(item)
					sampleList[item] = 1
					wstream.write('\t')
					wstream.write(contrast['group2'])
					wstream.write( '\n')
				})
			wstream.end()
			var expfile =path.join(workDir, 'expdata.tab')
			
			console.log('sample list length from study', studyID , Object.keys(sampleList).length )
			var exp_curs = Expression.find({}, sampleList);
			var fd = fs.openSync(expfile,'w');
			fs.writeSync(fd,'gene\t')
			_.map(sampleList, function(value, key) {
				
				if (value == 1) {
					fs.writeSync(fd,key)
					fs.writeSync(fd,'\t')
				}
				else {
					console.log('sample',key, 'not found')
				}
			})
			fs.writeSync(fd,'\n')
			console.log('exp count' , exp_curs.count())
		
			exp_curs.forEach(function(exp) {
		
				fs.writeSync(fd,exp['gene'])
				fs.writeSync(fd,'\t')
				_.map(sampleList, function(value, key) {
					geneExp=null
					if (exp[key]) {
						geneExp = exp[key]
					}
					else {
						console.log(exp,'gene', key, 'is null')
					}
					if (value == 1) {
						fs.writeSync(fd,geneExp+'')
						fs.writeSync(fd,'\t')
					}
				})
				fs.writeSync(fd,'\n')
			})
			fs.closeSync(fd)

			var cmd = medbook_config.tools.pathmark.path;
			//var cmd = 'sheet.pl' 
			//Meteor.call('runshell', cmd, [outfile], function(err,response) {
			
			var whendone = function(retcode, workDir, contrastId, contrastName, studyID) { 
				var idList = [];  
				console.log('work dir', workDir, 'return code', retcode)
				var buf = fs.readFileSync(path.join(workDir,'report.list'), {encoding:'utf8'}).split('\n')
				_.each(buf, function(item) {
					if (item) {
						var opts = {};
						ext = path.extname(item).toString();
						if (ext == '.xgmml') 
							opts.type = 'text/vnd.medbook.xgmml'
						else if (ext == '.sif')
							opts.type = 'text/vnd.medbook.sif'
						else if (ext == '.tab')
							opts.type = 'text/vnd.medbook.tabular'
						else 
							opts.type = mime.lookup(item)
						var f = new FS.File();
						f.attachData(item, opts);
						var blob = Blobs.insert(f);
						console.log('blob id', blob._id, 'ext' , ext, 'type', opts.type, 'item',item, 'opts', opts, 'size', f.size(), 'name', f.name());
						idList.push(blob._id);
					}	
				})
				blobCount = length(idList)
				console.log('insert list of blobs', idList, 'count=', blobCount);
				var resObj = Results.insert({'contrast':contrastId, 'name':'pathmark results for '+contrastName,'studyID':studyID,'return':retcode, 'blobs':idList});
				if (retcode == 0 && blobCount > 0) {
					console.log('no errors, result:', resObj, 'cleaning up working directory.')
					ntemp.cleanup(function(err, stats) {
						if (err)
							console.log('error deleting temp files', err)
    					console.log('deleting temp files');
  				  	});
				}
			};
			Meteor.call('runshell', cmd, ['-n 0' ,'-p paradigm' ,'-b 0', '-m sam', '--output-signature=sig.tab',expfile,phenofile,'/data/import/WCDT/pathmark_pathway.sif'], 
					workDir, contrastId, contrastName, studyID, path.join(workDir,'report.list'), whendone, function(err,response) {
				if(err) {
					console.log('serverDataResponse', "pathmark_adapter Error:" + err);
					return ;
				}
				resultObj = response['stderr'];
				console.log('pathmark started stdout stream id: '+resultObj._id+ ' stdout name '+resultObj.name());
				var readstream = resultObj.createReadStream('blobs');
				readstream.setEncoding('utf8');
				readstream.on('data', function(chunk) {
					console.log('chunk', chunk);
				})
			});
		}
	})
})