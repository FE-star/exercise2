function add(firstNumber, secondNumber) {
  const [shortNumber, longNumber] =
    firstNumber.length < secondNumber.length
      ? [firstNumber, secondNumber]
      : [secondNumber, firstNumber];

  let result = '';
  let lastSumLargeThanTen = false;

  for (let i = -1; i >= -shortNumber.length; i--) {
    const sum = parseInt(shortNumber.at(i)) + parseInt(longNumber.at(i));

    if (lastSumLargeThanTen) {
      result = sum + parseInt(result.at(0)) + result.substring(1);
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
