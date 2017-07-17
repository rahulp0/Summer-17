
var ipStr='12342';
var strArr= ipStr.split("");
var add=strArr[0],mul=strArr[0];

for( var i = 1; i < strArr.length ; i++ ){
	mul*=strArr[i];
	add=(+add + +strArr[i]);
}
if(mul > add)
  document.writeln(mul);
else
  document.writeln(add);
