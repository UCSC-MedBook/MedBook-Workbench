var fs = Npm.require('fs');
var path = Npm.require('path');
var Fiber = Npm.require('fibers');

Meteor.startup(function () {
	
	Meteor.methods({
 	   	pathmark_adapter: function () {

			var phenofile =path.join(process.cwd(), 'pheno.tab')
			var expfile =path.join(process.cwd(), 'expdata.tab')
			//var fd = fs.openSync(outfile, 'w+');
			//var sg = Contrast.find({'group':"Small Cell-positive"},{_id:0}).fetch();
			//var samplelist = {'DTB-063':1, 'DTB-004':1, 'DTB-073':1, '_id':0}
			
			var samplelist = {'DTB-001':1, 
'DTB-003':1,
'DTB-004':1,
'DTB-005':1,
'DTB-009':1,
'DTB-011':1,
'DTB-018':1,
'DTB-020':1,
'DTB-022':1,
'DTB-023':1,
'DTB-032':1,
'DTB-034':1,
'DTB-036':1,
'DTB-038':1,
'DTB-040':1,
'DTB-046':1,
'DTB-071':1,
'DTB-073':1,
'DTB-024Pro2':1,
'DTB-030':1,
'DTB-053':1,
'DTB-063':1,
'DTB-064':1,
'DTB-069:':1,
			'DTB-073Pro':1, '_id':0}
			var exp_curs = Expression.find({}, samplelist);
			var fd = fs.openSync(expfile,'w');
			fs.writeSync(fd,'gene\t')
			_.map(samplelist, function(value, key) {
				
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
				_.map(samplelist, function(value, key) {
					
					if (value == 1) {
						fs.writeSync(fd,exp[key]+'')
						fs.writeSync(fd,'\t')
					}
				})
				fs.writeSync(fd,'\n')
			})
			fs.closeSync(fd)
			var con_list = Contrast.find({'name':"Enza-Naive vs Enza-Resistant"},{list1:1,_id:0}).fetch();
		
			var wstream = fs.createWriteStream(phenofile)
			wstream.write( "sample\tgroup\n")
			_.each(con_list, function(contrast) {
				console.log('pheno ' , contrast)
				_.each(contrast['list1'], function(item) {
					wstream.write(item)
					wstream.write('\t')
					wstream.write(contrast['group1'])
					wstream.write( '\n')
				})
				_.each(contrast['list2'], function(item) {
					wstream.write(item)
					wstream.write('\t')
					wstream.write(contrast['group2'])
					wstream.write( '\n')
				})
			})
			//_.each(sg, function(row){
			//	wstream.write(row.sample)
			//	wstream.write('\t')
			//	wstream.write(row.group)
			//	wstream.write( '\n')
			//})
			wstream.end()
			var cmd = '/Users/baertsch/src/pathmark-scripts/bin/medbookAdapterPATHMARK.py'
			//var cmd = 'sheet.pl' 
			//Meteor.call('runshell', cmd, [outfile], function(err,response) {
			var whendone = function(code) { 
					Results.insert({'name':'test123','return':code});
			};
			Meteor.call('runshell', cmd, ['-n 0' ,'-p paradigm' ,'-b 0', '-m sam', '--output-signature=sig.tab',expfile,phenofile,'/data/import/WCDT/pathmark_pathway.sif'], 
					'report.list', whendone, function(err,response) {
				if(err) {
					console.log('serverDataResponse', "pathmark_adapter Error:" + err);
					return;
				}
				resultObj = response['stderr'];
				console.log('pathmark OK: '+resultObj._id+ ' name '+resultObj.name());
				var readstream = resultObj.createReadStream('blobs');
				readstream.setEncoding('utf8');
				readstream.on('data', function(chunk) {
					console.log('chunk', chunk);
				})
			});
		}
	})
})