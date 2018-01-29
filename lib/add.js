function add( _num1 , _num2 ) {
  // 实现该函数
  
  _num1 = parseInt(_num1?_num1:0);
  _num2 = parseInt(_num2?_num2:0);

  return  _num1 + _num2 + '';
}

module.exports = add