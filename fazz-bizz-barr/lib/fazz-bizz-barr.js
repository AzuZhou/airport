module.exports = i => {
    let answer, arr, divisors, word, divisor
    arr = [3, 5, 7]
    if (typeof i === "number" && Number.isInteger(i)) { //I assume that the input is an integer
        divisors = arr.filter(d => i % d === 0)
        if (divisors.length >= 1) {
            answer = ""
            for (divisor of divisors) {
                switch (divisor) {
                    case 3: answer += "Fazz"
                        break
                    case 5: answer += "Bizz"
                        break
                    case 7: answer += "Barr"
                        break
                    default:
                }
            }
        } else {
            answer = i
        }
        return answer
    }
}
