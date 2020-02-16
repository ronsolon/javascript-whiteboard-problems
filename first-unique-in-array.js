// find the first unique number in an array
function findFirstUnique (arr) {
    let uniques = arr.filter(number => {
        // indexOf is the first occurrence,
        // while lastIndexOf is the last occurence of the value in the array
        // number is unique if it has the same indexOf and lastIndexOf in an array
        // as this means it only occurred once
        return arr.indexOf(number) === arr.lastIndexOf(number);
    })

    // return the value at first index or index [0] unless empty, then return -1
    return uniques[0] || -1;
}

// TEST
let numbers = [3,17,29,6,3,29,200,17,6,300]
console.log(findFirstUnique(numbers)); // returns 200