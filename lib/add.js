function add(num1 = '', num2 = '') {
  if (!num1 || !num2) {
    return 0;
  }
  let numOne = num1.split('');
  let numTwo = num2.split('');
  let numOneIndex = numOne.length - 1;
  let numTwoIndex = numTwo.length - 1;
  let resArr = numOne.length > numTwo.length ? numOne : numTwo;
  let resIndex = resArr.length - 1;
  let addOne = 0;
  while (numOne[numOneIndex] && numTwo[numTwoIndex]) {
    let digitTotal = parseInt(numOne[numOneIndex--], 10) + parseInt(numTwo[numTwoIndex--], 10) + addOne;
    resArr[resIndex--] = `${digitTotal % 10}`;
    addOne = digitTotal >= 10 ? 1 : 0;
  }
  while (numOne[numOneIndex] || numTwo[numTwoIndex]) {
    let digitTotal = parseInt(numOne[numOneIndex] || numTwo[numTwoIndex], 10) + addOne;
    resArr[resIndex--] = `${digitTotal % 10}`;
    addOne = digitTotal >= 10 ? 1 : 0;
  }
  if (addOne) {
    resArr.unshift('1');
  }
  return resArr.join('');
}

module.exports = add