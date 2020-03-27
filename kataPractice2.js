function solution(number) {
    let sum = []

    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum.push(i)
        }
    }
    return sum.reduce(function(a, c) {
        return a + c
    });
}

console.log(solution(10))
    // wasnt working in original file but function works in new file. fucking weird

console.clear()

function checkTense(word) {
    let y = [...word]

    if (y.slice(-2).join('') == 'ed') {
        return 'Past'
    } else {
        return 'Present'
    }

}

console.log(checkTense('farted'))
console.log(checkTense('loved'))
console.log(checkTense('singing'))

console.clear()

function celsiusToRomer(temp) {
    let x = temp * (21 / 40) + 7.5
    return x
}
console.log(celsiusToRomer(24))

console.clear()

// function whatListAmIOn(actions) {
//     let f = [...actions]
//     let g = f.map(function(n) {

//         if (n[0][0].includes('b') || n[0][0].includes('f') || n[0][0].includes('k')) {
//             return 'naughty'
//         } else if (n[0][0].includes('g') || n[0][0].includes('s') || n[0][0].includes('n')) {
//             return 'nice'
//         } else {
//             return ''
//         }

//     })
//     if (g.every(function(n) {
//             return n == 'naughty'
//         })) {
//         return 'naughty'
//     } else if (g.every(function(n) {
//             return n == 'nice'
//         })) {
//         return 'nice'
//     } else {
//         let left = []
//         let right = []
//         for (let i = 0; i < g.length; i++) {
//             if (i == 'naughty') {
//                 left.push(i)
//             } else if (i == 'nice') {
//                 right.push(i)
//             }
//             if (left.length == right.length) {
//                 return 'naughty'
//             } else {
//                 return g
//             }
//         }
//     }
// }
// b, f, k are naughty ... g,s,n are nice
// console.log(whatListAmIOn(['broke someone\'s window', 'fought over a toaster', 'killed a bug']))
// console.log(whatListAmIOn(['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']))
// console.log(whatListAmIOn(['got someone a new car', 'saved a man from drowning', 'never got into a fight']))

function sentenceCount(string) {
    let str = string.split('')
    let x = str.filter(function(n) {
        return n == '.' || n == '!' | n == '?'
    })
    return x.length


}

console.log(sentenceCount('Hello. Hey? It\'s good to see you!'))

console.clear()

function removeChar(str) {
    let x = [...str]
    let y = x.slice(1, -1)
    return y.join('')

};

console.log(removeChar('steiner'))
console.log(removeChar('rothham'))
console.log(removeChar('hesh'))
console.clear()

function validateNumber(str) {
    let x = str.replace('+44', '0')
    if (x.length == 0) {
        return 'Plenty more fish in the sea'
    }
    let y = x.split('-').join('').replace('-', '')
    if (y.slice(0, 2) == '07' && y.length == '11') {
        return 'In with a chance'
    } else {
        return 'Plenty more fish in the sea'
    }
}

console.log(validateNumber('+44492754149'))
console.log(validateNumber('0284435885'))
console.log(validateNumber('020-8443-5885'))

console.clear()

function shortcut(string) {
    let x = string
    let f = x.replace(/[aeiou]/gi, '')
    return f
}

console.log(shortcut('codewars'))
console.log(shortcut('goodbye'))

console.clear()

function shortenToDate(longDate) {
    let x = longDate.indexOf(',')
    let long = longDate.slice(0, x)
    return long
}

console.log(shortenToDate("Friday May 2, 9am"))
console.log(shortenToDate('Tuesday January 29, 10pm'))
console.log(shortenToDate("Monday December 25, 10pm"))

console.clear()

// function removeDuplicateWords(s) {
//     let y = s.split(' ')
//     let stein = new Set(y)
//     return Array.from(stein).join(' ')
// }

