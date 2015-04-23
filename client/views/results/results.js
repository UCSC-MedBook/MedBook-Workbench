showPDF = function() {
		$("#frameset_div").show()
		$("#HOTdiv").hide()
		$('.svg_plot').hide()
}	;	
showSVG = function() {
	$('.svg_plot').show()
	$("#HOTdiv").hide()
	$("#frameset_div").hide()
}
var hot;
/*****************************************************************************/
/* Results: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Results.events({
	'click .selectableResult': function( e, tmpl){
		var r = e.target.dataset["id"]
		if (r) {
			Session.set('selectedResult',r);
			console.log('select result:', r);
		}
	} ,
	'click #post-tel': function( e, tmpl){
		/*var r = e.target.dataset["id"]	
		console.log('post result:', r, this);
		var today = new Date();
		HTTP.post('/medbookPost',{data:{post:{title:this.name, body:'posted from workbench on '+today, medbookfiles:this.blobs}}},
			function (err, response) {
				if (err) {
					console.log('error posting result', err)
				}
				console.log('post done', response)
			})*/
	    var today = new Date();
            document.medbookpost = {title:this.name, body:'posted from workbench on '+today, medbookfiles:this.blobs};
            $.getScript("/postScript");
	} ,
	'click #post-contrast': function( e, tmpl){
	    var today = new Date();
		var contrast_id = this.contrast
		Meteor.subscribe('signature_contrast', contrast_id);
		var blob_list = this.blobs;
		blob_list.forEach(function(blob_id) {
			var b = Blobs.findOne({_id:blob_id})
			var url = b.url()
			var bname = b.original.name
			console.log('blob',bname, 'url', url)
			if (bname =='sig.tab') {
				$.ajax({url:url})
				.done( function(data) {
					var mat = []
					var sig = {}
	
					var colheaders = true;
					var cols = ""
					if (bname=='sig.tab') {
					 	var datas = data.split(/[\r\n]+/g);
						datas.forEach(function(l) {
							var row = l.split('\t')
							var gene = row[0]
							if (row && gene) {
								sig[gene] = row[2]
								//console.log('gene',gene, row[1])
							}
						})
						var ret = Signature.insert({_id:contrast_id}, {$set:{'signature':sig}} )
						console.log('insert sig with contrast', contrast_id, 'returns ', ret)
						colheaders = ['Gene','coeff.Intercept','coeff.contrastB','stdev','stdev.contrastB','sigma','df.residual','Amean','s2.post','t.Intercept','t.contrastB',	'df.total',	'p.val.Intercept','p.value.contrastB','lods.Intercept',	'lods.contrastB','F','F.p.value']	
						cols  = [{},{type: 'numeric', format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00000'},{type: 'numeric',format:'0.00'}]
					}
				
				}).fail(function(err){
					console.log('error fetching blob', err)
				})
			}
		})
		
	} ,
	
	'click #del-result': function( e, tmpl){
		console.log('del result:', this._id);
		Results.remove({_id: this._id})
		//var today = new Date();
		/*HTTP.post('/medbookPost',{data:{post:{title:this.name, body:'posted from workbench on '+today, medbookfiles:this.blobs}}},
			function (err, response) {
				if (err) {
					console.log('error posting result', err)
				}
				console.log('post done', response)
			})*/
	} ,
	'click .selectableHot': function( e, tmpl){
		var r = e.target.dataset["id"]
		Session.set('selectedBlob',r);
		console.log('selected blob:', r);
		$("#frameset_div").hide()
		$('.svg_plot').hide()
		$("#HOTdiv").show()
		HOTload(r)
	} ,
	'keyup #searchbox': function (e, tmpl) {
		var search_val = e.target.value
		console.log ('search ',search_val)
		var queryResult = hot.search.query("CLVS1");
		console.log('query result',queryResult);
		hot.render();
	},
	'mouseenter .selectableResult': function(e, tmpl) {
		try {
			r = e.target.dataset["id"];
		}
		catch (err) {
			r = '';
		}
		Session.set('selectedResult',r);
		console.log('hover',r)
	}
//	'mouseleave .selectableResult': function(e, tmpl) {
//		Session.set('selectedResult',"");
//		console.log('no result row')
//	}
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
			else {
				var result_id = Session.get('selectedResult')
				if (result_id) {
					r = Results.find({'_id':result_id})
				} else {
					r = Results.find({})
				}			
			}
		console.log('results of Results.find', r)
		files = r.map(function(x) {return x.blobs} )
		if (files) {
			console.log('files',files)
			console.log('files[0]' , files[0])
			if (files[0]) {
				console.log('files[0][0]', files[0][0])
				Session.set('currentBlob', files[0][0])			
			}
		}
		return r;
	},
	geturl: function() {
		var id = this.toString().trim()
		if (id) {
			var b = Blobs.findOne({_id:id})
			var packet = {url: b.url(), name: b.name(), size: b.size(), type:b.type(), id:b._id}
			//console.log('get url ', packet)
			return packet
		}
		return
	},
	isDiffContrast: function() {
		var type = this.type
		return type == 'diff_expression'
		},
	isPDF: function() {
		var id = this.toString().trim()
		if (id) {
			var b = Blobs.findOne({_id:id})
			return b.type() == "application/pdf"
		}
	return false
	},
	isSVG: function() {
			var id = this.toString().trim()
			if (id) {
				var b = Blobs.findOne({_id:id})
				return b.type() == "image/svg+xml"
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
			var bname = blob.name();
		}
		catch (error) {
			console.log('cannot find url for blob id',file_id)
			return
		}
		console.log('blob path', bname, ' ',url)
		$.ajax({url:url})
		.done( function(data) {
			var mat = []
		 	var datas = data.split(/[\r\n]+/g);
			datas.forEach(function(l) {
				var row = l.split('\t')
				mat.push(row)
			})
			console.log( "Sample of data:", bname, mat[0], mat[1] );
			var colheaders = true;
			var cols = ""
			if (bname=='genes.tab') {
				colheaders = ['Gene', 'Log Fold Change', 'Avg Expression','T stat','Pval', 'FDR','log odds'],
				cols  = [{},{type: 'numeric', format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00000'},{type: 'numeric',format:'0.00000'},{type: 'numeric',format:'0.00'}]
			}
			if (bname=='sig.tab') {
				colheaders = ['Gene','coeff.Intercept','coeff.contrastB','stdev','stdev.contrastB','sigma','df.residual','Amean','s2.post','t.Intercept','t.contrastB',	'df.total',	'p.val.Intercept','p.value.contrastB','lods.Intercept',	'lods.contrastB','F','F.p.value']	
				cols  = [{},{type: 'numeric', format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00'},{type: 'numeric',format:'0.00000'},{type: 'numeric',format:'0.00'}]
			}
			var settings = {search:true, columns: cols, columnSorting: true, colHeaders: colheaders , height:300, data: mat};
			var container = $('#HOTdiv')
			$('#HOTdiv').handsontable(settings);
			hot = $("#HOTdiv").handsontable('getInstance');
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


