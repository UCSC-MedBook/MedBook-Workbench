Meteor.methods({
 /*
  * Example:
  *  '/app/mutations/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */

'/wb/writeSignature': function (contrastId, contrastName, studyID, version) {
	
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
			sig['pval'] = pVal
				sigDict[gene] = sig
			count += 1
			if (count < 10) {
				console.log(gene,fc, sig)
				console.log(gene,fc, s)
			}
		}
		catch (error) {
			console.log('cannot insert signature for gene', gene, error)
		}
	}
})
var sigObj = Signature.insert({'name':contrastName, 'studyID': studyID, 'version':version,'contrast':contrastId, 'signature':  sigDict })
console.log('sig result', sigObj)	
}
});
					
