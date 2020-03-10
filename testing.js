let data = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27]
let target = 781

let binarySearch = function(data, target) {

    let low = 0
    let high = data.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (target == data[mid]) {
            return true
        } else if (target > data[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return false

}

let binarySearchRec = function(data, target, low, high) {
    if (low > high) {
        return false
    } else {
        let mid = Math.floor((low + high) / 2)
        if (target == data[mid]) {
            return true
        } else if (target > data[mid]) {
            return binarySearchRec(data, target, mid + 1, high)
        } else {
            return binarySearchRec(data, target, low, mid - 1)
        }
    }
}

console.log(binarySearch(data, target))
console.log(binarySearchRec(data, target, 0, data.length - 1))