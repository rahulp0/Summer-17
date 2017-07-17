
//finding if there are equal number of 1s and 0s in a string having binary codes
//longest sequence following the rule that the number of zeros have to be equal to the number of ones

var binStr = '1000001';
var binArr = binStr.split("");
var cnt0 = 0, cnt1 = 0;
var len = binArr.length;
document.writeln("The given sequence: "+"<br>");
document.writeln(binArr+"<br>");
for( var i= 0 ; i < len ; i++ ){
	if( binArr[i] == 0){
		cnt0+=1;
	}
	else 
		cnt1+=1;
}
console.log(cnt0);
console.log(cnt1);

if( cnt0 == cnt1 ){
	document.writeln("The given array of binary numbers contain equal number of 0s and 1s. They hence are the longest sequence"+"<br>");
	document.writeln(binArr);
}

else{
     var i = len-1 ;
	while( i > 0 && cnt1 !== cnt0) {
		if(binArr[i] == 0){
			binArr.splice(i,1);
			cnt0 -=1;
		}
		else{
			binArr.splice(i,1);
			cnt1-=1;
		}
		i-=1;

	}
	if( cnt0 == cnt1 ){
	document.writeln("The given array of binary numbers contain equal number of 0s and 1s. They hence are the longest sequence"+"<br>");
	document.writeln(binArr);
}

}