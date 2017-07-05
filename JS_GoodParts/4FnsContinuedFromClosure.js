
var myObj= (function (){
	var value=0;
	return {
		increment: function(inc){
			value+= typeof(inc) === 'number'? inc:1;
		},
		getValue:function(){
			return(value);
		}
	};
}());

document.writeln(myObj.increment(9));

document.writeln("<br>"+myObj.getValue);





var quo = function (status) {
	return{
		get_status:function(){
			return status;
		}
	};
};


var myQuo = quo("amazed");


document.writeln("<br>"+myQuo.get_status());
//document.writeln("<br>"+quo.get_status("not"));

document.writeln("<br>"+ "<br>");

var fade = function (node) {
	var lvl=1;
	var step = function(){
		var hex = lvl.toString(16);
		node.style.backgroundColor = "#FFF3" + hex + hex; 
		if(lvl < 15)
		{
			lvl+=1;
			setTimeout(step,100);
		}
	};
	setTimeout(step,100);
};

fade(document.body);




var addH= function(nodes){
	var i;
	for(i=0;i<nodes.length;i+=1){
		nodes[i].onclick=function(e){
			alert(i);
		};
	}
};
//console.log(addH);

var addH=function(nodes){
	var helper=function(i){
		return function(e){
			alert(i);
		};
	};
	var i;
	for(i=0;i<nodes.length;i+=1){
		nodes[i].onclick=helper(i);
	}
};

//console.log(addH);





var serial_maker= function(){
	var prefix='';
	var seq=0;
	return{
		set_prefix: function( p ){
				prefix= String( p );
		},
		set_seq: function( s ){
			seq=s;
		},
		gensym: function () {
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();
console.log(unique);








/////////////////////////////CASCADE
/*getElement('myBoxDiv')
		.move(350,150)
		.width(100)
		.height(100)
		.color('red')
		.border('10px outset')
		.padding('4px')
		.appendText("Please standby")
		.on('mousedown',function(m){
			this.startDrag(m, this.getNinth(m));
		})
		.on('mousemove','drag')
		.on('mouseup','stopdrag')
		.later(2000,function(){
			this
			.color('yellow')
			.setHTML("What is this?")
			.slide(400,40,200,200);
		})
		tip('this box is resizable0');


*		//curry

		document.writeln("<br>");

		var add1 = add.curry(1);
		var add1;
		document.writeln(add1(6));

		Function.method('curry', function(){
			//var slice = arguments, that = this;
			var slice = Array.prototype.slice, args = slice.apply(arguments), that = this;
			return function() {
				return that.apply(null, args.concat(slice.apply(arguments)));
			};
		});

*/

var fibonacci = ( function(){
	var memo = [0,1];
	var fib = function (n) {
		var result = memo[n];
		if( typeof result !== 'number') {
			result = fib(n-1) + fib(n-2);
			memo[n]=result;
		}
		return result;
	};
	return fib;
}());

console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));



var memoizer = function( memo , formula ) {
	var recur = function(n) {
		var result = memo[n];
		if( typeof result !== 'number') {
			result = formula( recur , n);
			memo[n] = result;
		}
		return result;
	};
	return recur;
};
console.log(memoizer([0,1],4));

var fibonacci = memoizer([0,1], function (recur , n){
	return recur ( n-1 )+ recur ( n-2 );
});
console.log(fibonacci (7));

/*var fact = memoizer([1,1], function (recur , n){
	return recur ( n)* recur ( n-2 );
});
console.log(fact (7));*/