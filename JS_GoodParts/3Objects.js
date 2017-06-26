

var stooge={
	'first-name':"Rahul",
	'middle-name':"Var",
	'last-name':"Jerome"
};

var flight={
	
	airline:"Boeing777",
	number:998,
	departure:{
		IATA:"SYD",
		time:"2017-06-19 14:22",
		city:"SYDNEY"
    },
    "arrival":{
        IATA:"DUB",
		time:"2017-06-23 17:41",
		city:"DUBAI"
    }
};


if(typeof Object.create!=='function'){
	Object.create=function(o){
		var f=function(){};
		f.prototype=o;
		return new f();

	};
}


var newFlight=Object.create(flight);
var newStooge=Object.create(stooge);

var i;
var props=[
	'first-name',
	'middle-name',
	'last-name',
	'profession'];

stooge.__proto__['profession']="Entrepreneuer";;
for(i=0;i<props.length;i+=1){
	document.writeln(props[i]+":"+newStooge[props[i]]);
	document.writeln("<br>");
}


newStooge.nickname="curly";
console.log(newStooge);


delete newStooge.nickname;
console.log(newStooge);

var MYAPP={};



MYAPP.stooge={
	'first-name':"RallApp",
	'middle-name':"VarApp",
	'last-name':"JeromApp"
};

MYAPP.flight={
	
	airline:"Boeing7App77",
	number:998,
	departure:{
		IATA:"SYD",
		time:"2017-06-19 14:22",
		city:"SYDNEY"
    },
    arrival:{
        IATA:"DUB",
		time:"2017-06-23 17:41",
		city:"DUBAI"
    }
};

document.writeln(MYAPP.stooge);
document.writeln("<br><br>");
document.writeln(MYAPP.flight);
document.writeln("<br>");
document.writeln(MYAPP);















