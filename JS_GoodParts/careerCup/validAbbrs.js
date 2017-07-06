
var print = function( str ){
	str = str.join("");
	document.writeln(str+"<br>");
}
var ipStr='AGT';
var copyArr=ipStr.split("");
var strArr=ipStr.split("");
var validAbbr=[];
var len = strArr.length;

document.writeln("Finding the number of Valid abbrevations for the given string:"+"<br>");
document.writeln(ipstr+"<br>");
document.writeln(ipstr+"<br>");
for( var i = 0 ; i < len ; i++ ){
	for( var case = 0 ; case < 10 ; case++ ){
		copyArr[i]= case;
		print(copyArr);
		for( var case2 = 0 ; case2 < 10 ; case3++ ){
			copyArr[i]=case;
			var p=i;
			while(p+2<len){
			   copyArr[p+2]=case2;
			   print(copyArr);
			}
        } 
	}
	
		
		copyArr[i]= case;

		print(copyArr);
	
	copyArr[i]=null;

}
