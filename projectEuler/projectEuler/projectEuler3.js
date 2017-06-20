//Finding prime factors for 600851475143
var n=13195;
var p=2;
var arr=[];
var fin=[];
var limSQRTn=Math.sqrt(n);
console.log(n);
console.log(limSQRTn);
limSQRTn=Math.floor(limSQRTn);
console.log(limSQRTn);

/*
for(var i=2;i<=n;i++){
	for(var j=2;j<=limSQRTn;j++){
	    if(i%j==0)
	    	break;
					    else 
	        p=p+1;
	}
	if(p==limSQRTn)
		arr.push(j);
}
*/
n = 600851475143
 i = 2
 while (i * i < n){
     while (n % i == 0)
         n = n / i;
     i = i + 1
}
console.log(n); /*

for(var i=2;i<=limSQRTn;i++){
	if(i%n!=0)
		arr.push(i);
	
}


console.log(arr);*/


document.writeln(arr);