/*
for(name in newFlight){
	if(typeof newFlight.name !=='function'){
		document.writeln(name+":"+newFlight.name);
	}
}


/*
stooge.first_name;
stooge.first_name="XRXS";
stooge.first_name;
//stooge.lastName
//"Jerome"
stooge.lastName="Grenader";
//"Grenader"
console.log(stooge.first_name+stooge.lastName);
//VM237:1 XRXSGrenader

XRXSGrenader
flight.arrival.IATA+flight.departure.IATA
"DUBSYD"
flight.arrival.IATA+flight.departure.time

"DUB2017-06-19 14:22"
stooge.middleName="RAHUL";
"RAHUL"
console.log(stooge);
VM516:1 Object {first_name: "XRXS", lastName: "Grenader", middleName: "RAHUL"}first_name: "XRXS"lastName: "Grenader"middleName: "RAHUL"__proto__: Object
undefined
stooge.fi
undefined
stooge.first_name
"XRXS"
stooge["first_name"]
"XRXS"
flight.status="CRASHED"
"CRASHED"
console.log(flight.status);
VM647:1 CRASHED
undefined
console.log(flight);
VM662:1 Object {airline: "Boeing777", number: 998, departure: Object, arrival: Object, status: "CRASHED"}airline: "Boeing777"arrival: Objectdeparture: Objectnumber: 998status: "CRASHED"__proto__: Object
undefined
stooge[first_name]
VM700:1 Uncaught ReferenceError: first_name is not defined
    at <anonymous>:1:8
(anonymous) @ VM700:1
stooge['first_name']
"XRXS"
stooge[last]
VM736:1 Uncaught ReferenceError: last is not defined
    at <anonymous>:1:8
(anonymous) @ VM736:1
stooge[lastName]
VM745:1 Uncaught ReferenceError: lastName is not defined
    at <anonymous>:1:8
(anonymous) @ VM745:1
stooge['lastName']
"Grenader"
stooge.nickname="Clink"
"Clink"
stooge
Object {first_name: "XRXS", lastName: "Grenader", middleName: "RAHUL", nickname: "Clink"}first_name: "XRXS"lastName: "Grenader"middleName: "RAHUL"nickname: "Clink"__proto__: Object
flight.equipment="FlintBox"
"FlintBox"
flight
Object {airline: "Boeing777", number: 998, departure: Object, arrival: Object, status: "CRASHED"…}airline: "Boeing777"arrival: Objectdeparture: Objectequipment: "FlintBox"number: 998status: "CRASHED"__proto__: Object
var p=flight;
undefined
p.status=undefined
undefined
p.departure=NaN;
NaN
p
Object {airline: "Boeing777", number: 998, departure: NaN, arrival: Object, status: undefined…}airline: "Boeing777"arrival: Objectdeparture: NaNequipment: "FlintBox"number: 998status: undefined__proto__: Object
flight
Object {airline: "Boeing777", number: 998, departure: NaN, arrival: Object, status: undefined…}airline: "Boeing777"arrival: Objectdeparture: NaNequipment: "FlintBox"number: 998status: undefined__proto__: Object
//////////////////////////Updated and Referenceed
undefined
//



new Flight

VM988:1 Uncaught ReferenceError: Flight is not defined
    at <anonymous>:1:5
(anonymous) @ VM988:1
newFlight
Object {}__proto__: Objectairline: "Boeing777"arrival: Objectdeparture: Objectnumber: 998__proto__: Object
newFlight.arrival
Object {IATA: "DUB", time: "2017-06-23 17:41", city: "DUBAI"}
newFlight.departure
Object {IATA: "SYD", time: "2017-06-19 14:22", city: "SYDNEY"}
var dup=newFlight
undefined
dup.arrival=Null
VM1126:1 Uncaught ReferenceError: Null is not defined
    at <anonymous>:1:13
(anonymous) @ VM1126:1
dup.arrival="Dublin"

"Dublin"
flight
Object {airline: "Boeing777", number: 998, departure: Object, arrival: Object}airline: "Boeing777"arrival: ObjectIATA: "DUB"city: "DUBAI"time: "2017-06-23 17:41"__proto__: Objectdeparture: ObjectIATA: "SYD"city: "SYDNEY"time: "2017-06-19 14:22"__proto__: Objectnumber: 998__proto__: Object
dup.arrival
"Dublin"
newFlight.arrival
"Dublin"
if(typeof Object.create!=='function'){
    Object.create=function(o){
        
VM1359:2 Uncaught SyntaxError: Unexpected end of input
if(typeof Object.create!=='function'){
    Object.create=function(o){ var F=function(){};
        
VM1386:2 Uncaught SyntaxError: Unexpected end of input
if(typeof Object.create!=='function'){
    Object.create=function(o){ var F=function(){}; F.prototype=o;return new F();};
        
VM1429:2 Uncaught SyntaxError: Unexpected end of input
if(typeof Object.create!=='function'){
    Object.create=function(o){ var F=function(){}; F.prototype=o;return new F();};}
        
undefined
var newStooge=Object.create(stooge);
undefined
news
VM1496:1 Uncaught ReferenceError: news is not defined
    at <anonymous>:1:1
(anonymous) @ VM1496:1
newStooge
Object {}__proto__: Objectfirst_name: "Rahul"lastName: "Jerome"__proto__: Object
newStooge.first_name="Prill"
"Prill"
newStooge
Object {first_name: "Prill"}first_name: "Prill"__proto__: Objectfirst_name: "Rahul"lastName: "Jerome"__proto__: Object
stooge.first_name="NoLOngerRall"
"NoLOngerRall"
newStooge
Object {first_name: "Prill"}first_name: "Prill"__proto__: Object
console.log(newStooge);
VM1620:1 Object {first_name: "Prill"}first_name: "Prill"__proto__: Object
undefined
newStooge.first_name
"Prill"
newStooge=Object.create(flight)
Object {}
newStooge.arrival="NOPE"
"NOPE"
newStooge.arrival
"NOPE"
newStooge.departure
Object {IATA: "SYD", time: "2017-06-19 14:22", city: "SYDNEY"}
flight.joint="WHOA"
"WHOA"
newStooge.joint
"WHOA"
typeof flight.number
"number"
typeof flight.status
"undefined"
typeof flight.arrival
"object"
typeof flight.toString
"function"
flight.hasOwnProperty
function hasOwnProperty() { [native code] }
flight.hasOwnProperty('name')
false
flight.hasOwnProperty('arrival')
true
/////////////////////////////////////////////////////////////
enumeration
newStooge[props[i]]
undefined
newStooge[props[0]]
"Rahul"
newStooge[props[1]]
"Var"
newStooge[props[2]]
"Jerome"
props[0]
"first-name"
props[4]
undefined
props[3]
"profession"
newStooge.profession="Teacher'
VM2341:1 Uncaught SyntaxError: Invalid or unexpected token
newStooge.profession="Teacher"
"Teacher"
newStooge[props[3]]
"Teacher"
props
(4) ["first-name", "middle-name", "last-name", "profession"]
newStooge
Object {profession: "Teacher"}
stooge
Object {first-name: "Rahul", middle-name: "Var", last-name: "Jerome"}

//////////////////////////////
__proro__
CreateObj
DeleteObj


Properties


Object {nickname: "curly"}__proto__: Objectfirst-name: "Rahul"last-name: "Jerome"middle-name: "Var"__proto__: Object
3Objects.js:57 Object {}
newStooge.__proto__.first-name="raHul"
VM2528:1 Uncaught ReferenceError: Invalid left-hand side in assignment
newStooge.__proto__['first-name']="raHul"
"raHul"
newStooge
Object {}__proto__: Objectfirst-name: "raHul"last-name: "Jerome"middle-name: "Var"__proto__: Object
stooge
Object {first-name: "raHul", middle-name: "Var", last-name: "Jerome"}
var another_stooge=Object.create(stooge);
undefined
another_stooge
Object {}__proto__: Objectfirst-name: "raHul"last-name: "Jerome"middle-name: "Var"__proto__: Object
another_stooge.__proto__['first-name']="raHul"
"raHul"
another_stooge
Object {}__proto__: Object
another_stooge.__proto__['first-name']="Luhar"
"Luhar"
stooge
Object {first-name: "Luhar", middle-name: "Var", last-name: "Jerome"}
newStooge
Object {}
newStooge['first-name']
"Luhar"
another_stooge.first-name="Rahul"
VM2834:1 Uncaught ReferenceError: Invalid left-hand side in assignment
another_stooge['first-name']="Rahul"
"Rahul"
newStooge
Object {}
newStooge['first-name']
"Luhar"
newStooge
Object {}__proto__: Objectfirst-name: "Luhar"last-name: "Jerome"middle-name: "Var"__proto__: Object
newStooge.__proto__['first-name']="Rahul Prakash"
"Rahul Prakash"
newStooge["first-name"]
"Rahul Prakash"
stooge["first-name"]
"Rahul Prakash"
another_stooge['first-name']
"Rahul"
delete another_stooge["first-name"]
true
another_stooge['first-name']
"Rahul Prakash"

////////////////////////////////////////

Object {nickname: "curly"}
3Objects.js:57 Object {}
3Objects.js:85 Object {first-name: "RallApp", middle-name: "VarApp", last-name: "JeromApp"}first-name: "RallApp"last-name: "JeromApp"middle-name: "VarApp"__proto__: Objectconstructor: function Object()hasOwnProperty: function hasOwnProperty()isPrototypeOf: function isPrototypeOf()propertyIsEnumerable: function propertyIsEnumerable()toLocaleString: function toLocaleString()toString: function toString()valueOf: function valueOf()__defineGetter__: function __defineGetter__()__defineSetter__: function __defineSetter__()__lookupGetter__: function __lookupGetter__()__lookupSetter__: function __lookupSetter__()get __proto__: function __proto__()set __proto__: function __proto__()
3Objects.js:86 Object {airline: "Boeing7App77", number: 998, departure: Object, arrival: Object}airline: "Boeing7App77"arrival: Objectdeparture: Objectnumber: 998__proto__: Objectconstructor: function Object()hasOwnProperty: function hasOwnProperty()isPrototypeOf: function isPrototypeOf()propertyIsEnumerable: function propertyIsEnumerable()toLocaleString: function toLocaleString()toString: function toString()valueOf: function valueOf()__defineGetter__: function __defineGetter__()__defineSetter__: function __defineSetter__()__lookupGetter__: function __lookupGetter__()__lookupSetter__: function __lookupSetter__()get __proto__: function __proto__()set __proto__: function __proto__()
3Objects.js:87 Object {stooge: Object, flight: Object}flight: Objectairline: "Boeing7App77"arrival: Objectdeparture: Objectnumber: 998__proto__: Objectstooge: Object__proto__: Object
*/