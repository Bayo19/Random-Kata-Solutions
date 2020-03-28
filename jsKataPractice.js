console.clear()
    // 1. gas miles
function calGas(miles) {
    let gallon = 2
    let result = (miles * gallon) / 25
    return result
}

console.log(calGas(25))


// 2. spacify
function spacify(str) {
    let y = str.split('').join(' ')
    return y
}

console.log(spacify('stein'))


// 3. finding max and min values in array/list
var min = function(list) {
    let list2 = list.sort(function(a, b) {
        return a - b
    })

    return list2[0];
}

var max = function(list) {
    let list2 = list.sort(function(a, b) {
        return a - b

    })
    return list2[list.length - 1];
}

console.log(max([3, 5, 6]))


function getMean(arr, x, y) {
    if (x > 1 && y > 1 && x <= arr.length && y <= arr.length) {
        let first = arr.slice(0, x)
        let last = arr.slice(-y)
        let firstRed = first.reduce(function(a, c) {
            return a + c
        }, 0)
        let lastRed = last.reduce(function(a, c) {
            return a + c
        }, 0)
        let firstMean = firstRed / first.length
        let lastMean = lastRed / last.length

        return (firstMean + lastMean) / 2
    }
    return -1
}

console.log(getMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 3))
console.log(getMean([13, 6, 36, 86, 02, 09, 43], 1, 8))


function squareDigits(num) {
    // create array of strings from given number 
    //in order to split
    let noom = num.toString().split('')
        // map to create new array of numbers
    let othernum = noom.map(function(a) {
            return parseInt(a)
        })
        // map to create square of each number
    let superOthernum = othernum.map(function(x) {
            return x * x
        })
        // convert to string again to remove comma
        // probably would work without conversion
    let finalBitch = superOthernum.toString()
        // remove comma 
    let z = finalBitch.replace(/,/g, '')
        // convert back to number
    let zz = parseInt(z)
    return zz
}

console.log(squareDigits(123))
console.log(squareDigits(9119))

function DNAStrand(dna) {
    let result = ""
    let A = 'A'
    let T = 'T'
    let C = 'C'
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] == A) {
            result += "T"
        } else if (dna[i] == T) {
            result += "A"
        } else if (dna[i] == C) {
            result += "G"
        } else result += "C"
    }

    return result
}



console.log(DNAStrand('ATACGA'))


// -----------
//  Boolean logic from scratch

const or = (a, b) => {
    if (a && !b) {
        return true
    } else if (a && b) {
        return true
    } else if (!a && b) {
        return true
    } else {
        return false
    }
};

const xor = (a, b) => {
    if (a && b) {
        return false
    } else if (a && !b) {
        return true
    } else if (!a && b) {
        return true
    } else if (!a && !b) {
        return false
    } else {
        return false
    }
}

// console.log(or(true, true))
// console.log(or(true, false))
// console.log(or(false, false))
// console.log(or(false, true))

// console.log(xor(true, true))
// console.log(xor(true, false))
// console.log(xor(false, false))
// console.log(xor(false, true))

// ---------

function divide(weight) {
    if (weight == 1 || weight == 2 || weight > 3 && weight % 2 != 0) {
        return false
    } else {
        return true
    }
}
console.log('divide')
console.log(divide(2))

function getGrade(s1, s2, s3) {
    let resLetter = ''
    let res = (s1 + s2 + s3) / 3
    console.log(res)
    if (res > 90 && res <= 100) {
        resLetter = 'A'
    } else if (res == 80 || res > 80 && res < 90) {
        resLetter = 'B'
    } else if (res == 70 || res > 70 && res < 80) {
        resLetter = 'C'
    } else if (res > 60 && res <= 70) {
        resLetter = 'D'
    } else {
        resLetter = 'F'
    }
    return resLetter
}



console.log(getGrade(70, 70, 70))
console.log(getGrade(75, 70, 79))
console.log(getGrade(60, 82, 76))

// Expression matter kata
function expressionMatter(a, b, c) {
    let one = a + b + c
    let two = a + (b * c)
    let three = (a * b) + c
    let four = (a + b) * c
    let five = a * (b + c)
    let six = a * b * c
    let res = Math.max(one, two, three, four, five, six)
    return res
}

