function add(a, b) {
  // 实现该函数
  const max = Math.max(a.length, b.length);
  const countArr = [];
  let isEveryDecadeA = 0;
  let i = max;
  while (i--) {
    let count =
      Number(a[i - max + a.length] || 0) +
      Number(b[i - max + a.length] || 0) +
      Number(isEveryDecadeA);
    countArr.unshift(count % 10);
    isEveryDecadeA = parseInt(count / 10);
  }
  if (isEveryDecadeA === 1) {
    countArr.unshift(1);
  }

  return countArr.join("");

  // const aArr = a.split("");
  // const bArr = b.split("");
  // const max = Math.max(aArr.length, bArr.length);
  // const differenceLength = Math.abs(aArr.length - bArr.length);
  // const newArr = [];
  // for (let i = 0; i < 1; i++) {
  //   newArr.push(0);
  // }
  // if (aArr.length > bArr.length) {
  //   bArr.unshift(newArr);
  // } else if (aArr.length < bArr.length) {
  //   aArr.unshift(newArr);
  // }
  // const countArr = [];
  // let isEveryDecadeA = 0;
  // for (let i = max; i > 0; i--) {
  //   let count =
  //     Number(aArr[i - 1]) + Number(bArr[i - 1]) + Number(isEveryDecadeA);
  //   countArr.push(count % 10);
  //   isEveryDecadeA = parseInt(count / 10);
  //   if (i - 1 === 0 && isEveryDecadeA === 1) {
  //     countArr.push(1);
  //   }
  // }
  // return countArr.reverse().join("");
}

module.exports = add;
