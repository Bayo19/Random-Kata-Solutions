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