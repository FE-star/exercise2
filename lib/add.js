function add(num1, num2) {
  // 实现该函数
  let aNum1 = num1.split("").reverse();
  let aNum2 = num2.split("").reverse();
  let maxANum, minANum;
  if (aNum1.length > aNum2.length) {
    maxANum = aNum1;
    minANum = aNum2;
  } else {
    maxANum = aNum2;
    minANum = aNum1;
  }
  // 进位标识
  let minLen = minANum.length;
  let flag = 0;
  for (let i = 0; i < minLen; i++) {
    let sum = +maxANum[i] + +minANum[i] + flag;

    maxANum[i] = sum % 10;
    flag = parseInt(sum / 10);
  }
  if (flag == 1) {
    minLen++;
    if (maxANum[minLen]) {
      maxANum[minLen]++;
    } else {
      maxANum[minLen] = 1;
    }
  }

  return maxANum.reverse().join("");
}

module.exports = add;
