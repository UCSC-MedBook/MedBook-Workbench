ScvController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
	  var g1 = this.params.g1;
	  var g2 = this.params.g2;
	  var tool = this.params.hash;
	  var studyID = Session.get('studyID');
	  if (this.params.hash){
		  console.log('scv: run tool: '+tool);
		  var results_name="result abi resistant vs naive";
  		Results.insert({'name':results_name,'studyID':studyID,
  			'group1':g1,'group2':g2,'list1':sampleList1,'list2':sampleList2});
	  }
	  if (this.params.length > 0) {
		  console.log('scv: group1: '+g1+' group2: '+g2);
	  	
	  }
	 	  
	  return 
  },

  action: function () {
    this.render();
  }
});
