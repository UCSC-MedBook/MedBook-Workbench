/*****************************************************************************/
/* Signature Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/signature/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
});
HTTP.methods({
   signatures: function(data){
        var items = [];
       
        Signature.find( {name: {$regex: "^"+ this.query.q + ".*" }}, { sort: {name:1 }, fields: {"name":1 }}).
            forEach(function(f) {
                items.push({id: f.name, text: f.name, version: f.version});
            });
        this.setContentType("application/javascript");
        return JSON.stringify({
            items:items
        });
    },
});
