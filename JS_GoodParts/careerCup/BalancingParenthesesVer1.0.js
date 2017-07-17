

document.writeln("<br>"+"NOTE: USE ONLY PARENTHESES"+"<br>");
var check = function( char, ipStr, i ){ 
  for( var g = 0; g < i; g++){
    if(ipStr[g]===char)
      return 1;
  }
  return 0;
}


document.writeln("The given expression to be checked for the correctness in the sequence of parentheses given below:     "+ "<br>");
var ipStr ="(9+8((())))(()))())))))";
var copyOfOriginalArr=[];
copyOfOriginalArr = ipStr.split("");
document.writeln(ipStr);
var strArr =[], arrBrkts=[];
strArr = ipStr.split("");
var len=strArr.length;

for( var i=0; i<len ; i++){
  if( strArr[i] === '(' ){
    arrBrkts.push(strArr[i]);
  }
  
  if(  strArr[i] === ')' && check( '(', strArr, i )){
    arrBrkts.pop();
  }
}

if(arrBrkts.length===0){
  document.writeln("<br>"+"The given expression is balanced"+"<br>");
  strArr=strArr.join("");
  document.writeln(strArr);

}

else{
  
  document.writeln("<br>"+ "The given expression doesnt have balanced parentheses"+"<br>"+"On Balancing, we get:" + "<br>");
  for( var count = 0 ; count < len ; count++ ){
    if( copyOfOriginalArr[count] === ')'){
      copyOfOriginalArr[count] = 'closedCheck';
      for( var t = count-1; t >= 0 ; t-- ){
          
        if( strArr[t] === '(' ){
          copyOfOriginalArr[t] = 'openCheck';
        }
      }
    }
  }
  console.log(copyOfOriginalArr);
  
  while(len){
    if(copyOfOriginalArr[len-1]==='('|| copyOfOriginalArr[len-1]===')' ){
      copyOfOriginalArr[len-1]=00;
    }
    len--;
  }
  console.log(copyOfOriginalArr);

  len=copyOfOriginalArr.length;
  for( var j = 0 ; j <len  ; j++ ){
    if( copyOfOriginalArr[j] === 'closedCheck'){
      for(  var i = j-1 ; i >=0 ; i--){
        if( copyOfOriginalArr[i] === 'openCheck' ) {
          copyOfOriginalArr[i]='(';
          copyOfOriginalArr[j]=')';
          break;
        }
      }
    }
  } 
  console.log(copyOfOriginalArr);


  for(var i = 0 ; i<len ; i++  ){
    if(copyOfOriginalArr[i] === 'closedCheck' || copyOfOriginalArr[i] === 'openCheck' ||copyOfOriginalArr[i] === 00 ){
      copyOfOriginalArr[i]=null;
    }
  }
  console.log(copyOfOriginalArr);
  copyOfOriginalArr = copyOfOriginalArr.join("");
  document.writeln(copyOfOriginalArr);
  console.log(copyOfOriginalArr);
}