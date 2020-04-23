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

function min(arr, ret) {
    if (ret == 'value') {
        return Math.min(...arr)
    } else {
        return arr.indexOf(Math.min(...arr))
    }
}
console.log(min([100, 200, 300, 36, 400, 500], 'value'))
console.log(min([100, 200, 300, 36, 400, 500], 'index'))

console.clear()

function divisors(integer) {
    let x = integer
    let u = []
    for (i = 0; i < integer; i++) {
        u.push(i)
    }
    let v = u.filter(function(a) {
        if (integer % a == 0) {
            return a
        }
    })

    if (v[v.length - 1] == 1) {
        return `${x} is a prime number`
    } else {
        return v.filter(function(d) {
            return d != 1
        })
    }
}

console.log(divisors(12))
console.log(divisors(25))
console.log(divisors(13))
console.log(divisors(2))
console.log(divisors(3))
console.log(divisors(5))
console.log(divisors(7))

console.clear()

function powerOf4(n) {
    if (n == 1) {
        return true
    } else if (typeof(n) == 'number') {
        return Math.log(n) / Math.log(4) % 1 == 0
    } else {
        return false
    }
}

console.log(powerOf4(1024))
console.log(powerOf4(16 * 4))
console.log(powerOf4(44))
console.log(powerOf4(1))
console.log(powerOf4(3.1415))
console.log(powerOf4("4"))
console.log(powerOf4(null))
console.log(powerOf4(undefined))
console.log(powerOf4(function() {}))
console.log(powerOf4(1))

console.clear()

function shorter_reverse_longer(a, b) {
    if (a.length == b.length) {

        return [...b, ...a.split('').reverse(), ...b].join('')
    } else {
        let max
        let min
        if (a.length < b.length) {
            min = a
            max = b
        } else {
            min = b
            max = a
        }
        return [...min, max.split('').reverse().join(''), ...min].join('')

    }
}
console.log(shorter_reverse_longer("first", "abcde"))
console.log(shorter_reverse_longer("hello", "bau"))
console.log(shorter_reverse_longer("abcde", "fghi"))

console.clear()

var gimme = function(inputArray) {
    let x = inputArray.slice()
    let mid
    if (x[1] > x[0] && x[1] < x[2]) {
        mid = x[1]
    } else if (x[0] > x[1] && x[0] < x[2]) {
        mid = x[0]
    } else {
        mid = x[2]
    }
    let res = inputArray.indexOf(mid)
    return res
};

console.log(gimme([2, 1, 3]))
console.log(gimme([5, 10, 14]))
console.log(gimme([-69, -97, -71]))

console.clear()

function summer(...r) {
    return [...r].reduce(function(a, c) {
        return a + c
    })
}

console.log(summer(1, 2, 3, 4, 5))
console.log(summer(8, 2))
console.log(summer(1, 2, 3))

console.clear()

function descOrder(a) {
    let f = a.toString().split('').sort(function(a, b) {
        return b - a
    })
    return parseInt(f.join(''))
}

console.log(descOrder(21445))
console.log(descOrder(145263))
console.log(descOrder(123456789))

console.clear()

Array.prototype.numberOfOccurrences = function(n) {
    let x = []
    for (i = 0; i < this.length; i++) {
        if (this[i] == n) {
            x.push(this[i])

        }

    }
    return x.length

}
let art = [3, 4, 6, 5, 7, 8, 6, 9, 8]
console.log(art.numberOfOccurrences(8))

console.clear()

function formatWords(words) {
    if (words == undefined || [...words] == "") {
        return ``
    } else {
        let x = words.filter(function(a) {
            return a != ''
        })
        if (words.length == 1) {
            return words.join('')
        } else if (x.length == 1) {
            return x.join('')
        } else if (x.length == 2) {
            return `${x[0]} and ${x[1]}`
        } else {
            let temp = x[x.length - 1]
            x.push('and')
            x.push(temp)
            return x.slice(0, -3).join(', ') + ' ' + x.slice(-2).join(' ')
        }
    }
}

console.log(formatWords(['ninja', 'steiner', 'samurai', 'ronin']))
console.log(formatWords(['ninja', '', 'ronin']))
console.log(formatWords(['', '', 'three']))
console.log(formatWords(['one']))
console.log(formatWords([]))
console.log(formatWords([""]))
console.log(formatWords(null))

