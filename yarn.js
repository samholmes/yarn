module.exports = function(initial) {
	var index = 0;
	var sets = [];
	var next = function(n){
		if(typeof n == 'number')
		{
			return function(){ sets[index++][n].apply(next, arguments); };
		}
		else
		{
			sets.push(Array.prototype.slice.call(arguments));
			return next;
		}
	};
	
	initial.call(next);
	return next;
};