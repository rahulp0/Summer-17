//one unsorted array is given. Find outthe index i and j such that  j>i, for which arr[j]-arr[i] is the maximum
var strng='89361745283059';
var givenArr = strng.split("");
var max=0, tempMaxElem;
var countOfj,countOfi;
var len = givenArr.length;
for( var j = len-1 ; j > 0 ; j-- ){
	for( var i = 0; i < j ; i++ ){
		tempMaxElem = givenArr[j] - givenArr[i];
		if( tempMaxElem > max){
		   max = tempMaxElem;
		   countOfj = j;
		   countOfi = i;
		}
	}
} 
document.writeln("One unsorted array is given. Find outthe index i and j such that  j>i, for which arr[j]-arr[i] is the maximum"+"<br>");
document.writeln(givenArr+"<br>"+"The value for which arr[j]-arr[i] is maximum :");
document.writeln("<br>"+"Max Value: "+max+"<br>");
document.writeln("value of i and j are: "+countOfi+" , "+countOfj);

