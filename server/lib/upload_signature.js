var path = Npm.require('path');
var fs = Npm.require('fs');


Meteor.methods({
upload_signature: function (argList) {
				console.log('upload_signature',argList)
				read_config()
				var contrastId = argList[0]
				var sampleList =  {'_id':0}
				var contrastName = 'Adeno vs nonAdeno v5.0'
				var studyID = 'prad_wcdt';	
				var idList = [];  
				item = '/data/MedBook/scripts/smc-50.tab'
				var opts = {};
				opts.type = 'text/tabular'
				ext = path.extname(item).toString();
				filename = path.basename(item).toString();
				if (ext == '.xgmml') 
					opts.type = 'text/xgmml'
				else if (ext == '.sif')
					opts.type = 'text/network'
				else if (ext == '.tab')
					opts.type = 'text/tabular'
				//else if (filename == 'genes.tab')
				//	opts.type = ' Top Diff Genes'
				else 
					opts.type = mime.lookup(item)
				
				var f = new FS.File();
				f.attachData(item, opts);
				
				var blob = Blobs.insert(f);
				console.log('name', f.name(),'blob id', blob._id, 'ext' , ext, 'type', opts.type, 'item',item, 'opts', opts, 'size', f.size());
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
					console.log('previous signature version', version, sig_version)
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
									sigDict[gene] = sig
								count += 1
								if (count < 10) {
									console.log(gene,fc, sig)
								}
							}
							catch (error) {
								console.log('cannot insert signature for gene', gene, error)
							}
						}
					})
					var sigObj = Signature.insert({'name':contrastName, 'studyID': studyID, 'version':version,'contrast':contrastId, 'signature':  sigDict })
					console.log('sig result', sigObj)						
					idList.push(blob._id);
		console.log('insert list of blobs', idList);
	}
});