console.clear()

function toCamelCase(str) {
    if (str == '' || str == null) {
        return ''
    } else {
        let x = str.split('')
        let y = x.map(function(a) {
            if (a == '_' || a == '-') {
                return ' '
            } else {
                return a
            }
        })
        let f = y.join('').split(' ')
        let g = f.slice(1).map(function(b) {
            return b[0].toUpperCase() + b.slice(1)
        })

        let h = f[0]
        return h + g.join('')
    }
}

console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase('A-B-C'))
console.log(toCamelCase(''))

console.clear()

function spleet(str) {

    let x = str.split('')
    if (x.length % 2 != 0) {
        let z = x.slice(x.length - 1)
        let xx = x.slice(0, x.length - 1)
        let f = xx.filter(function(a, i) {
            if (i % 2 == 0) {
                return a
            }
        })

        let g = xx.filter(function(a, i) {
            if (i % 2 != 0) {
                return a
            }
        })
        let s = []

        for (i = 0; i < f.length; i++) {
            s.push(`${f[i]}${g[i]}`)
        }
        let zz = z + '_'
        return s.concat(zz)

    } else {
        let f = x.filter(function(a, i) {
            if (i % 2 == 0) {
                return a
            }
        })
        let g = x.filter(function(a, i) {
            if (i % 2 != 0) {
                return a
            }
        })
        let s = []

        for (i = 0; i < f.length; i++) {
            s.push(`${f[i]}${g[i]}`)
        }
        return s
    }


}

console.log(spleet('abc'))
console.log(spleet('abcdef'))
console.clear()

function sortme(names) {
    let x = names
    let y = x.sort(function(a, b) {

        if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1
        }
        if (b[0].toLowerCase() < a[0].toLowerCase()) {
            return 1
        }
        return 0
    })
    return y
}

console.log(sortme(["Hello", "there", "I'm", "fine"]))
console.log(sortme(["C", "d", "a", "B"]))

console.clear()

function splitter(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1 $2').trim();
}
console.log(splitter('CamelCase'))

console.clear()

