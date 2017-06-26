
var obj={
	value:0,
	increment:function(inc){
					this.value = this.value+ (typeof inc==='number'?inc:1);

	}
};

obj.increment(7);
document.writeln(obj.value);

obj.increment();
document.writeln(obj.value);

obj.double=function() {
	// body...
	var that=this;
	var helper=function(){
		that.value=(that.value+that.value);
	};
	helper();
};
obj.double();
document.writeln(obj.value);