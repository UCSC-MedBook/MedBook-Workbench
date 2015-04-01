HTTP.methods({
    genes: function(data){
        var items = [];
       
        Expression2.find( {gene: {$regex: "^"+ this.query.q + ".*" }}, { sort: {gene:1 }, fields: {"gene":1 }}).
            forEach(function(f) {
                items.push({id: f.gene, text: f.gene});
            });
        this.setContentType("application/javascript");
        return JSON.stringify({
            items:items
        });
    },
});
