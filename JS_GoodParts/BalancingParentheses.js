

var check = function( char, ipStr, i ){ 
  for( var g = 0; g < i; g++){
    if(ipStr[g]===char)
      return 1;
  }
  return 0;
}

var bal=0;
var ipStr ="ab()(";
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

if(arrBrkts.length===0){
  document.writeln("Balanced"+"<br>");
  bal=1;
  strArr=strArr.join("");
  document.writeln(strArr);
}
else
  document.writeln("Needs help"+"<br>");

var index;
console.log(arrBrkts);
if(bal==0){
   
   var temp=[];

  for( var i=0 ; i<len ; i++ ){
    for( var j=0 ; j<arrBrkts.length ; j++){
      if( strArr[i] !== arrBrkts[j] ){
        temp.push(strArr[i]);
      }
      else {
        
        if( j > -1 )
          arrBrkts.splice(j,1);
      }
      
    }
  }
  //temp=temp.splice(0,1);
  if(temp.length==0){
    document.writeln("\"\"");
  }
  temp=temp.join("");
  document.writeln(temp);
}

