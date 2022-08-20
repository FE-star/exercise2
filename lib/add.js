function add(a, b) {
  // 实现该函数
  const maxLength = Math.max(a.length, b.length);
  const aPad = a.padStart(maxLength, "0");
  const bPad = b.padStart(maxLength, "0");

  let sum = "";
  let f = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    const digit = parseInt(aPad[i]) + parseInt(bPad[i]) + f;
    f = Math.floor(digit / 10);
    sum = (digit % 10) + sum;
  }
  if (f === 1) {
    sum = "1" + sum;
  }
  return sum;
}

module.exports = add;
