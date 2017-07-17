
var print = function( str ){
	str = str.join("");
	document.writeln(str+"<br>");
}
var ipStr='AGT';
var strArr=ipStr.split("");
var validAbbr=[0,1,2,3,4,5,6,7,8,9,""];
var len = strArr.length;
var firstEl, secEl, thirdEl;
document.writeln("Finding the number of Valid abbrevations for the given string:"+"<br>");
document.writeln(strArr+"<br>");
//for( var i = 0 ; i < len ; i++ ){

	for( var case1 = 0 ; case1 <= 10 ; case1++ ){
		firstEl = validAbbr[case1];
		for( var case2 = 0 ; case2 <= 10 ; case2++ ){
			secEl = validAbbr[case2];
			for( var case3 = 0 ; case3 <= 10 ; case3++ ){
				thirdEl = validAbbr[case3];
				if( firstEl !== secEl && secEl != thirdEl && (firstEl*secEl != Number && thirdEl*secEl != Number ) ){
					document.writeln(firstEl+" "+secEl+" "+thirdEl+"<br>");
				}
			}
			
        } 
	}

