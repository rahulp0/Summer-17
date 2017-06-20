//10001stPrime




function isPrime(n)
{
    if (n < 2) return false;

    

    var q = Math.floor(Math.sqrt(n));//LowerBound->sieve of Eratosthenes

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

var collArrs=[];
var count=10001;
var n=0;
var maj=0;
while(maj<=10001){
	if(isPrime(n)){
		maj+=1;
		collArrs.push(n);
		n=n+1;

	}
	else
		n=n+1;

}	  
console.log(collArrs);
document.writeln(collArrs[10000]);//since array contains the elements starting from the index 0 through 10001, the size becomes 10002. To access 10001nth element, 10000th ndex mustbe used

	