//palindrome checker /\40/g - regex checks for a space
function palin(sen) {
    let x = sen.replace(/[\',.!?]/g, '')
    let y = x.replace(/\40/g, '')
    let z = y.split('').reverse().join('')
    return y.toLowerCase() == z.toLowerCase()
}

console.log(palin("Was it a car or a cat I saw?"))
console.log(palin("Njoku, Samson Ebere. Plenty!"))
console.log(palin('Madam In Eden, I\'m Adam'))
console.log(palin('A Santa Lived As a Devil At NASA'))
console.log(palin('Dammit, I\'m Mad!'))
console.log(palin('Do Geese See God?'))

console.clear()

function duppy(...h) {
    let y = h
    let x = new Set(h)
    let z = [...x]
    return z.length !== y.length
}

console.log(duppy(1, 2, 3))
console.log(duppy(1, 2, 3, 2))
console.log(duppy('1', '2', '3', '4'))
console.log(duppy('stein', 'roth', 'stein'))

console.clear()

function customSort(item) {
    if (item.length < 2) {
        return item
    } else {
        let left = []
        let right = []
        const pivot = item[0]
        for (i of item.slice(1)) {
            if (i < pivot) {
                left.push(i)
            } else {
                right.push(i)
            }
        }
        return [...customSort(left), pivot, ...customSort(right)]
    }
}

console.log(customSort([1, 5, 3, 2, 4]))

console.clear()

// using recursion is cool
function digital_root(n) {
    if (n.toString().length == 1) {
        return n
    } else {
        let x = n.toString().split('').map(Number)

        let y = x.reduce(function(a, c) {
            return a + c
        })
        return digital_root(y)
    }
}

console.log(digital_root(16))
console.log(digital_root(942))
console.log(digital_root(132189))
console.log(digital_root(493193))

console.clear()

function createPhoneNumber(numbers) {
    if (numbers.length == 10) {
        return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    }
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

console.clear()

function spinWords(x) {
    return x.split(' ').map(function(a) {
        if (a.length >= 5) {
            return a.split('').reverse().join('')
        } else {
            return a
        }
    }).join(' ')
}

console.log(spinWords('Welcome'))
console.log(spinWords('Hey fellow warriors'))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))
console.log(spinWords("You are almost to the last test"))
console.log(spinWords("Just kidding there is still one more"))
console.log(spinWords('Seriously this is the last one'))

console.clear()
console.log('others')

function isPangram(string) {
    let x = 'abcdefghijklmnopqrstuvwxyz'
    let s = string.replace(/\40/g, '').toLowerCase().split('').sort()
    let y = new Set(s)
    return [...y].slice([...y].indexOf('a')).join('') == x

}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
console.log(isPangram('This is not a pangram'))
console.log(isPangram('Pack my box with five dozen liquor jugs'))
console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'))

console.clear()

function toWeirdCase(string) {
    return string.split(' ').map(function(a, i) {
        return a.split('').map(function(b, i) {
            if (i % 2 == 0) {
                return b.toUpperCase()
            } else {
                return b
            }
        }).join('')
    }).join(' ')
}

console.log(toWeirdCase('This is a test'))
console.log(toWeirdCase('Hello'))
console.log(toWeirdCase('This'))

console.clear()

function alphabetPosition(text) {
    if (text == '') {
        return ''
    }
    let alph = function(al) {
        let j = 'abcdefghijklmnopqrstuvwxyz'

        let k = j.split('')
        let pos = k.indexOf(al) + 1
        return pos

    }

    let x = text.toLowerCase().replace(/[0-9\40'.!}^%{=1<:#+>&@\[\];*_\(\),-\\$\|£`?]/g, '')


    if (x == '') {
        return ''
    } else {
        let y = x.split('')
        if (y == 0) {
            return ''
        }
        return y.map(function(a) {
            return alph(a).toString()
        }).join(' ')
    }

}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("The narwhal bacons at midnight."))
console.log(alphabetPosition('p*;lxwrn'))
console.log(alphabetPosition(',+&8-0[)'))
console.log(alphabetPosition("scb/?&e#"))
console.log(alphabetPosition("a^£%^&*)"))
console.log(alphabetPosition("^£b%^&*)"))
console.log(alphabetPosition("^£%^c&*)"))
console.log(alphabetPosition("^d%^&*)"))
console.log(alphabetPosition("^£%,<e&*)"))
console.log(alphabetPosition("````"))

console.clear()


function fibo(n) {
    let res = []

    if (n == 0) {
        res.push(0)
        return res
    } else if (n == 1) {
        res.push(0, 1)
        return res
    }
    res.push(0, 1)
    for (i = 0; i < n - 1; i++) {

        res.push(res[res.length - 1] + res[res.length - 2])

    }

    return res

}

function nthFibo(n) {
    let res = []

    if (n == 0) {
        res.push(0)
        return res
    } else if (n == 1) {
        res.push(0, 1)
        return res
    }
    res.push(0, 1)
    for (i = 0; i < n - 1; i++) {

        res.push(res[res.length - 1] + res[res.length - 2])

    }

    return res[n - 1]
}

function fastfibo(n) {
    let res = []

    if (n == 0) {
        res.push(0)
        return res
    } else if (n == 1) {
        res.push(0, 1)
        return res
    }
    res.push(0, 1)
    for (i = 0; i < n - 1; i++) {

        res.push(res[res.length - 1] + res[res.length - 2])

    }

    return res[res.length - 1]
}


console.log(fastfibo(249))
    // console.log(fibo(5))
    // console.log(nthFibo(5))
console.clear()

function dominator(arr) {
    let u = arr.sort()

    return u
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]))
console.log(dominator([1, 1, 1, 2, 2, 2, 2]))

console.clear()

function moreZeros(s) {
    let x = s.split('')
    let z = []
    for (i = 0; i < x.length; i++) {
        z.push(x[i].charCodeAt().toString(2))
    }

    let f = z.filter(function(a) {
        let b = a.split('')
        let left = []
        let right = []
        for (i = 0; i < b.length; i++) {
            if (b[i] == '0' || b[i] == 0) {
                left.push(b[i])
            }
            if (b[i] == '1' || b[i] == 1) {
                right.push(b[i])
            }
        }
        if (left.length > right.length) {
            return a
        }
    })

    let j = f.map(function(a) {
        return String.fromCharCode(parseInt(a, 2))
    })
    return Array.from(new Set(j))

}

