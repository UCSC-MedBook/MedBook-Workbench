Meteor.startup(function () {
	Meteor.methods({
	  getCurrentTime: function () {
		console.log('on server, getCurrentTime called');
		return new Date();
	  },
 
	  runshell: function (name) {
		console.log('on server, welcome called with name: ', name);
		if(name==undefined || name.length<=0) {
	      throw new Meteor.Error(404, "Please enter your name");
		}
		spawn = Npm.require('child_process').spawn;

		command = spawn(name, ['-la']);

		command.stdout.on('data',  function (data) {
	  	  console.log('stdout: ' + data);
		});

		command.stderr.on('data', function (data) {
	  	  console.log('stderr: ' + data);
		});

		command.on('exit', function (code) {
	  	  console.log('child process exited with code ' + code);
		});
	  }
	});
  });


/* 
http://journal.gentlenode.com/meteor-14-execute-a-unix-command/
*/