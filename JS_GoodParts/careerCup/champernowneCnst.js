/*An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

var numberPosition = 0;
var number = 1;
var numberString = number + '';

var positionsToMultiply = [1,10,100,1000,10000,100000,1000000];


var product = 1 , position;
for(var i=0; position = positionsToMultiply[i]; i++){
    while((numberString.length + numberPosition) < position){
        numberPosition += numberString.length;
        number += 1;
        numberString = number + '';
        

        console.log("number"+numberString);
    	console.log("pos:"+ numberPosition);
    }
    console.log("     OuterPos:"+ numberPosition);
    console.log("        "+numberString);
    
    var digit = (numberString[position - numberPosition - 1]);

    console.log( '  digit: ' + digit);
    product *= digit;
}

console.log(product);
