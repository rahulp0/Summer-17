
// the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sumSqrsX=0;
var sqrSumZ=0;

for(var i=0;i<101;i++){
	sumSqrsX+=(i*i);
	sqrSumZ+=i;
}
sqrSumZ*=sqrSumZ;

document.writeln(sqrSumZ-sumSqrsX);