
var sum=0;



for(var i=2;i<1000;i++){
	if(i%3==0 && i%5==0)
		sum+=i;
	else if(i%3==0 && i%5!=0)
		sum+=i;
	else if(i%3!=0 && i%5==0)
		sum+=i;

}	/*
for(i=0;i!='\0';i++){
	sum+=arr[i];
}
*/

console.log(sum);