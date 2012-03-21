# Example

	yarn
	(function(){
	doSomethingAsynchronous(this(0));
	})
	(function(err){
		// this(0) returns error function, and this(1) returns success function
		if (err)
			this(0)();
		else
			this(1)();
	})
	(function error(){
		alert('Aww...');
	},
	function success()
		alert('Yay!!!');
	});

	function doSomethingAsynchronous(callback) {
		setTimeout(function(){
			if (Math.round(Math.random()) == 0)
				callback(true);
			else
				callback(false);
		}, 1000);
	}