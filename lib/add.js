/**
 * 多位相加
 */

function add(a, b) {
  const numReg = /^\d+$/
  if (!a || !a.match(numReg) || !b || !b.match(numReg)) {
    return NaN
  }

  if (a === '0') {
    return b;
  }
  if (b === '0') {
    return a;
  }

  const maxLen = Math.max(a.length, b.length);

  // 补位
  const padA = a.padStart(maxLen, '0');
  const padB = b.padStart(maxLen, '0');

  let carry = 0; // 进位
  let sum = '';
  const digits = 14; // 位数
  const maxNum = Math.pow(10, digits);

  for (let i = maxLen; i > 0; i -= digits) {
    const start = i - digits > 0 ? i - digits : 0;
    // console.log(parseInt(padA.slice(start, i) || 0), parseInt(padB.slice(start, i) || 0), start, i, a, b)
    const result = parseInt(padA.slice(start, i) || 0) + parseInt(padB.slice(start, i) || 0) + carry;
    carry = result >= maxNum ? 1 : 0;
    sum = result % maxNum + sum;
  }
  return carry ? 1 + sum : sum;
}

/**
 * 一位一位相加
function add(a, b) {
  const numReg = /^\d+$/
  if (!a || !a.match(numReg) || !b || !b.match(numReg)) {
    return NaN
  }

  const maxLen = Math.max(a.length, b.length);

  // 补位
  const padA = a.padStart(maxLen, '0');
  const padB = b.padStart(maxLen, '0');

  let preGte10 = 0; // 进位
  let sum = '';
  for (let i = maxLen - 1; i >= 0; i--) {
    const result = parseInt(padA[i] || 0) + parseInt(padB[i] || 0) + preGte10;
    preGte10 = result >= 10 ? 1 : 0;
    sum = result % 10 + sum;
  }
  return preGte10 ? 1 + sum : sum;
}
*/

module.exports = add