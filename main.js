const Memory = require('./memory')

function main() {
    Array.SIZE_RATIO = 3;

    let arr = new Array();
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
    //this has a length of 6 in the array

    arr.pop();
    arr.pop();
    arr.pop();
}