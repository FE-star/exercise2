function add(str1, str2) {
  const len1 = str1.length,
    len2 = str2.length;
  
  let maxLen = null,
    minLen = null,
    maxStr = null,
    minStr = null,
    lenGap = Math.abs(len1 - len2); // 字符串长度差

  if (len1 >= len2) {
    maxLen = len1;
    maxStr = str1;
    minLen = len2;
    minStr = str2;
  } else {
    maxLen = len2;
    maxStr = str2;
    minLen = len1;
    minStr = str1;
  }

  let result = '';
  let addNum = 0; // 每次相加的进位

  // 遍历长度短的字符串 按位相加 将结果与长字符串高位截取相加
  for (let i = 1; i <= minLen; i++) {
    const char1 = maxStr[maxLen - i],
      char2 = minStr[minLen - i];

    const sum = addString(char1, char2) + addNum;

    addNum = 0;

    if (sum >= 10) {
      addNum++;
      result = sum - 10 + result;
    } else {
      result = sum + result;
    }
  }

  if (addNum !== 0) { // 还有进位 需要将进位加进去
    return add(maxStr.slice(0, lenGap), `${addNum}`) + result;
  }
  return maxStr.slice(0, lenGap) + result;
}

// 一位字符串相加
function addString(str1, str2) {
  return Number(str1) + Number(str2);
}

module.exports = add