function add(a, b) {
  // 实现该函数
  let newArr = [];
  let num1 = a.length > b.length ? a.split("") : b.split("");
  let num2 = a.length > b.length ? b.split("") : a.split("");
  let temp = 0;
  num1 = num1.reverse();
  num2 = num2.reverse();
  for (let i = 0; i < num1.length; i++) {
    let n;
    if (i <= num2.length) {
      n = Number(num1[i]) + Number(num2[i]) + temp;
    } else {
      n = Number(num1[i]) + temp;
    }
    if (n >= 10) {
      n = n -10;
      temp = 1;
    } else {
      temp = 0;
    }
    newArr.unshift(n);
  }
  if (temp) {
    newArr.unshift(temp);
  }
  let str = newArr.join("").toString();
  return str;
}

module.exports = add