//refactored
function removeDuplicateWords(s) {

    return Array.from(new Set(s.split(' '))).join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

console.clear()

var AmIAfraid = function(day, num) {
    if (day == 'Monday' && num == 12) {
        return true
    } else if (day == 'Monday' && num != 12) {
        return false
    } else if (day == 'Tuesday' && num > 95) {
        return true
    } else if (day == 'Tuesday' && num < 95) {
        return false
    } else if (day == 'Wednesday' && num == 34) {
        return true
    } else if (day == 'Wednesday' && num != 34) {
        return false
    } else if (day == 'Thursday' && num == 0) {
        return true
    } else if (day == 'Thursday' && num != 0) {
        return false
    } else if (day == 'Friday' && num % 2 == 0) {
        return true
    } else if (day == 'Friday' && num % 2 != 0) {
        return false
    } else if (day == 'Saturday' && num > 56) {
        return true
    } else if (day == 'Saturday' && num <= 56) {
        return false
    } else if (day == 'Sunday' && num == 666 || num == -666) {
        return true
    } else { return false }
}

console.log(AmIAfraid("Monday", 13))
console.log(AmIAfraid("Sunday", -666))
console.log(AmIAfraid("Tuesday", 2))
console.log(AmIAfraid("Tuesday", 965))
console.log(AmIAfraid("Friday", 2))

function hasVowels(n) {
    return /[A-Z&&[^AEIOU]]+/.test(this)

}

console.clear()
console.log(hasVowels('andosrc'))
console.log(hasVowels('lol'))
console.log(hasVowels('ooa'))
console.log(hasVowels('ddd'))
console.log(hasVowels('aaa'))

function incrementer(nums) {
    if (nums === '' || nums == []) {
        return []
    }

    let x = nums.map(function(n, i) {
        return n + i + 1
    })

    let y = x.map(function(a) {
        return Math.min(a, 9)
    })

    return y


}

console.log(incrementer([4, 6, 9, 1, 3]))

function differenceInAges(ages) {
    let x = ages.sort(function(a, b) {
        return a - b
    })
    let y = []
    y.push(x[0])
    y.push(x[x.length - 1])
    let z = x[x.length - 1] - x[0]
    y.push(z)
    return y
}


console.clear()
console.log(differenceInAges([57, 99, 14, 32]))
console.log(differenceInAges([82, 15, 6, 38, 35]))

function getEvenNumbers(numbersArray) {
    return numbersArray.filter(function(n) {
        return n % 2 === 0
    })
}

console.log(getEvenNumbers([2, 4, 5, 6, 7, 8]))

//get longest 5 digit consecutive number
function solution(digits) {
    let x = digits.toString()
    let y = []
    for (n in x) {
        y.push(x.slice(n))
    }
    let f = y.filter(function(n) {
        if (n.length >= 5) {
            return n
        }
    })
    let g = f.map(function(n) {
        let x = n.split('').slice(0, 5).join('')
        return x
    })

    let h = g.map(Number)
    return Math.max(...h)
}
console.clear()
console.log(solution(1234567890))
console.log(solution(6531399890))
console.log(solution(12653139989089))

// refactored
function solution(digits) {
    let x = digits.toString()
    let y = []
    for (n in x) {
        y.push(x.slice(n))
    }
    let f = y.filter(function(n) {
        if (n.length >= 5) {
            return n
        }
    }).map(function(n) {
        let x = n.split('').slice(0, 5).join('')
        return x
    }).map(Number)


    return Math.max(...f)
}

// OOP thing

class Person {
    constructor(name) {
        this.name = name
    }
    greet(yourName) {
        return `Hello, ${yourName}, my name is ${this.name}`
    }
}

let joe = new Person('Joe')
console.log(joe.greet('kate'))
console.clear()


function hashsolution(pairs) {
    let x = Object.keys(pairs)
    let y = Object.values(pairs)
    let z = []
    for (i = 0; i < Object.keys(pairs).length; i++) {
        z.push(`${x[i]} = ${y[i]}`)
    }
    return z.toString()
}

function kvSol(obj) {
    let x = Object.keys(obj)
    let y = Object.values(obj)

    return [x, y]
}
console.log(kvSol({ a: 1, b: '2' }))

console.clear()

function padTing(val) {
    let x = '0'
    let y = val.toString().length
    let rep = 5 - y
    let z = x.repeat(rep)
    return `Value is ${z + val}`

}

console.log(padTing(5))
console.log(padTing(2450))
console.clear()

function endsolution(str, ending) {
    if (ending == str.slice(-ending.length)) {
        return true
    } else if (ending == '') {
        return true
    } else {
        return false
    }
}

console.log(endsolution('abc', 'bc'))
console.log(endsolution('abc', 'd'))
console.log(endsolution('abc', ''))

console.clear()

function limitsolution(string, limit) {
    if (string.length <= limit) {
        return string
    } else {
        return string.split('').slice(0, limit).join('') + '...'
    }
}

console.log(limitsolution('testing string', 8))
console.log(limitsolution('test', 4))

console.clear()

function range(s, c) {
    let x = []
    for (i = s; i < c; i++) {
        x.push(i)
    }
    return x
}

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b
    })
}

