//Balancing parenthesized expressions
document.writeln("<br>"+"NOTE: USE ONLY PARENTHESES"+"<br>");
document.writeln("The given expression to be checked for the correctness in the sequence of parentheses given below:     "+ "<br>");
var ipStr ='a+b(()';
document.writeln(ipStr);
var strArr =[], arrBrkts=[];
strArr = ipStr.split("");
var len=strArr.length;

for( var i=0; i<len ; i++){
  if( strArr[i] === '(' ){
    arrBrkts.push(i);
  }
  if( strArr[i] === ')' ){
    if( arrBrkts.length !== 0){
      arrBrkts.pop();
    }
    else{
      strArr[i]=null;
    }
  }
  console.log(arrBrkts);
}

for( var p = 0; p < arrBrkts.length ; p+=1 ){
  strArr[arrBrkts[p]]=null;
}
document.writeln("<br>"+"Balanced expression:"+"<br>");
strArr=strArr.join("");
document.writeln(strArr);