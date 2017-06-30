'use strict'
var giv = Math.pow(2,1000);
var strToArr=[];

strToArr[0]=giv;
console.log(strToArr);
var res=2;
var final;
var i=1
while(i<1001){
    (res*=2);
    final=eval(res);
	i++;
}

console.log(final);