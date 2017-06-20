//Largest palindrome obtained by multiplying two three digit numbers


function largestPalindrome() {

    var max = 0;

    
    for (var i = 999; i > 100; i--) {
       
        for (var j = i; j > 100; j--) {
            var mul = j * i;
            if (isPalin(mul) && mul > max) {
                max = i * j;
            }
        }
    }

    return max;

}

function isPalin(i) {

   
    i = '' + i;

    
    if(i === i.split("").reverse().join(""))
    	return 1;

}

console.log(largestPalindrome());
