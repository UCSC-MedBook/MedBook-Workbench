
/*****************************************************************************/
/* Results: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Results.events({
	'click .selectableResult': function( e, tmpl){
		var r = e.target.dataset["id"]
		Session.set('selectedResult',r);
		console.log('select result:', r);
	} ,
	'mouseenter .selectableResult': function(e, tmpl) {
		try {
			r = e.target.dataset["id"];
		}
		catch (err) {
			r = '';
		}
		//console.dir(e.target)
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
		r = Results.find({})
		files = r.map(function(x) {return x.blobs} )
		console.log('bids' , files[0], files[0][0])
		Session.set('currentBlob', files[0][0])
		//console.log('results fetch', r, files);
		return r;
	},
	geturl: function() {
		var id = this.toString().trim()
		console.log('blob id ', id)
		var b = Blobs.findOne({_id:id})
		console.log('blob name', b.name())
		return {url: b.url(), name: b.name(), size: b.size()}
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
		var url = blob.url();
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
			var settings = {minSpareRows: 0, colHeaders: true, data: mat};
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


