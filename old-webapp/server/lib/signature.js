Meteor.startup(function () {
	Meteor.methods({
		signature_summary: function () {
			var pipeline = [
	  		  	{$group: {_id: {name:"$name", version:"$version"}, count: {$sum: 1}}}
			];
			var sresult = []
			var result = Signature.aggregate(pipeline);
				_.each(result, function(s) {
					summ = s['_id']
					summ['count'] = s['count']
					sresult.push(summ)
					console.log('list ',s,s['_id']. summ)
				})
			console.log ('final result', sresult)
			return sresult
			}
	})
})
