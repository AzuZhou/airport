module.exports = (str, from, to) => { //I assume I receive a string as the first parameter
    let convert, toDec, dec

    convert = function (str, type) {
        if (type === 'heBi') {
            dec = []
            str.split(" ").map(digit => toDec(digit, 16))
            return dec[0].toString(2)
        } else if (type === 'biHe') {
            dec = []
            str.split(" ").map(digit => toDec(digit, 2))
            return dec[0].toString(16).toUpperCase()
        }
    }

    toDec = function (digit, base) {
        dec.push(parseInt(digit, base))
    }

    if (from === 'B' && to === 'H') {
        return convert(str, 'biHe')
    } else if (from === 'H' && to === 'B') {
        return convert(str, 'heBi')
    }
}