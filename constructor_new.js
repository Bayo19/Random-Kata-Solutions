//constructor functions are regulars funcs but
// names with capital letter first and executed only with 'new' operator

// e.g

function User(name) {
    this.name = name;
    this.isAdmin = false
}

let user1 = new User('Jack')
let user2 = new User('Jill')
let user3 = new User('Ann')
let user4 = new User('Alice')
user2.isAdmin = true
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)

// main purpose of constructors - reusable object creation code

// any function can be run with a new and thus used as a constructor

// usually constructor don't have a return statement

// either 'this' or the object is returned in the case of return statement