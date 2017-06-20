//Largest palindrome obtained by multiplying two three digit numbers

{
var i;
var palindrome;
var maxint=999*999;
var arrLR=[];
var arrRL=[];


/*var y=0;
for(var i=999;i>970;i--)
{
	for(var j=999;j>900;j--){
		maxint=i*j;
		//let u=isPal(maxint);
		if(isPal(maxint))
			{
				document.writeln(maxint);
				console.log(maxint);
				break;
				
			}

		else 
			continue;
		

    }
}*/

let u=isPal(119);
document.writeln(u);
}



function isPal(maxint){
	var arrLR=[];
    var arrRL=[];
    var n=maxint;
	while(maxint/10!=0)
	{
		i=maxint%10;
		arrRL.push();
		maxint=maxint/10;
	}
	arrLR=arrRL;
	arrLR.reverse();
	

	if(arrLR===arrRL){
		palindrome=1;
		console.log("we have it here"+n);
	}
	else 
		palindrome=0;

	return palindrome;
}

