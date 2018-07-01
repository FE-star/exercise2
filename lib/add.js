function add() {
  // 实现该函数
  let args = [].slice.apply(arguments);
  return args.reduce((a,b) =>{
    return addfn(a, b);
  },"");
}

function addfn (a, b){
  const arr1 = a.split("").reverse();
  const arr2 = b.split("").reverse();
  const len1 = arr1.length;
  const len2 = arr2.length;
  let sum = 0;
  let result = [];
  const max_length = Math.max(len1,len2);
  for (let i = 0; i<max_length; i++) {
    if (i < len1){
      sum += parseInt(arr1[i]);
    }
    if (i < len2){
      sum += parseInt(arr2[i]);
    }
    result.push(sum % 10);
    sum = ~~(sum / 10);
  }
  if (sum !== 0) {
    result.push(sum);
  }
  return result.reverse().join("");
}

module.exports = add