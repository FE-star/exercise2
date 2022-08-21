function add(num1, num2) {
  const tmp1 = Number(num1);
  const tmp2 = Number(num2);
  if (Number.isSafeInteger(tmp1) && Number.isSafeInteger(tmp2)) {
    return (tmp1 + tmp2).toString();
  } else {
    return (BigInt(num1) + BigInt(num2)).toString();
  }
}

module.exports = add;
