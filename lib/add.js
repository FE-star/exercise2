
function add(num1, num2) {
  let n1, n2, n3, resultStr, result;
  n1 = new Number(num1).valueOf();
  n2 = new Number(num2).valueOf();
  n3 = n1 + n2;
  // 非操作数
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    throw new TypeError('操作数必须为数字');
  }
  // 判断数据是否超过安全值
  if (Number.isSafeInteger(n1) && Number.isSafeInteger(n2) && Number.isSafeInteger(n3)) {
    resultStr = '' + n3;
  } else {
    // 大数据操作
    resultStr = bigNumAdd(num1, num2);
  }
  return resultStr;
}
function bigNumAdd(num1, num2) {
  let nArr1 = [...num1].reverse();
  let nArr2 = [...num2].reverse();
  let tmp, n1Flag = true, n2Flag = true;
  let jinwei = 0;
  let nArr3 = [];
  // 都是正数
  // if(nArr1[nArr1.length-1] ==='-' ) n1Flag = false;
  // if(nArr2[nArr1.length-1] ==='-' ) n2Flag = false;
  // if(n1Flag !== n2Flag){// 符号不同 做减法

  // }else{// 符号相同 做加法
  nArr1.forEach((item, index) => {
    tmp = jinwei + parseInt(item) + parseInt(nArr2[index] || 0);
    tmp > 9 ? jinwei = 1 : jinwei = 0;
    nArr3[index] = tmp % 10;
  });
  if (nArr2.length > nArr1.length) {
    nArr3.push(nArr2.slice(nArr2.length - nArr1.length));
    nArr3[nArr1.length] += jinwei;
  } else if (nArr2.length === nArr1.length && jinwei) {
    nArr3[nArr3.length] = jinwei;
  }
  // }
  return nArr3.reverse().join('').toString();
}
module.exports = add