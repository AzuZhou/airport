const hexaBi = (str, from, to) => { //I assume I receive a string as the first parameter
    let convert, toDec, dec

    if (typeof str !== "string") throw new Error('Please introduce a string as first parameter')
    if (from === to) throw new Error('Cannot convert the same type')

    convert = function (str, type) {
        if (type === 'heBi') {
            dec = []
            str.split(" ").map(digit => toDec(digit, 16))
            return dec[0].toString(2)
        } else {
            dec = []
            str.split(" ").map(digit => toDec(digit, 2))
            return dec[0].toString(16).toUpperCase()
        }
    }

    toDec = function (digit, base) {
        dec.push(parseInt(digit, base))
    }

    if (from === 'B' && to === 'H') return convert(str, 'biHe')
    if (from === 'H' && to === 'B') return convert(str, 'heBi')
}

module.exports = hexaBi