function add(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw Error("Parameters must be string of number");
  }

  var arr1 = num1.split("");
  var arr2 = num2.split("");

  if (arr2.length < arr1.length) {
    arr2 = Array(arr1.length - arr2.length)
      .fill("0")
      .concat(arr2);
  } else if (arr1.length < arr2.length) {
    arr1 = Array(arr2.length - arr1.length)
      .fill("0")
      .concat(arr1);
  }

  var i = arr1.length - 1,
    carry = 0,
    numArr = [];
  while (i >= 0) {
    var sum = +arr1[i] + +arr2[i] + carry;
    if (sum > 9) {
      carry = 1;
      numArr.push(sum - 10);
    } else {
      carry = 0;
      numArr.push(sum);
    }
    i--;
  }

  // if after iterating, carry value is not 0, add it to the arr
  if (carry > 0) numArr.push(carry);

  return numArr.reverse().join("");
}

module.exports = add;
