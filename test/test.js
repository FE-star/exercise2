var add = require('../lib/add')

describe('大数相加add方法', function () {
  it('字符串"42329"加上字符串"21532"等于"63861"', function () {
    add('42329', '21532')
      .should.equal('63861')
  })
  
  it('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', function () {
    add('843529812342341234', '236124361425345435')
      .should.equal('1079654173767686669')
  })

    it('测试只有值相等即可',function(){
        (4).should.equal(4);
        (4).should.be.exactly(4);
        'foobar'.should.startWith('foo');
        'foobar'.should.endWith('bar');
        (99.99).should.be.approximately(100, 0.1);
        (undefined + 0).should.be.NaN;
        (1/0).should.be.Infinity;
        //should({name:'lee',age:19}).property('name');
        //should({name:'lee',age:19}).property('toString');
        [].should.be.empty;
        (function() {
            arguments.should.be.empty;
        })();
        // user.should.have.properties({
        //     name: 'denis',
        //     age: 24});
        (function(){throw new Error('fail');}).should.throw();
    })
})
