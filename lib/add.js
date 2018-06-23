function add() {
  // 实现该函数
  let args = [].slice.apply(arguments);
  return args.reduce((a, b) => {
    return addSafe(a, b);
  }, "");
}

function addSafe(a, b) {
  const aArr = a.split("").reverse();
  const bArr = b.split("").reverse();
  const aLen = aArr.length;
  const bLen = bArr.length;
  let sum = 0;
  let result = [];
  const MAX_LEN = Math.max(aLen, bLen);
  for (let i = 0; i < MAX_LEN; i++) {
    if (i < aLen) {
      sum += parseInt(aArr[i]);
    }
    if (i < bLen) {
      sum += parseInt(bArr[i]);
    }
    result.push(sum % 10);
    sum = ~~(sum / 10);
  }
  if (sum !== 0) {
    result.push(sum);
  }
  return result.reverse().join("");
}

module.exports = add;
