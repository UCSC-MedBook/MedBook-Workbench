var fs = Npm.require('fs');
var path = Npm.require('path');
var Fiber = Npm.require('fibers');
var toml = Npm.require('toml-js');
var mime = Npm.require('mime');
var temp = Npm.require('temp').track();

//var mime = Npm.require('mime');

medbook_config = null  // config file for apps and tools

Meteor.startup(function () {
	read_config = function(){

       fs.readFile('../../../../../../config.toml', function (err, data) {
		   if (err) {
			   fs.readFile('../../../../../config.toml', function (err, data) {
				   if (err) {
				   		console.log('cannot open config.toml', err, 'from', process.cwd())
				   }
		   		   medbook_config = toml.parse(data);
		   		})
		   }
		   medbook_config = toml.parse(data);
       });
	}
	Meteor.methods({
	limma_adapter: function (argList) {
		console.log('limma_adapter')
		read_config()
		var contrastId = argList[0]
		var sampleList =  {'_id':0}
		//workDir = '/private/var/tmp/limmaTmp'
		workDir = temp.mkdirSync('limmaWork')
		var phenofile =path.join(workDir, 'pheno.tab')
		var contrast = Contrast.findOne({'_id':contrastId},{list1:1,'name':1,'studyID':1,_id:0});	
		var contrastName = contrast['name']
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
					fs.writeSync(fd,exp[key]+'')
					fs.writeSync(fd,'\t')
				}
			})
			fs.writeSync(fd,'\n')
		})
		fs.closeSync(fd)
			
		var cmd = medbook_config.tools.limma.path;
		var whendone = function(retcode, workDir, contrastId, contrastName, studyID) { 
			var idList = [];  
			console.log('when done work dir', workDir, 'return code', retcode)
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
			console.log('insert list of blobs', idList);
			var resObj = Results.insert({'contrast': contrastId, 'name':'differential results for '+contrastName,'studyID':studyID,'return':retcode, 'blobs':idList});
			//if (retcode == 0) {
			//	temp.cleanup(function(err, stats) {
			//		if (err)
			//			console.log('error deleting temp files', err)
			//		console.log('deleting temp files');
			//  	});
			//}
		};
		//"Rscript">limma_ng.R $input $contrast $top_count $output $top_genes $mds_plot
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
			workDir = temp.mkdirSync('pathmarkWork')
			var phenofile =path.join(workDir, 'pheno.tab')
			var contrast = Contrast.findOne({'_id':contrastId},{list1:1,'name':1,'studyID':1,_id:0});	
			var contrastName = contrast['name']
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
						fs.writeSync(fd,exp[key]+'')
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
				console.log('insert list of blobs', idList);
				var resObj = Results.insert({'contrast':contrastId, 'name':'pathmark results for '+contrastName,'studyID':studyID,'return':retcode, 'blobs':idList});
				if (retcode == 0) {
					temp.cleanup(function(err, stats) {
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