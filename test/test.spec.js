var add = require('../lib/add')

describe('大数相加add方法', function () {
  test('字符串"42329"加上字符串"21532"等于"63861"', function () {
    expect(add('42329', '21532')).toBe('63861')
  })
  
  test('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', function () {
    expect(add('843529812342341234', '236124361425345435')).toBe('1079654173767686669')
  })
})

// test: add git actions