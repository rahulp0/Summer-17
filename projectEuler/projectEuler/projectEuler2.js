
var arr=[];
var i=0;
var sum=0;
function fib(n){if(n==0 || n==1)return n;

	else
		return(fib(n-2)+fib(n-1));
		}

while(fib(i)<4000000)
{
	arr.push(fib(i));
	i++;
}
console.log(arr);

for(i=0;i<arr.length;i++)
	{	if(arr[i]%2==0)
			sum+=arr[i];
	}

document.writeln(sum);