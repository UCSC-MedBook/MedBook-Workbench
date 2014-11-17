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

		  FS.debug = true;
		  var newFile = new FS.File();
		  newFile.name('ls_result.txt');
		  newFile.type('text/plain');
		  newFile.size(200); //TODO CFS needs to properly calculate size for streams if not provided; this dummy value makes things work for now
		  newFile.metadata = {
			  caption: 'Not again!',
			  command: name,
			  args: argArray
		  };

		  // run the command with the provided arguments
		  var command = spawn(name, argArray);

		  // Set the createReadStream...
		  newFile.createReadStream = function() {
			  // Not sure why, but for now use the pass through stream
			  // We have to investigate why the spawn stream doesn't work directly
			  // with tempstore streams
			  var pt = new PassThrough();
			  command.stdout.pipe(pt);
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