let x = 0, y = 1, z = 10;

function soma(x, y, z) {
    w = x + y + z;
    return w;
}

function evenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
    }
    return evenNums;
}

console.log(evenValues([1, 2, 4, 5, 10, 12, 58, 77]))
