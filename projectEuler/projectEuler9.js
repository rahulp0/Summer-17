
    var sum = 1000;
    var a,b,c;
    for (a = 1; a <= sum/3; a++)
    {
       
        for (b = a + 1; b <= sum/2; b++)
        {
             c = sum - a - b;
            if ( a*a + b*b == c*c )
               document.writeln(a*b*c);
        }
    }
    