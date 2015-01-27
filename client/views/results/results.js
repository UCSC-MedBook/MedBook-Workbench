showPDF = function() {
		$("#frameset_div").show()
		$("#HOTdiv").hide()
}	;	


/*****************************************************************************/
/* Results: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Results.events({
	'click .selectableResult': function( e, tmpl){
		var r = e.target.dataset["id"]
		Session.set('selectedResult',r);
		console.log('select result:', r);
	} ,
	'click .selectableHot': function( e, tmpl){
		var r = e.target.dataset["id"]
		Session.set('selectedBlob',r);
		console.log('selected blob:', r);
		$("#frameset_div").hide()
		$("#HOTdiv").show()
		HOTload(r)
	} ,
	'mouseenter .selectableResult': function(e, tmpl) {
		try {
			r = e.target.dataset["id"];
		}
		catch (err) {
			r = '';
		}
		Session.set('selectedResult',r);
		console.log('hover',r)
	},
	'mouseleave .selectableResult': function(e, tmpl) {
		Session.set('selectedResult',"");
		console.log('no result row')
	}
});

Template.Results.helpers({
	mimeSpecificResult: function() {
		var id = Session.get('selectedResult');
		console.log('mime fetch')
		return Results.findOne({_id: id});
	},
	results: function() {
		var id = Session.get('selectedContrast')
		console.log('results contrast', id)
		if (id)
				r = Results.find({contrast:id})
			else
				r = Results.find({})
		console.log('results of Results.find', r)
		files = r.map(function(x) {return x.blobs} )
		console.log('b_ids',files)
		console.log('bids' , files[0], files[0][0])
		Session.set('currentBlob', files[0][0])
		return r;
	},
	geturl: function() {
		var id = this.toString().trim()
		if (id) {
			var b = Blobs.findOne({_id:id})
			return {url: b.url(), name: b.name(), size: b.size(), type:b.type(), id:b._id}
		}
		return
	},
	isPDF: function() {
		var id = this.toString().trim()
		if (id) {
			var b = Blobs.findOne({_id:id})
			return b.type() == "application/pdf"
		}
	return false
	}
});

Tracker.autorun(function(c){
  console.log("autorun");
  var cb = Session.get("currentBlob")
   if (typeof cb !== 'undefined') {
	  console.log('cb is set ',cb);
	  setTimeout(function() {
		   HOTload(cb);
  	  }, 500);
  }	
});


function HOTload(file_id) {
    if (file_id) {
	    var blob = Blobs.findOne({_id:file_id} );
		try {
			var url = blob.url();
		}
		catch (error) {
			console.log('cannot find url for blob id',file_id)
			return
		}
		console.log('blob path', url)
		$.ajax({url:url})
		.done( function(data) {
			var mat = []
		 	var datas = data.split(/[\r\n]+/g);
			datas.forEach(function(l) {
				var row = l.split('\t')
				mat.push(row)
			})
			console.log( "Sample of data:", mat[0], mat[1] );
			var settings = {minSpareRows: 0, colHeaders: true, height:300, data: mat};
			$('#HOTdiv').handsontable(settings);
		}).fail(function(){
			alter('error');
		})
    }
  
}
window.HOTload = HOTload;
/*****************************************************************************/
/* Results: Lifecycle Hooks */
/*****************************************************************************/
Template.Results.created = function () {
};

Template.Results.rendered = function () {
};

Template.Results.destroyed = function () {
};


