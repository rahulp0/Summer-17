

var check = function( char, ipStr, i ){ 
  for( var g = 0; g < i; g++){
    if(ipStr[g]===char)
      return 1;
  }
  return 0;
}

var ipStr ="{(1+3-0)}";
var strArr =[], arrBrkts=[];
strArr = ipStr.split("");
var len=strArr.length;
for( var i=0; i<len ; i++){
  if( strArr[i] === '['){
    arrBrkts.push(strArr[i]);
  }
  if( strArr[i] === '{'){
    arrBrkts.push(strArr[i]);
  }
  if( strArr[i] === '('){
    arrBrkts.push(strArr[i]);
  }
  if( strArr[i] === ']' && check( '[', strArr, i )){
    arrBrkts.pop();
  }
  if( strArr[i] === '}' && check( '{', strArr, i )){
    arrBrkts.pop();
  }
  if( strArr[i] === ')' && check( '(', strArr, i )){
    arrBrkts.pop();
  }

}

if(arrBrkts.length===0)
  document.writeln("Balanced");
else
  document.writeln("Needs help");




