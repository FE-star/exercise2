var add = require('../lib/add')

describe('大数相加add方法', function () {
  
  test('参数不等于两个时，提示参数错误',function(){
    expect(
      ()=>{
        add('123')
      }
    ).toThrow(Error)
  })

  test('非数字类型或字符类型数字时报错',function(){
    expect(()=>{
      add('abc','123');
    }).toThrow(TypeError);
  })

  test('字符串"42329"加上字符串"21532"等于"63861"', function () {
    expect(add('42329', '21532')).toBe('63861')
  })
  
  test('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', function () {
    expect(add('843529812342341234', '236124361425345435')).toBe('1079654173767686669')
  })

  test('"123456"加上"123"等于123579',function(){
    expect(add('123456',123)).toBe('123579');
  })

  test('"123456"加上"999"等于12455',function(){
    expect(add('123456',999)).toBe('124455');
  })
})