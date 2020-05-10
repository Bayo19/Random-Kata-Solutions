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