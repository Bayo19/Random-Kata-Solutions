function findOdd(A) {
    for (var i = 0; i < A.length; i++) {
        //Query the number of times that this 'i' element appears
        //then verify if that number of times is odd. If it is true, then return
        //that 'i' element
        if ((A.filter(function(item) { return item == A[i]; })).length % 2 != 0) {
            return A[i];
        }
    }
    return 0;
}


console.log(findOdd([3, 3, 5, 5, 4, 4, 7, 7, 6, 6, 2, 2, 5]))

console.clear()
    // function accum(s) {
    //     let w = s.split('')

//     let man = w.map(function(letter) {
//         let x = (w.indexOf(letter) + 1)
//         return letter.repeat(x)
//     })
//     let woman = man.map(function(f) {
//         return f[0].toUpperCase() + f.slice(1).toLowerCase()
//     })
//     return woman.join('-')

// }

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

console.log(accum('stien'))
console.log(accum('Malanda'))

console.clear()

function solution(number) {
    let sum = 0

    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum
}

console.log(solution(10))
console.clear()

function mergeArrays(a, b) {
    var res = [];
    let i = 0;
    while ((i < a.length) || (i < b.length)) {
        if (i < a.length) res.push(a[i]);
        if (i < b.length) res.push(b[i]);
        i++;
    }
    return res;
}

console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]))

function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x) {
        return string.indexOf(x) !== -1;
    });
}

function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}

// other solution 
function shortcut(str) {
    return str.split('').filter(function(e) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1
    }).join('')
}

function persistence(num) {

    for (var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce(function(a, c) {
            return a * c
        })
    }
    return i

}


console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))
console.log(persistence(25))


function countLettersAndDigits(input) {
    let n = 0;

    for (const c of input)
        if (c.match("^[a-zA-Z0-9]*$"))
            n++;

    return n;
}
console.log(countLettersAndDigits("hel2!lo"))
console.log(countLettersAndDigits("ttttt"))
console.log(countLettersAndDigits('wicked .. !'))