console.log(range(0, 3))
console.log(sum([0, 1, 2]))

console.clear()

var flatten = function(array) {
    return [].concat(...array)
}

console.log(flatten([
    [1, 2, 3],
    ["a", "b", "c"],
    [1, 2, 3]
]))
console.log(flatten([
    [
        [1, 2, 3]
    ]
]))
console.log(flatten([1, 2, 3]))

console.clear()

function searchNames(logins) {
    return logins.filter(function(n) {
        return n[0].endsWith('_')
    })
}
console.log(searchNames([
    ["foo", "foo@foo.com"],
    ["bar_", "bar@bar.com"]
]))

console.clear()

function reject(a, i) {
    let x = []
    for (f = 0; f < a.length; f++) {
        if (i(a[f]) == false) {
            x.push(a[f])
        }
    }
    return x
}

console.log(reject([1, 2, 3, 4, 5, 6], function(n) {
    return n % 2 == 0
}))

console.clear()

function getMissingElement(arr) {
    let h = arr.sort(function(a, b) {
        return a - b
    })

    let x = []
    for (i = 0; i <= 10; i++) {
        x.push(i)
    }
    for (i = 0; i < x.length; i++) {
        if (x[i] != h[i]) {
            return x[i]
        }
    }
}
console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])) // 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])) // 3
console.log(getMissingElement([0, 2, 4, 5, 7, 3, 8, 6, 1])) // 3

console.clear()
var isAnagram = function(test, original) {
    let t = test.toLowerCase()
    let o = original.toLowerCase()
    return t.split('').sort().join('') == o.split('').sort().join('')

};
console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("toffee", "foefet"))
console.log(isAnagram("many", "nam"))

console.clear()

function getNiceNames(...people) {
    let x = [...people]
    let y = x.map(function(a) {
        return Object.values(a)
    })
    let z = y.filter(function(n) {
        for (i = 0; i < n.length; i++) {
            if (n[0] == '') {
                return []
            } else {
                return n[1] == true
            }
        }
    })
    let arr = []
    let f = z.reduce((a, v) => z.concat(v), [])[0][0]
    arr.push(f)
    return arr

}

function getNaughtyNames(...people) {
    let x = [...people]
    let y = x.map(function(a) {
        return Object.values(a)
    })
    let z = y.filter(function(n) {
        for (i = 0; i < n.length; i++) {
            if (n[0] == '') {
                return []
            } else {
                return n[1] != true
            }
        }
    })
    let arr = []
    let f = z.flat()[0]
    arr.push(f)
    return arr
}

console.log(getNiceNames({ name: 'Warrior reading this kata', wasNice: true }, { name: 'xDranik', wasNice: false }))
console.log(getNaughtyNames({ name: 'Warrior reading this kata', wasNice: true }, { name: 'xDranik', wasNice: false }))

console.clear()

function reverse(s) {
    return s.split('').reverse().join('')
}

console.log(reverse("Super awesome string"))

console.clear()

function disemVowel(str) {
    return str.replace(/[aeiou]/gi, '')
}

console.log(disemVowel("This website is for losers LOL!"))

console.clear()

let arr = [1, 2, 1, '1', 3]

Array.prototype.remVal = (thing) => {
    return arr.filter(function(n) {
        return n !== thing
    })
}

console.log(arr.remVal(1))

console.clear()

let double = (a) => {
    return a.map(function(n) {
        return n * 2
    })
}

console.clear()

function filter_list(l) {
    return l.filter(function(n) {
        return typeof(n) != 'string'
    })
}

console.log(filter_list([1, 2, 'a', 'b']))

console.clear()