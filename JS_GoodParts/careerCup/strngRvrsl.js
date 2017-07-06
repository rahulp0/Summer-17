
var string="I am a human being";
var strArr = string.split(" ");
var len = strArr.length;
document.writeln("Given string that is to be reverted: "+ string+"<br>");
console.log(strArr);

for( var i = 00 ; i < len ; i++ ){
	var intermArr = strArr[i].split("");
	var intermLen = intermArr.length;
	var end = intermLen-1;	
	for( var j = 0 ; j < intermLen/2 ; j++ ){
		var temp = intermArr[j];
		intermArr[j] = intermArr[end];
		intermArr[end] = temp;
		//intermArr[0]=45;
		//console.log(intermArr);
		end-=1;
	}
    console.log(intermArr);
	strArr[i] = intermArr.join("");

}
strArr = strArr.join(" ");
console.log(strArr);
document.writeln("The reverted string is: "+strArr);