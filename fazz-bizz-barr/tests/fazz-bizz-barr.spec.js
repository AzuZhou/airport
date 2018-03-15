const assert = require('assert')
const fazzBizzBarr = require('../')

describe('fazzBizzBarr', () => {
  it('should return Fazz Barr if it is multiple of 3 and 7', () => {
    assert.equal(fazzBizzBarr(21), 'Fazz Barr')
  })
  it('should return Fazz Bizz Barr if it is multiple of 3, 5 and 7', () => {
    assert.equal(fazzBizzBarr(105), 'Fazz Bizz Barr')
  })
  it('should return Bizz Barr if it is multiple of 5 and 7', () => {
    assert.equal(fazzBizzBarr(35), 'Bizz Barr')
  })
  it('should return Fazz Bizz if it is multiple of 3 and 5', () => {
    assert.equal(fazzBizzBarr(15), 'Fazz Bizz ')
  })
  it('should return Fazz if it is only multiple of 3', () => {
    assert.equal(fazzBizzBarr(6), 'Fazz ')
  })
  it('should return Bizz if it is only multiple of 5', () => {
    assert.equal(fazzBizzBarr(10), 'Bizz ')
  })
  it('should return Bizz if it is only multiple of 7', () => {
    assert.equal(fazzBizzBarr(14), 'Barr')
  })
  it('should return the passed in value if it is not a multiple of any of them', () => {
    assert.equal(fazzBizzBarr(4), 4)
  })
})
