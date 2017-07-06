
function mars(){
  var ipStr=document.getElementById("myTxt").value;
}

document.addEventListener("click", function(){document.getElementById("myTxt").value});
console.log(t);

document.writeln("<br>"+"NOTE: USE ONLY PARENTHESES"+"<br>");
var check = function( char, ipStr, i ){ 
  for( var g = 0; g < i; g++){
    if(ipStr[g]===char)
      return 1;
  }
  return 0;
}

var looper = function( init, max, char, arrStr){
  for( var i = init ; i < max; i++ ){
    if( arrStr[i] === char )
      return i;
  }
  return 0;
}
var imperfStr=[];
document.writeln("The given expression to be checked for the correctness in the sequence of parentheses is given below:     "+ "<br>");
var ipStr ="(9+8((())))((";
var copyOfOriginalArr=[];
copyOfOriginalArr = ipStr.split("");
document.writeln(ipStr);
var strArr =[], arrBrkts=[];
var newArr = ipStr.split("");

strArr = ipStr.split("");
var len=strArr.length;

for( var i=0; i<len ; i++){
  if( strArr[i] === '{' ||strArr[i] === '[' ||strArr[i] === '(' ){
    arrBrkts.push(strArr[i]);
  }
  
  if( strArr[i] === '}' && check( '{', strArr, i ) || strArr[i] === ']' && check( '[', strArr, i ) || strArr[i] === ')' && check( '(', strArr, i )){
    arrBrkts.pop();
  }
}

if(arrBrkts.length===0){
  document.writeln("<br>"+"The given expression is balanced"+"<br>");
  strArr=strArr.join("");
  document.writeln(strArr);

}

else{
  
  document.writeln("<br>"+ "The given expression isn't balanced"+"<br>");
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
  
  while(len){
    if(copyOfOriginalArr[len-1]==='('|| copyOfOriginalArr[len-1]===')' ){
      copyOfOriginalArr[len-1]=00;
    }
    len--;
  }

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
  copyOfOriginalArr = copyOfOriginalArr.join("");
  document.writeln(copyOfOriginalArr);
}