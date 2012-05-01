var yarn = function(initial) {
	var clew = []; // clew is a series of sets of functions [[f, ...], ...]
	function next(i, clewIndex){
		i = i || 0;
		return function(){ clew[clewIndex][i].apply(makeNext(clewIndex+1), arguments); };
	}
	function makeNext(clewIndex){
		var f = function(i){ return next(i, clewIndex); };
		f.error = function(){ if (clew.error) clew.error.apply(null, arguments); };
		return f;
	}
	function add(){
		clew.push(Array.prototype.slice.call(arguments));
		return add;
	}
	add.error = function(cb){
		clew.error = cb;
	};
	
	setTimeout(function(){ initial.call(makeNext(0)); }, 0);
	return add;
};

if (module)
	module.exports = yarn;