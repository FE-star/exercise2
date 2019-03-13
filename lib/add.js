function add(str1, str2) {
  var res = ''  // result of addition, changes in every addition
  var lastCarry = 0 // carry of last addition (reverse order of string)
  // for loop the longer reverse string, 
  // add two number and save the current carry for next operation
  var str1IsLonger = str1.length > str2.length
  var longerOne = str1IsLonger ? getReverseString(str1) : getReverseString(str2)
  var shorterOne = str1IsLonger ? getReverseString(str2) : getReverseString(str1)
  for(var i=0; i<longerOne.length; i++) {
    var num1 = Number(longerOne.charAt(i))
    // add the last carry into result of this addition
    var tempTotal = num1 + lastCarry
    if(i < shorterOne.length) {
      tempTotal += Number(shorterOne.charAt(i))
    }
    lastCarry = Math.floor(tempTotal / 10)
    res += tempTotal % 10
  }
  if(lastCarry > 0) res += lastCarry
  // reverse the string at the last,
  // cause we calculate in a reverse order of input string
  return getReverseString(res)
}

/**
 * reverse a string
 * @param {*} str input string
 */
function getReverseString(str) {
  return str.split('').reverse().join('')
}

module.exports = add