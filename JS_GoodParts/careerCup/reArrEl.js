
var reArr = function (strArr){
   var newArr=[];
   var len = strArr.length;
   var mid = len/2;
   var count = 0;
   for( var i = mid ; i < len , count < mid ; i++ ){
   		newArr.push( strArr[count] );
   		newArr.push( strArr[i] );
   		count+=1;
   }
   console.log(newArr);
   document.writeln(newArr);
}
document.writeln("The given array is: ");
var str='1234567890';
var arr = str.split("");
document.writeln(arr+"<br>");
document.writeln("On rearranging the elements, we'll have: ");

console.log(arr);
reArr(arr);


