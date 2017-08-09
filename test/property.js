/**
 * Created by 3645219 on 2017/8/9.
 */
describe('property test', function () {
  it('should empty', function () {
    ''.should.be.empty();
    [].should.be.empty();
    ({}).should.be.empty();
  })
  it('should enumerable', function () {
    ({ a: 10 }).should.have.enumerable('a');
    ({ a: 10, b: 10 }).should.have.enumerables('a', 'b');
  })
  it('should have key', function () {
    ({ a: 10 }).should.have.keys('a');
  })
  it('should have length', function () {
    [1, 2].should.have.length(2);
  })
  it('should have poperty', function () {
    ({ a: 10 }).should.have.property('a', 10);
  })
  it('should have own property', function () {
    ({ a: 10 }).should.have.ownProperty('a', 10);
  })
  it('should have poperty in deep', function () {
    ({ a: {b: 10} }).should.have.propertyByPath('a', 'b').eql(10);
  })
  it('should have poperty with descriptor', function () {
    ({ a: 10 }).should.have.propertyWithDescriptor('a', { enumerable: true });
  })
  it('should have size', function () {
    ({ a: 10, b: 10 }).should.have.size(2);
    (new Map([[1, 2], [2, 2]])).should.have.size(2);
  })
  it('should have value', function () {
    ({ a: 10, b: 10 }).should.have.value('a', 10);
  })
})