function add(a,b) {
  // 实现该函数
  let sum = '';
  a = a.split("").reverse();
  b = b.split("").reverse();
  
  let length = a.length > b.length ? a.length : b.length;
  var flag = 0;
  for(let i = 0; i<length ; i ++){
      var temp = parseInt(a[i]) + parseInt(b[i]);
      if(flag){
          temp +=1
          flag = 0
      }
      if(temp >=10){
        flag = 1
        temp %= 10
      }
     sum = temp + sum;
   }
   if(flag){
    sum = 1 + sum;
   }
   return sum;
}

module.exports = add;