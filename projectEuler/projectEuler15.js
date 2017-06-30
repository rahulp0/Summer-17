
function factorial(n)
{
	var fact=1;
	for(var i=1; i<=n ; i++){
		fact=fact*i;
	}

	return fact;
}
document.writeln("GRID: 20X20"+"<br>");
document.writeln("Totally, there has to be 20 right and 20 downward movements"+"<br>");

document.writeln("\(\(n\)+\(r\)\)\ C \/ \(n\)"+"<br>");
document.writeln("\(\(19+1\)+\(19+1\)\)\ C \/ \(19+1\)"+"<br>");

var res1=factorial(20+20);
var res2=factorial(20);

var res=res1/(factorial(40-20) * res2);

document.writeln(res);
