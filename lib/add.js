function add(strA,strB) {
  var [Num_lt,Num_gt]=strA.length<strB.length?[strA,strB]:[strB,strA];
  var Num_lt=Num_lt.split('').reverse(),
      Num_gt=Num_gt.split('').reverse();
  var t=0,ta,tb,
      sum=0;
  for(var i=0,len=Num_gt.length;i<len;i++){
    ta=+Num_gt[i];
    tb=Num_lt[i]!=undefined?+Num_lt[i]:0;
    sum=t+ta+tb;
    Num_gt[i]=sum%10;
    t= sum>=10?(sum-Num_gt[i])/10:0;
  }
  if(sum>=10){
    Num_gt.push(1)
  }
  return Num_gt.reverse().join('')
}
module.exports = add