function add(firstNumber, secondNumber) {
  const [shortNumber, longNumber] =
    firstNumber.length < secondNumber.length
      ? [firstNumber, secondNumber]
      : [secondNumber, firstNumber];

  let result = '';
  let lastSumLargeThanTen = false;

  for (let i = shortNumber.length - 1; i >= 0; i--) {
    const sum =
      parseInt(shortNumber.substring(i, i + 1)) +
      parseInt(longNumber.substring(i, i + 1));

    if (lastSumLargeThanTen) {
      result = sum + parseInt(result.substring(0, 1)) + result.substring(1);
    } else {
      result = sum + result;
    }
    lastSumLargeThanTen = sum > 10;
  }

  return (
    longNumber.substring(0, longNumber.length - shortNumber.length) + result
  );
}

module.exports = add;
