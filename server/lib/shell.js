var Future = Npm.require('fibers/future');
var spawn = Npm.require('child_process').spawn;

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

		// create a new Future, allowing this method to be synchronous
		var fut = new Future();

		// get writestream for putting file into gridFS
		var blobStream = Blobs.upsertStream({
		  filename: 'ls_result.txt',
		  contentType: 'text/plain',
		  metadata: {
			  caption: 'Not again!',
			  command: name,
			  args: argArray
		  }
		}, {mode:'w'}, function (error, file) {
		  //file is the gridFS file document following the write
		  fut.return(file._id);
		});

		// run the command with the provided arguments
		var command = spawn(name, argArray);

		// pipe the results of the command to the new GridFS file
		command.stdout.pipe(blobStream);

		// wait for file writing to complete and then return the new
		// file's ID
		var file_id = fut.wait();
		console.log('file id is',file_id);
		return file_id;
	  }
	});
  });


/* 
http://journal.gentlenode.com/meteor-14-execute-a-unix-command/
*/