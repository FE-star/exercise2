
function add(arg1, arg2) {
  // 实现该函数
  let array1 = arg1.split('').reverse()
  let array2 = arg2.split('').reverse()
  const MaxLength = Math.max(array1.length, array2.length)
  let result = [], 
      sum = 0, 
      offset=0,
      remian = 0;

  for(var i = 0; i < MaxLength; i++){
    sum = offset;
    if(i < array1.length){
      sum += Number(array1[i])
    }
    if(i < array2.length){
      sum += Number(array2[i])
    }
    offset = Math.floor(sum/10);
    remian = sum%10
    result[i] = remian;
  }

  if(offset!=0){
    result[i+1] = offset
  }

  return result.reverse().join('');
}

module.exports = add