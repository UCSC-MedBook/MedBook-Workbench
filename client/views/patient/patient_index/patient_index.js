
/*****************************************************************************/
/* PatientIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PatientIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PatientIndex.helpers({
	mutations: function () {
		var name = this.params.name;
		return Mutations.find({name:name});
	}

});

/*****************************************************************************/
/* PatientIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.PatientIndex.created = function () {
};

Template.PatientIndex.rendered = function () {
};

Template.PatientIndex.destroyed = function () {
};


