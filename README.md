# yarn

Yarn is a simple asynchronous routing pattern that makes it easy to write asynchrounous code in linear fashion.

If you like my work, buy me a Red Bull or Macbook Air or something. xP

[![PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SJCCMHKZLMSX2&lc=US&item_name=yarn&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted)  
**Bitcoin Address:** 1ADbZY8XBJsqjPMGrEHf9C9QeNvrBmhL3K

# Setup

To set up yarn on your Node.js server use npm.

	npm install yarn

If you want to use yarn on the client-side (browser), just include yarn.js into your page.

	<script type='text/javascript' src='yarn.js'></script>

# Using yarn

Using yarn is simple. First, you have to do is require the yarn function (if you're using it client-side, this isn't necessary).

	var yarn = require('yarn');

Then, you can call yarn and pass it an initial function, and then chain sets of functions after.

	yarn
	(function(){
		this(0)();
	})
	(function(){
	
	},
	function(){
		
	});

In the initial function (the first one), `this` is a function which returns one of next functions in the next set of functions. For example, `this(0)` would return the first function, and `this(1)` would return the second function. Every function in the series has a `this` function which returns one of the functions in the next set.

	yarn
	(function(){
		this(Math.round(Math.random()))();
	})
	(function(){
		this(0)();
	},
	function(){
		this(1)();
	})
	(function(){
		console.log('made it to the first of final set');
	},
	function(){
		console.log('made it to the second of final set');
	});

Here is an example of how you could use yarn with asynchronous callbacks.

	yarn
	(function(){
		doSomethingAsynchronous(this());
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

Another thing to note is that `this()` (called with no index passed) is synonymous to `this(0)`.

to be conitnued...possibly