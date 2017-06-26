
function fnd(arr){
	var p=0;
	for(var i=1;i<arr;i++){
		if(arr%i===0)
			p=p+1;
		if(p>=500)
			return 1;
	     else
	     	return 0;
	 }
 
}


var arr=[];
for(var i=0;i<15000;i++){
	var p=i;
	var sum=0;
	while(p){
		sum+=p;
		--p;
	}
	arr.push(sum);
}

console.log(arr);
var arr2=[];
var u=0;

for(var i=0;i<15000;i++){
	if(fnd(arr[i]))
		document.writeln(arr[i]+"<br>");


}
