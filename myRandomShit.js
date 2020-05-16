String.prototype.toCapitalCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

// get random letter
let letters = Array.from({ length: 5 }, function(x) {
    x = Math.floor(Math.random() * 26)
    return String.fromCharCode(x + 65).toLowerCase()
}).join('')

console.log(letters)


// filter an object one key at a time
let objFilter = function(obj, without) {
    let x = Object.keys(obj)
    x.splice(x.indexOf(without), 1)
    let filteredMenu = JSON.parse(JSON.stringify(obj, x))
    return filteredMenu
}

function swap(x, y) {
    [x, y] = [y, x]
    return x
}

console.log(swap(23, 54))
console.clear()

function formParser(email, password, validate) {
    let str = [email, password, validate].join(' ')

    let result = {}

    for (x in str) {
        const [email, password, validate] = str.split(' ')
        result['email'] = email
        result['password'] = password
        result['validate'] = validate
        return result
    }


}

console.log(formParser('john@gmail.com', '57666', '57666'))
console.log(formParser('stacyanne@hotmail.com', '34546', '2352454'))
console.clear()

let rando = () => {
    let r,g,b
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g}, ${b})`
}

// new color between two colors

let getNewColor = (a,c) => {
    let a1 = a.replace(/[a-z\(\)]/g,'').split(',')
    let c1 = c.replace(/[a-z\(\)]/g,'').split(',')

    let a2 = a1.map(function(x){
        return Number(x)
    })
    let c2 = c1.map(function(x){
        return Number(x)
    })
    
   
    let r = Math.floor((a2[0]+c2[0]) /2)
    let g = Math.floor((a2[1] + c2[1]) /2)
    let b = Math.floor((a2[2] + c2[2]) /2)

   res = `rgb(${r},${g},${b})`
    return res
}

console.log(getNewColor(rando(),  rando()))
