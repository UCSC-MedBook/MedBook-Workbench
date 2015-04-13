StudiesIndexController = RouteController.extend({
  waitOn: function () {
 //     Meteor.subscribe('studies');
//	  console.log('subscribe studies')
  },

  data: function () {
	  return Studies.find({}) 
  },

  action: function () {
    this.render();
  }
});
