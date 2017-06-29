
var obj={
	value:0,
	increment:function(inc){
					this.value = this.value+ (typeof inc==='number'?(inc+1):1);

	}
};

obj.increment(9);
document.writeln(obj.value);

obj.increment('o');
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

 



var add = function (a, b) {
	 if (typeof a !== 'number' || typeof b !== 'number') {
	 throw {
	 name: 'TypeError',
	 message: 'add needs numbers'
	 };
	 }
	 return a + b;
}

var try_it = function ( ) {
	 try {
		 add("seven");
	 } 
	 catch (e) {
	 	document.writeln(e.name + ': ' + e.message);
	 }
}
try_it( );








Function.prototype.method = function (name, func) {
 	this.prototype[name] = func;
 	return this;
};

Number.method('integer', function ( ) {
 	return Math(this < 0 ? 'ceiling' : 'floor')(this);
});

document.writeln(-10 / 3); 

String.method('trim', function ( ) {
	 return this.replace(/^\s+|\s+$/g, '');
});
document.writeln('"' + " neat ".trim( ) + '"');



Function.prototype.method = function (name, func) {
	 if (!this.prototype[name]) {
 		this.prototype[name] = func;
 	}
};

var hanoi = function (disc, src, aux, dst) {
 	if (disc > 0) {
 		hanoi(disc - 1, src, dst, aux);
 		document.writeln('Move disc ' + disc +' from ' + src + ' to ' + dst);
 		hanoi(disc - 1, aux, src, dst);
 	}
};
hanoi(3, 'Src', 'Aux', 'Dst');

var walk_the_DOM = function walk(node, func) {
 	func(node);
 	node = node.firstChild;
 	while (node) {
 		walk(node, func);
 		node = node.nextSibling;
 	}
};

var getElementsByAttribute = function (att, value) {
	 var results = [];
	 walk_the_DOM(document.body, function (node) {
	 	var actual = node.nodeType === 1 && node.getAttribute(att);
	 	if (typeof actual === 'string' &&(actual === value || typeof value !== 'string')) {
	 		results.push(node);
	 	}
	 });
	 return results;
};

var factorial = function factorial(i, a) {
 	a = a || 1;
 	if (i < 2) {
 	return a;
 }
 return factorial(i - 1, a * i);

};
document.writeln(factorial(4)); 
var foo = function ( ) {
 var a = 3, b = 5;
 var bar = function ( ) {
 var b = 7, c = 11;

 a += b + c;

 };

 bar( );
};
