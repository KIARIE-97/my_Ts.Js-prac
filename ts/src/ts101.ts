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

// console.log(sum);
//map
let arr3 = arr.map((value) => {
    return value * 2;
});
// console.log(arr3);

let height: number = 5;

for (let row = 1; row <= height; row++) {
    let stars = '';
    for (let column = 1; column <= row; column++) {
    stars += '^';
    }
    // console.log(stars);
}  

//functions
function add(a: number, b: number): number {
    return a + b;
}
function add2(a: number, b: number): void {
    console.log(a + b);
}
function add3(a: number, b: number): number {
    return a + b;
} 

// console.log(add(2, 6));
// add2(2, 6);

//promises
// function fetchdata(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         const data = "https://jsonplaceholder.typicode.com/users";
//         if (!data){
//             throw new Error("No data found");
//         }
//         resolve(data);
//     })
// }
// fetchdata()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

//async/await
async function fetchUsers(): Promise<void> {
    const response = fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response;
    const users = await data.json();
    console.log(users[0]);
    console.log(typeof users);
}

fetchUsers()
    .then(() => {
        console.log("Users fetched successfully");
    })
    .catch((error) => {
        console.error("Error fetching users:", error);
    });

