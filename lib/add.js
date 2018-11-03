/**
 * 我做了下测试发现15位数和15位数相加时，相加结果不会溢出
 * console.log(999999999999999 + 999999999999999); // 1999999999999998
 * 而当15位数和16位数相加时，结果会溢出
 * console.log(999999999999999 + 9999999999999999); // 11000000000000000
 * 因此，找到可进行加法运算的数字的最长位数为:15
 */

/**
* 由于是两数相加，考虑到大于Number.MAX_VALUE的溢出情况，
* 因此不能直接将两个string类型的数转化位number在相加。
* 本函数的基本思路在于，通过测试找到可进行加法运算的数字的最长位数maxLen，
* 比如经过测试发现：当两数的位数<=15位时，相加不会溢出，因此maxLen=15，
* 然后每次分别从两个字符串中按照高位到地位选出15个数进行相加，从而得到结果。
* 详情请看以下代码。
*/
function add(nStr, mStr) {
  if (!/^[0-9]*$/.test(nStr) || !/^[0-9]*$/.test(mStr)) {
    console.log('数字字符串格式不正确');
    throw new Error("Wrong value");
  }
  let maxLen = 15; // 可进行加法运算的数字的最长位数
  let addCarry = 0; // 进位
  let i = 1;
  let sumStr = '';
  let nLen = nStr.length;
  let mLen = mStr.length;

  while (nStr.length - (i - 1) * maxLen > 0 || mStr.length - (i - 1) * maxLen > 0) {
    let nLeftIndex = nLen - i * maxLen >= 0 ? nLen - i * maxLen : 0;
    let nRightIndex = nLen - (i - 1) * maxLen >= 1 ? nLen - (i - 1) * maxLen : 0;
    let mLeftIndex = mLen - i * maxLen >= 0 ? mLen - i * maxLen : 0;
    let mRightIndex = mLen - (i - 1) * maxLen >= 1 ? mLen - (i - 1) * maxLen : 0;
    let xStr = '0';
    let yStr = '0';
    if (nRightIndex > 0) {
      xStr = nStr.substring(nLeftIndex, nRightIndex);
    }
    if (mRightIndex) {
      yStr = mStr.substring(mLeftIndex, mRightIndex);
    }

    let tempSumStr = '';
    if (xStr[0] == '0') {
      tempSumStr = addZero(xStr, yStr, addCarry.toString());
    } else if (yStr[0] == '0') {
      tempSumStr = addZero(yStr, xStr, addCarry.toString());
    } else {
      let tempSum = parseInt(xStr) + parseInt(yStr) + addCarry;
      tempSumStr = tempSum.toString();
    }
    if (tempSumStr.length > maxLen) {
      sumStr = tempSumStr.substring(1) + sumStr;
      addCarry = 1;
    } else {
      sumStr = tempSumStr + sumStr;
      addCarry = 0;
    }
    i++;
  }
  if (addCarry === 1) {
    sumStr = '1' + sumStr;
  }
  console.log(sumStr);
  return sumStr;
}

/**
 * 比如 '000' + '1' + '1' => 002
 *   或 '000' + '9' + '1' => 010
 */
function addZero(zeroStartStr, num1Str, num2Str) {
  let temp = parseInt('1' + zeroStartStr);
  let num1 = parseInt(num1Str);
  let num2 = parseInt(num2Str);
  let sum = temp + num1 + num2;
  let sumStr = sum.toString();
  let topDigitStr = '0';
  if (parseInt(sumStr[0]) > 1) {
    topDigitStr = (parseInt(sumStr[0]) - 1).toString();
  }
  let result = topDigitStr !== '0' ? topDigitStr + sum.toString().substring(1) : sum.toString().substring(1);
  return result;
}

module.exports = add





function getMaxLen() {
  let max_value = Number.MAX_VALUE;
  let max_value_str = max_value.toString();
  let len = max_value_str.substring(max_value_str.lastIndexOf('+') + 1);
  return parseInt(len) - 2;
}

function testAdd() {
  let _num = '999999999999999999999999999999';
  console.log(_num.length);// 30
  let _result = add(_num, _num);
  console.log(`999999999999999999999999999999 
             + 999999999999999999999999999999 
             = ${_result}`); // 1999999999999999999999999999998
  console.log(_result.length);// 31
}

// add('843529812342341234', '236124361425345435');
// add('843529812342341234', '23612m4361425345435');

// testAdd();
// console.log(addZero('0000', '9', '1'));
// console.log(addZero('000', '9', '1'));
// console.log('123'.substring(0, 308));


