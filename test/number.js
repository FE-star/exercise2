/**
 * Created by 3645219 on 2017/8/9.
 */
describe('number test', function () {
  it('数字相等', function () {
    (5).should.be.exactly(5).and.be.a.Number()
  })
  it('数字无穷', function () {
    (10).should.not.be.Infinity()
  })
  it('NaN', function () {
    (10).should.not.be.NaN()
    NaN.should.be.NaN()
  })
  it('大于', function () {
    (10).should.be.above(0, 'not above')
  })
  it('大于等于', function () {
    (10).should.be.aboveOrEqual(10, 'not above Or equal')
  })
  it('接近', function () {
    (9.99).should.be.approximately(10, 0.1);
  })
  it('小于', function () {
    (0).should.be.below(10)
  })
  it('小于等于', function () {
    (0).should.be.belowOrEqual(10)
  })
  it('在之间', function () {
    (10).should.be.within(0, 20);
  })
})