console.log(expressionMatter(1, 2, 3))

// nth power


function index(array, n) {
    if (n > array.length - 1) {
        return -1
    } else {
        let mres = array[n]
        let fres = Math.pow(mres, n)
        return fres
    }

}

console.log(index([1, 2, 4, 7], 3))

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    if (distanceToPump / mpg <= fuelLeft) {
        return true
    } else {
        return false
    }
};

console.log(zeroFuel(50, 25, 2))
console.log(zeroFuel(100, 50, 1))

function betterThanAverage(classPoints, yourPoints) {
    let theClass = classPoints.reduce(function(a, c) {
        return a + c
    })
    let classRes = theClass / classPoints.length
    if (yourPoints > classRes) {
        return true
    } else {
        return false
    }

}

console.log(betterThanAverage([1, 2, 3, 4, 5], 1))

function check(a, x) {
    return a.includes(x)
};


console.log(check([1, 2, 'jef'], 'jef'))



function solution(str) {
    return str.split('').reverse().join('')

}

console.log(solution('splendid'))

function makeNegative(num) {
    if (num > 0) {
        return (num - num) - num
    } else return num
}
console.log(makeNegative(-40))

function arrayPlusArray(arr1, arr2) {
    let ab = arr1.reduce(function(a, c) {
        return a + c
    })
    let cd = arr1.reduce(function(a, c) {
        return a + c
    })

    return ab + cd
}

console.log(arrayPlusArray([25, 67, 34], [90, 76, 25]))


console.clear()

function findLongest(str) {

    let x = str.split(" ");
    var longest = 0

    for (var i = 0; i > x.length; i++) {
        if (x(i).length > longest) {
            longest = x[i].length
        }
    }
    return longest
}

console.clear()

function getRealFloor(n) {
    if (n <= 0) {
        return n
    } else if (n >= 1 && n <= 12) {
        return n - 1
    } else if (n >= 15) {
        return n - 2
    }

}


function digitize(n) {
    let nn = n.toString().split('').reverse()
    let nnn = nn.map(Number)

    return nnn
}

console.log(digitize(13456789))
console.clear()

function removeChar(str) {
    if (str.length > 2) {
        let st = str.split('')
        st.pop()
        st.shift()
        let sm = st.join('')

        return sm

    }

};

removeChar('hello')


function opposite(number) {
    return -number

}

console.log(opposite(9789.678))




function sumMix(x) {
    let xx = x.map(Number)
    let xxx = xx.reduce(function(a, c) {
        return a + c
    }, 0)
    return xxx
}

sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])



function squareSum(numbers) {
    let res = numbers.map(function(n) {
        return n * n
    })
    let fokingEll = res.reduce(function(a, c) {
        return a + c
    })
    return fokingEll
}

squareSum([1, 2, 3])
console.clear()


function sumStr(a, b) {
    if (a == '') {
        a = 0
    }
    if (b == '') {
        b = 0
    }

    let ay = parseInt(a)
    let be = parseInt(b)
    let ce = (be + ay).toString()
    return ce
}

sumStr('', '78')

function abbrevName(name) {

    let split = name.split(' ')
    let one = split[0].slice(0, 1).toUpperCase()
    let two = split[1].slice(0, 1).toUpperCase()
    return `${one}.${two}`

}
abbrevName('john doe')


function findSmallestInt(args) {
    let ssh = args.sort(function(a, b) {
        return b - a
    })
    let smol = ssh.pop()
    console.log(smol)
}

function SmallestIntegerFinder(args) {
    let ssh = args.sort(function(a, b) {
        return b - a
    })
    let smol = ssh.pop()
    return smol
}

findSmallestInt([1, 45, 76, -903, 23, -4])
console.log(SmallestIntegerFinder([1223, 65, -765, -45]))

function grow(x) {

    let ex = x.reduce(function(a, b) {
        return a * b
    })
    console.log(ex)
}

grow([1, 2, 3, 4, 5, 6, 5000])

function getCount(str) {
    let count = 0
    let y = str.split('')
    let z = y.filter(function(x) {
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
            count += 1
            return count
        }

    })
    let spr = z.length
    return spr
}



