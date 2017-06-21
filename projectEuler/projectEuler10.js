


function isPrime(n){
	if(n<2)
		return false;
    var newk=Math.floor(Math.sqrt(n));

    for(var i=2;i<=newk;i++)
    {
    	if(n%i==0)
    		return false;
    }
    return true;
}





var arr2mp=0;
var j=0;
var i=0;
while(j<2000000){
	if(isPrime(j))
	{
		arr2mp+=j;
		j++;
		i++;
	}
	else
	    j++;
}

console.log(arr2mp);
	


	