console.log(moreZeros('abcde'))
console.log(moreZeros('DIGEST'))

console.clear()

let countBits = function(n) {
    let x = n.toString()
    let y = Number(x).toString(2)


    return y.split('').filter(function(a) {
        return a.match(/[1]/g)
    }).length

};

let log = console.log
log(countBits(0))
log(countBits(4))
log(countBits(7))
log(countBits(9))
log(countBits(10))
log(countBits(1234))



function grabscrab(anagram, dictionary) {
    let x = anagram.toLowerCase().split('').sort(function(a, b) {
        if (a < b) {
            return -1
        }

        if (b < a) {
            return 1
        }
    }).join('')

    let y = dictionary.filter(function(a) {
        if (a.toLowerCase().split('').sort(function(b, c) {
                if (b < c) {
                    return -1
                }

                if (c < b) {
                    return 1
                }
            }).join('') == x) { return a }

    })

    return y
}


log(grabscrab("ortSp", ["sport", "parrot", "ports", "matey"]))
log(grabscrab("ortSp", ['jeff']))

let clear = console.clear
clear()

String.prototype.isUpperCase = function() {
    let x = Object.values(this).join('')
    return x === x.toUpperCase()

}

log('c'.isUpperCase())
log('A'.isUpperCase())

clear()


function palindrome(num) {

    if (typeof(num) != 'number' || num < 0) {
        return 'Not valid'
    }
    let x = num.toString(10).split('').reverse().join('')
    if (Number(x) == num) {
        return true
    } else {
        return false
    }
}

log(palindrome(23345))
log(palindrome(110011))
log(palindrome(2332))

clear()

function findUniq(arr) {
    let x = arr
    if (x[0] != x[1] && x[0] != x[x.length - 1]) {
        return x[0]
    }
    let y = []
    for (i = 0; i < x.length; i++) {
        if (x[i] != x[i + 1]) {
            y.push(x[i])
        }
    }
    return y[1]
}

log(findUniq([1, 1, 1, 2, 1, 1]))
log(findUniq([0, 0, 0.55, 0, 0]))
log(findUniq([0, 4, 0, 0, 0]))
log(findUniq([0, 1, 1, 1, 1, 1, 1, 1]))

clear()

String.prototype.camelCase = function() {
    if ([...this].join('').replace(/\s/g, '').length == 0) {
        return ''
    } else {
        let xx = this.split(' ').slice(0, 1).map(function(a) {
            return a[0].toUpperCase() + a.slice(1)
        })

        let x = this.split(' ').slice(1).map(function(a) {
            return a[0].toUpperCase() + a.slice(1)
        }).join(' ')
        return (xx + x).replace(/\s/g, '')
    }

}

log('hello case'.camelCase())
log("camel case word".camelCase())
log("Steinbeck speaks solemnly".camelCase())
log('    '.camelCase())


clear()

function tribonacci(signature, n) {
    let res = signature
    if (n === 1) {
        return [].concat(res[0])
    }

    if (n === 0) {
        return new Array()
    }

    if (n > 1) {
        for (i = 0; i < n; i++) {
            res.push(res[res.length - 1] + res[res.length - 2] + res[res.length - 3])
        }
        return res.slice(0, n)
    }
}

log(tribonacci([1, 1, 1], 10))
log(tribonacci([0, 0, 1], 10))
log(tribonacci([0, 0, 0, ], 10))
log(tribonacci([1, 2, 3], 10))
log(tribonacci([3, 2, 1], 10))
log(tribonacci([3, 2, 1], 1))

clear()

var moveZeros = function(arr) {
    let p = arr.filter(function(a) {
        return a === Number(0)
    })

    let q = arr.filter(function(a) {
        return a !== Number(0)
    })

    return q.concat(p)

}

log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))

clear()

function anagrams(word, words) {

    String.prototype.sortLetters = function() {

        let x = this.split().join()

        return x.split('').sort(function(a, b) {

            if (a < b) {
                return -1
            }

            if (b < a) {
                return 1
            }

        }).join('')

    }

    return words.filter(function(a) {
        if (a.sortLetters() == word.sortLetters()) {
            return a
        }
    })

}

log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
log(anagrams('laser', ['lazing', 'lazy', 'lacer']))

clear()