console.log(getCount('hindaaeiou'))



// need to finish
function accum(s) {
    let g = [...s]

    let w = g.map(function(letter, idx) {
        return letter.repeat(idx + 1)
    })

    let x = w.map(function(j) {
        return j[0].toUpperCase() + j.slice(1).toLowerCase()
    })
    return x.join('-')


}

console.log(accum('lolof'))



function getMiddle(s) {
    let low = 0
    let high = s.length - 1
    let mid = Math.floor((low + high) / 2)
    if (s.length % 2 == 0) {
        console.log(`${s[mid]}${s[mid +1]}`)
    } else {
        console.log(s[mid])
    }
}
getMiddle('testaltainzg')


function highAndLow(numbers) {
    let x = numbers.split(' ').join(' ').split(' ')

    let y = x.sort(function(a, b) {
        return a - b
    })

    return `${y[y.length -1]} ${y[0]}`
}

console.log(highAndLow('1 2 7 4 5 3 789 -234'))




function findShort(s) {
    let x = s.split(' ')

    let y = x.map(function(d) {
        return d.length
    })
    let z = y.sort(function(a, b) {
        return a - b
    })
    return z[0]

}

console.log(findShort('stein hof staceyandha bish to'))

console.clear()

function sumTwoSmallestNumbers(numbers) {
    let yagami = numbers.sort(function(a, b) {
        return a - b
    })
    let light = `${yagami[0] + yagami[1]}`

    return parseInt(light)
}

console.log(sumTwoSmallestNumbers([1, 45, 87, 34, 3]))


function validatePIN(pin) {
    let res = /^[0-9]{4}$/.test(pin)
    let res2 = /^[0-9]{6}$/.test(pin)
    if (res || res2) {
        console.log(true)
    } else {
        console.log(false)
    }
}

validatePIN(123456)



function friend(friends) {
    let fren = friends.filter(function(name) {
        return name.length == 4
    })
    return fren
}

console.log(friend(['jacqui', 'philip', 'kate', 'bill', 'stein']))

function reverseWords(str) {
    let f = str.split(' ')
    let g = f.map(function(x) {
        return x.split('').reverse().join(' ')
    })

    let h = g.map(function(c) {
        return c.split(' ').join('')
    })
    return h.join(' ')
}

console.log(reverseWords('Jason is coming home'))

console.clear()

function oddOrEven(array) {

    if (array.length < 1) {
        return 'even'
    } else {
        let x = array.reduce(function(a, b) {
            return a + b
        })

        if (x % 2 == 0) {
            return 'even'
        } else {
            return 'odd'
        }

    }

}

console.log(oddOrEven([1, 2, 8]))

console.clear()

function sortByLength(array) {
    return array.sort(function(a, b) {
        return a.length - b.length
    })
};
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))

console.clear()

// using brute force to remove duplicate number.
// evens and odds

function menFromBoys(arr) {
    let x = arr.filter(function(n) {
        return n % 2 == 0
    })
    let len = x.length
    let w = []
    for (let i = 0; i < len; i++) {
        if (w.indexOf(x[i]) === -1) {
            w.push(x[i])
        }
    }
    // w to be concated
    let y = arr.filter(function(n) {
        return n % 2 != 0
    })
    let u = []
    let lenn = y.length
    for (let i = 0; i < lenn; i++) {
        if (u.indexOf(y[i]) === -1) {
            u.push(y[i])
        }
    }

    let j = w.sort(function(a, b) {
        return a - b
    })
    let k = u.sort(function(a, b) {
        return b - a
    })

    let z = j.concat(k)
    return z

}
console.log(menFromBoys([5, 3, 3, 5, 5, 6, 1, 6, 8, 9, 1, 1, 1, 1, 2, 2]))

// reverse a number
function reverseNumber(n) {
    if (n > 0) {
        let x = n.toString().split('').reverse().join('')
        return parseInt(x)
    } else if (n < 0) {
        let y = n.toString().split('').reverse()
        y.pop(y.length - 1)
        let b = y.join('')
        let c = parseInt(b)
        return -c

    }

}

console.log(reverseNumber(-56789))

