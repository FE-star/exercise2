function add(num1,num2) {
  // 实现两数相加函数
  let reverseNum1, reverseNum2, lengthMax, carryDigit = 0,
      addNum1, addNum2, reverseSum = [];
  reverseNum1 = num1.split('').reverse().join('');
  reverseNum2 = num2.split('').reverse().join('');
  lengthMax = Math.max(reverseNum1.length, reverseNum2.length);
  for (let i=0; i<lengthMax; i++){
    addNum1 = reverseNum1[i] || 0;
    addNum2 = reverseNum2[i] || 0;
    addSum = Number(addNum1) + Number(addNum2) + carryDigit;
    carryDigit = Math.floor(addSum / 10);
    reverseSum.push(addSum % 10);
    if (i === lengthMax - 1 && carryDigit) {
      reverseSum.push(carryDigit);
    }
  }
  return reverseSum.reverse().join('');
}

// simplest
// function sumStrings(a,b){
//     var res='', c=0;
//     a = a.split('');
//     b = b.split('');
//     while (a.length || b.length || c){
//         c += ~~a.pop() + ~~b.pop();
//         res = c % 10 + res;
//         c = c>9;
//     }
//     return res.replace(/^0+/,'');
// }

module.exports = add
