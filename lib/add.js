function add(str1, str2) {
  const diffLen = str1.length - str2.length;
  if (diffLen > 0) {
    str2 = padLeft(str2, Math.abs(diffLen));
  } else {
    str1 = padLeft(str1, Math.abs(diffLen));
  }
  const arr1 = str1.split('').reverse();
  const arr2 = str2.split('').reverse();
  const arr = [];
  let sum = 0,
    over = 0;
  for(let i = 0; i < arr1.length; i++) {
    sum = over;
    sum += parseInt(arr1[i]) + parseInt(arr2[i]);
    arr[i] = sum % 10;
    over = Math.floor(sum / 10);
  }
  if (over) arr[arr.length] = over;
  return arr.reverse().join('');
}

function padLeft(str, len) {
  for(let i = 0; i < len; i++) {
    str = '0' + str;
  }
  return str;
}

module.exports = add