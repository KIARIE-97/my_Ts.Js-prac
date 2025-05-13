//arrays
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4, 5];


// console.log(arr.push(2, 3, 4, 5));
// console.log(arr[8]);

arr2.splice(2, 1); // remove 3 elements starting from index 2
// console.log(arr2);

//reduce
let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 1);
console.log(sum);
//map
let arr3 = arr.map((value) => {
    return value * 2;
});
console.log(arr3);

