const assert = require('assert')
const hexaBi = require('../')

describe('hexaBi', () => {
    it('should return A2B if it is in mode Binary to Hexadecimal', () => {
        assert.equal(hexaBi("101000101011", "B", "H"), "A2B")
    })
    it('should return 101000101011 if t is in mode Hexadecimal to Binary', () => {
        assert.equal(hexaBi("A2B", "H", "B"), "101000101011")
    })
})