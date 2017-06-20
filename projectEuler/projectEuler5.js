//Even Div 1-20

function minEv(e){
		if(e%3===0 && e%4===0 && e%5===0 && e%6===0 && e%7===0 && e%8===0 && e%9===0 && e%10===0 && e%11===0 && e%12===0 && e%13===0 && e%14===0 && e%15===0 && e%16===0 && e%17===0 && e%18===0 && e%19===0 )	
				return 1;

		else return 0;

}

var small=3000;

for(var i=small;i;i++){
	if(minEv(i)){
	 small=i;
	 document.writeln(small);
	 break;
	}

}

 