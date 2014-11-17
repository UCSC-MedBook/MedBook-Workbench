var spawn = Npm.require('child_process').spawn;
var PassThrough = Npm.require('stream').PassThrough;

Meteor.startup(function () {
	
	Meteor.methods({
	  getCurrentTime: function () {
		console.log('on server, getCurrentTime called');
		return new Date();
	  },
 
	  runshell: function (name, argArray) {

		  console.log('server, calling : ', name , ' with args ', argArray);

		  if(name==undefined || name.length<=0) {
			  throw new Meteor.Error(404, "Please enter your name");
		  }

		  //FS.debug = true;
		  var newFile = new FS.File();
		  newFile.name('ls_result.txt');
		  newFile.type('text/plain');
		  newFile.size(200); //TODO CFS needs to properly calculate size for streams if not provided; this dummy value makes things work for now
		  newFile.metadata = {
			  caption: 'Not again!',
			  command: name,
			  args: argArray
		  };

		  // Create a bufferable / paused new stream...
		  var pt = new PassThrough();
		  // run the command with the provided arguments
		  spawn(name, argArray).stdout.pipe(pt);

		  // Set the createReadStream...
		  newFile.createReadStream = function() {
			  return pt;
		  };

		  var fileObj = Blobs.insert(newFile);

		  return fileObj._id;
	  }
	});
  });


/* 
http://journal.gentlenode.com/meteor-14-execute-a-unix-command/
*/