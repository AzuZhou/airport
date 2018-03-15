const fazzBizzBarr = i => {
    let answer = ""
    const multiples = [3, 5, 7]

    if (typeof i !== 'number') throw new Error('This function only accepts numbers')
    if (!Number.isInteger(i)) throw new Error('This function only accepts integers')

    const divisors = multiples.filter(integer => i % integer === 0)

    if (!divisors.length) return i

    for (let divisor of divisors) {
        if (divisor === 3) answer += 'Fazz '
        if (divisor === 5) answer += 'Bizz '
        if (divisor === 7) answer += 'Barr'
    }

    return answer
}

module.exports = fazzBizzBarr