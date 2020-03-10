//removing duplicate from an array

// brute force 
let a = [1, 2, 5, 2, 1, 8]

let b = []

let len = a.length

for (let i = 0; i < len; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i])
    }
}


// object key true = {}
let obj = {}
for (let i of a) {
    obj[i] = true
}
let b = Object.keys(obj)
let c = b.map(Number)
console.log(c)


//Set
let bSet = [...new Set(a)]
console.log('set version', bSet)