function twoOldestAges(ages) {
    let x = ages.sort(function(a, b) {
        return b - a
    })
    let c = `${x[0]} ${x[1]}`
    let d = c.split(' ')
    let f = d.map(Number)
    let g = f.sort(function(a, b) {
        return a - b
    })
    return g
}
console.log(twoOldestAges([4, 5, 7, 2, 9, 8, 7, 2, 65, 34, 87]))


// return longest word in string 
function longestWord(stringOfWords) {
    let x = stringOfWords.split(' ')
    let c = x.sort(function(a, b) {
        return a.length - b.length
    })
    return c[c.length - 1]
}

console.log(longestWord('john die stein man girl woman'))


// sum of a  numbers digits
function sumDigits(number) {
    if (number < 0) {

        let y = number.toString().split('')
        y.shift()
        let j = y.map(Number)
        return j.reduce(function(a, c) {
            return a + c
        })
    } else {
        let p = number.toString().split('').map(Number).reduce(function(a, c) {
            return a + c
        })
        return p
    }
}

console.log(sumDigits(8932))


function noOdds(values) {
    let x = values.filter(f => f % 2 == 0)
    return x
}

console.log(noOdds([3, 0, 1, 6, 2, 5, 1, 7, -5, -2, 9, 4]))


function isSortedAndHow(array) {
    let origin = array.join('')

    if (origin === array.sort(function(a, b) {
            return a - b
        }).join('')) {
        return 'asc'
    } else if (origin === array.sort(function(a, b) {
            return b - a
        }).join('')) {
        return 'desc'
    } else {
        return 'no'
    }

}
console.log(isSortedAndHow([5, 4, 3, 2, 1]))
console.log(isSortedAndHow([1, 2, 3, 4, 5]))
console.log(isSortedAndHow([2, 1, 3, 7, 4, 6, 5]))


function capitalize(s) {
    let x = s.split('')
    let y = x.map(function(n, i) {
        if (i % 2 == 0) {
            return n.toUpperCase()
        } else {
            return n.toLowerCase()
        }
    }).join('')
    let z = x.map(function(n, i) {
        if (i % 2 == 0) {
            return n.toLowerCase()
        } else {
            return n.toUpperCase()
        }
    }).join('')
    return [y, z]
}
console.log(capitalize('happy'))


function isVeryEvenNumber(n) {
    let x = n.toString().split('').map(Number).sort().reduce(function(a, c) {
        return a + c
    })

    if (x > 9) {
        return isVeryEvenNumber(x)

    } else {
        let j = x
        if (j % 2 == 0) {
            return true
        } else {
            return false
        }
    }
}

console.log(isVeryEvenNumber(8368811071152466))

function findLong(str) {
    let w = str.split(' ')
    let x = w.sort(function(a, b) {
        return a.length - b.length
    })
    let y = x[x.length - 1]
    return y
}
console.log(findLong('The quick brown fox jumped over the moon'))

function largestOfFour(n) {
    let w = n.map(function(j) {
        return Math.max(...j)
    })
    return w
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]))

function confirmEnding(str, target) {
    if (str.slice(-target.length) === target) {
        return true
    } else {
        return false
    }
}

console.log(confirmEnding('bastiaj', 'iaj'))

function repeatNumTimes(str, num) {
    if (num < 0) {
        return ''
    } else {
        return str.repeat(num)
    }
}

console.log(repeatNumTimes('steiner is cool', 2))

function truncate(str, num) {
    if (str.length < num) {
        return str
    } else {
        let x = str.slice(0, num)
        return x + '...'
    }
}

console.log(truncate('so i was walking down the street', 12))


function booWho(bool) {
    if (typeof(bool) == 'boolean') {
        return true
    } else if (typeof(bool) == 'number') {
        return undefined
    }
}

console.log(booWho(0))

function titleCase(str) {
    let w = str.slice(0, 1).toUpperCase()
    let x = str.slice(1).toLowerCase()
    return w + x
}

console.log(titleCase('i\'m kIND of cool'))

console.clear()

// function solution(number) {
//     let sum = []

//     for (let i = 1; i < number; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             sum.push(i)
//         }
//     }
//     return sum.reduce(function(a, c) {
//         return a + c
//     });
// }
// console.log(solution(10))