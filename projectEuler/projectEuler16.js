
var number = [1],
    sum = 0;

for(var i = 0; i < 1000; i++)
{
    var overflow = 0,
        count = number.length + 1;

    for(var j = 0; j < count; j++)
    {
        var digit = number[j] || 0;

        digit = 2 * digit + overflow;

        if(digit > 9)
        {
            digit -= 10;
            overflow = 1;
        }
        else
        {
            overflow = 0;
        }

        number[j] = digit;
    }
}

for(var i = 0; i < 1000; i++)
{
    sum += number[i];
}

console.log(sum);
console.log(number);
/*'use strict'


var giv = Math.pow(2,1000);
var strToArr=[];

strToArr[0]=giv;
console.log(strToArr);
var res=2;
var final;
var i=1
while(i<1001){
     eval(res*=2);
    //final=eval(res);
	i++;
}

console.log(final);

*/