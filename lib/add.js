function add(str1, str2) {
  let arr1 = str1.split("").map((s) => Number(s)),
    arr2 = str2.split("").map((s) => Number(s));
  let temp,
    result = "",
    sign = 0;

  while (arr1.length || arr2.length || sign) {
    temp = (arr1.pop() || 0) + (arr2.pop() || 0) + sign;

    sign = Math.floor(temp / 10);
    result = (temp % 10) + "" + result;
  }

  return result;
}

module.exports = add;
