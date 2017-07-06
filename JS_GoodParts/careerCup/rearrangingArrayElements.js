
var reArr = function (strArr[]){
   var count=0,start=1,i=start,temp=strArr[start],N=strArr.length-1;
   var notBreak=1;
   while(notBreak){
      swap(temp,strArr[(2*i)%N]);
      i=(2*i)%N;
      count++;
      if(start==i){
         if(count==N-1)
            notBreak=false;
         start+=2;
         temp=strArr[start];
         i=start;
      }
   }
   console.log(strArr);
}

var str='1234567890';
var arr = str.split("");
reArr(arr);


