var spawn = Npm.require('child_process').spawn;
var PassThrough = Npm.require('stream').PassThrough;
var Fiber = Npm.require('fibers');
var fs = Npm.require('fs');

Meteor.startup(function () {
	
	Meteor.methods({
	  getCurrentTime: function () {
		console.log('on server, getCurrentTime called');
		return new Date();
	  },
 	  
	  runshell: function (name, argArray, workDir, contrastId, jname, studyID, output_list, whendone) {
		var uid = this.userId
		console.log('server, calling : ', name , ' with args ', argArray, 'user', uid,' list of output files written to ' +output_list);

		if(name==undefined || name.length<=0) {
	      throw new Meteor.Error(404, "Please enter your name");
		}

		//FS.debug = true;
		var newFile = new FS.File();
		newFile.name('pathmark log');
		newFile.type('text/plain');
		newFile.size(200); //TODO CFS needs to properly calculate size for streams if not provided; this dummy value makes things work for now
		newFile.metadata = {
			  command: name,
			  args: argArray
		};
		var newError = new FS.File();
		newError.name('pathmark errors');
		newError.type('text/plain');
		newError.size(200); //TODO CFS needs to properly calculate size for streams if not provided; this dummy value makes things work for now
		newError.metadata = {
			  command: name,
			  args: argArray
		};

        // Create a bufferable / paused new stream...
        var pt = new PassThrough();
        var pt2 = new PassThrough();
		// run the command with the provided arguments
		console.log('work dir is ', workDir)
	    var shlurp = spawn(name, argArray, {cwd: workDir});
		shlurp.stdout.pipe(pt)
		shlurp.stderr.pipe(pt2);
		shlurp.on('error', function(error) {
				console.log('command failed '+error)
		});
		shlurp.on('close', function(retcode) {
				console.log('process ended with code ' + retcode);
				if (output_list) {
					fs.readFile(output_list, function(err, data) {
						if (err) {
							return console.log(err);
						}
						console.log('output files '+data);
					});					
				}	
				Fiber(function() {
					whendone(retcode, workDir, contrastId, jname, studyID, uid)
				}).run();  
		});
		
		
        // Set the createReadStream...
        newFile.createReadStream = function() {
            return pt;
        };
        newError.createReadStream = function() {
            return pt2;
        };

		var fileObj = Blobs.insert(newFile);
		var fileErr = Blobs.insert(newError);
		console.log('stdout',fileObj._id, 'stderr', fileErr._id)

		return {'stdout':fileObj, 'stderr':fileErr};
      },
	  write_clinical_oncore: function (data) {
		  console.log('insert clinical_oncore', data)
		  var ret = ClinicalOncore.insert(data)
		  console.log('returns ', ret)
	  }
	});
  });


/* 
http://journal.gentlenode.com/meteor-14-execute-a-unix-command/
*/
