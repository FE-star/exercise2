var strint = require('strint');
function add() {
  // 实现该函数
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += +arguments[i];
  }
  return sum + '';
}

module.exports = add