function firstNonRepeatingLetter(s) {
    if (s == null || s == undefined || s.length == 0) {
        return s
    }

    let x = s.split('')
    let p = []

    for (i of x) {
        if (x.lastIndexOf(i) == x.indexOf(i)) {
            p.push(i)
        }
    }
    return p[0]
}

log(firstNonRepeatingLetter('stress'))
log(firstNonRepeatingLetter('sTress'))
log(firstNonRepeatingLetter('moonmen'))

clear()

function validPhoneNumber(phoneNumber) {
    if (phoneNumber.match(/^\([0-9]{3}\)\40[0-9]{3}\-[0-9]{4}$/g) != null) {
        return true
    } else {
        return false
    }
}

clear()

function reverse(str) {

    if (str.replace(/\s/g, '') == '') {
        return ''
    }

    let y = str.split(' ').map(function(a) {
        if (str.split(' ').indexOf(a) % 2 != 0) {
            return a.split('').reverse().join('')
        } else {
            return a
        }
    }).join(' ')

    return y

}

log(reverse("Reverse this string, please!"))
log(reverse('    '))
log(reverse("I really don't like reversing strings!"))

clear()

function sortTheInnerContent(words) {
    let x = words.split(' ')
    let y = x.map(function(a) {
        let ss = a.split('')
        let f = ss.shift()
        let l = ss.pop()

        let x = ss.sort(function(a, b) {
            if (a > b) {
                return -1
            }
            if (b > a) {
                return 1
            }
        })

        return [f, ...x, l].join('')
    })
    return y.join(' ')
}

log(sortTheInnerContent('sort the inner content in descending order'))
log(sortTheInnerContent("wait for me"))
log(sortTheInnerContent('this kata is easy'))

clear()

function searchNames(logins) {
    return logins.filter(function(a, i) {
        if (a[0] == '.') {
            return i++
        }
    })

}

log(searchNames(["foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com"]))

clear()

function getSumOfDigits(integer) {
    return integer.toString().split('').map(Number).reduce(function(a, c) {
        return a + c
    })

}

log(getSumOfDigits(123))

clear()

function basicOp(operation, value1, value2) {
    let val1 = +value1
    let val2 = +value2

    if (operation == '+') {
        return val1 + val2
    } else if (operation == '-') {
        return val1 - val2
    } else if (operation == '*') {
        return val1 * val2
    } else return val1 / val2

}

log(basicOp('+', 4, 7))

clear()

function rgb(r, g, b) {
    if (r < 0) {
        r = 0
    } else if (r > 255) {
        r = 255
    }
    if (g < 0) {
        g = 0
    } else if (g > 255) {
        g = 255
    }
    if (b < 0) {
        b = 0
    } else if (b > 255) {
        b = 255
    }

    let rr = r.toString(16)
    if (rr.length < 2) {
        rr = `0${rr}`
    }
    let gg = g.toString(16)
    if (gg.length < 2) {
        gg = `0${gg}`
    }
    let bb = b.toString(16)
    if (bb.length < 2) {
        bb = `0${bb}`
    }
    let res = `#${rr}${gg}${bb}`.toUpperCase()
    let finalres
    if (res.length == 5) {
        finalres = `0${res}`
    } else if (res.length < 5) {
        finalres = res.repeat(2)
    } else {
        finalres = res
    }
    return finalres

}

log(rgb(0, 0, 0))
log(rgb(0, 0, -20))
log(rgb(300, 255, 255))
log(rgb(173, 255, 47))
log(rgb(5, 291, 90))
log(rgb(188, 2, 164))



function hexStringToRGB(hexString) {
    let x = hexString.replace('#', '')
    xArr = x.split('')
    let r = parseInt(xArr.slice(0, 2).join(''), 16)
    let g = parseInt(xArr.slice(2, 4).join(''), 16)
    let b = parseInt(xArr.slice(4, 6).join(''), 16)

    let f = new Object
    f['r'] = parseInt(`${r}`)
    f['g'] = parseInt(`${g}`)
    f['b'] = parseInt(`${b}`)
    return f
}

log(hexStringToRGB('#FF9933'))

clear()

reverse = function(array) {
    let res = []
    for (let i = array.length - 1; i >= 0; i--) {
        res.push(array[i])
    }
    return res
}

log(reverse([3, 22, 1]))
log(reverse([7, 4, 26, 15]))