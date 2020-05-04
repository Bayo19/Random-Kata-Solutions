String.prototype.toCapitalCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}


Array.from({ length: 5 }, function(x) {
    x = Math.floor(Math.random() * 20)
    return String.fromCharCode(x + 65).toLowerCase()
})