
/*var largestSeries=0;
var arrLengths=[];
var j=1;
while( j < 1000000){
	var i = j;
	for( i=j;i>1;){
		if( i % 2 === 0){
			i=i/2;
			largestSeries+=1;;
		}
		else 
		{
			i= (3*i)+1;
			largestSeries+=1;
		}

	}
	j++;
	largestSeries+=1;
	
	arrLengths.push(largestSeries);

}
console.log(arrLengths);
var maxLen = 0;
var len = arrLengths.length;

for( i = 0; i < len ; i++){
	
	if(	arrLengths[i] > maxLen ){
		maxLen = arrLengths[i];
		var index = i;
	}
}

document.writeln(index+" has the series with max. number of terms"+"<br>");

var max=0;
for(var i= 999999 ; i >5000000 ; i-- ){
	if( arrLengths[i] > max ){
		max=arrLengths[i];
	}
}
document.writeln(max);*/
// Project Euler - Problem 14
// Longest Collatz sequence

// The following iterative sequence is defined for the set of positive integers:

// n -> n/2 (n is even)
// n -> 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.

// Which starting number, under one million, produces the longest chain?

// function to find the longest Collatz sequence with a starting number under the passed in value
function longestCollatz(limit) {

  // store the starting value for the longest Collatz sequence
  var longest = 0;
  // store the longest Collatz sequence found so far
  var longestLength = 0;
  // store the length of the Collatz sequence for the current starting value
  var currentLength;

  // iterate through all the starting values from 1 to limit-1
  for (var i = 1; i < limit; i++) {
    // for each starting value calculate the length of its Collatz sequence
    currentLength = findCollatzLength(i);
    // compare against the longest Collatz sequence found so far, and if longer then replace
    if (currentLength > longestLength) {
      longestLength = currentLength;
      longest = i;
    }
  }

  // return the starting value for the longest Collatz sequence
  return longest;
}

// function to find the length of a Collatz sequence for a passed in starting value
function findCollatzLength(value) {

  
  var length = 0;


  while (value !== 1) {

    value = value % 2 === 0 ? value / 2 : (3 * value) + 1;
    length++;
  }

  length++;

  return length;
}

// test
console.log('findCollatzLength(13):', findCollatzLength(13));
console.log('findCollatzLength(999999):', findCollatzLength(999999));
console.log('longestCollatz(13):', longestCollatz(13));
console.log('longestCollatz(1000000):', longestCollatz(1000000));