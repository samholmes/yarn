var yarn = module.exports = function(initial) {
	var clew = []; // clew is a series of sets of functions [[f, ...], ...]
	var currentSet = 0;
	function next(i){
		i = i || 0;
		return function(){ clew[currentSet++][i].apply(next, arguments); };
	}
	function add(){
		clew.push(Array.prototype.slice.call(arguments));
		return add;
	}
	
	setTimeout(function(){ initial.call(next); }, 0);
	return add;
};