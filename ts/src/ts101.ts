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
    users.map((user: { name: string }) => {
			console.log(user.name);
		});
        setTimeout(() => {}, 2000);
    // console.log(users);
    // console.log(typeof users);
}

// fetchUsers()

//object oriented programming with Ts
//class - this is a blueprint for creating objects

class Person {
	//properties
	public name: string;
	public age: number;
	public gender: string;
	protected DoB: Date;
	private id: string;
	//constructor - this is a special method that is called when an object is created
	constructor(
		_name: string,
		_age: number,
		_gender: string,
		_DoB: Date,
		_id: string
	) {
		this.name = _name;
		this.age = _age;
		this.gender = _gender;
		this.DoB = _DoB;
		this.id = _id;
	}
	//methods - this is a function that is defined inside a class
	greet(): void {
		console.log(
			`hey ${this.name}, you are ${this.age} years old and you are a ${this.gender}`
		);
	}
	public getAge() {
        return new Date().getFullYear() - this.DoB.getFullYear()
    };
}
  const sara= new Person("sara",30,"female", new Date("1993-01-01"), "12345");
    // console.log(sara.getAge()); 

  //example2
  class BankAccount{
constructor(protected balance: number, public accountHolder: string){}

public deposit(amount: number): void{
    if (this.validateAmount(amount)) {
        this.balance += amount;
    }
}
private validateAmount(amount: number): boolean {
    return amount > 0;
}
public getBalance():number {
    return this.balance;
}

public withDraw(amount:number): number | string {
    if (this.validateWithdraw(amount)) {
			return this.balance -= amount;
		} else {
			return `your balance is${this.balance}, you cannot withdraw ${amount}`;
		}
}

private validateWithdraw(withdrawalamount: number) {
	return withdrawalamount > 0 && withdrawalamount <= this.balance; //
	// return this.balance > withdrawalamount;
}
  }
//child class
class SavingsAccount extends BankAccount{
 constructor(private interestRate: number, balance: number, accountHolder: string){
    super(balance, accountHolder);
    
 }
 public calculateInterest():void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(`Interest of ${interest} added to the account`);
 }
}


//   const saraAccount = new SavingsAccount(1, 500,"tiff");
//   saraAccount.calculateInterest();
  const saraAccount = new BankAccount(200,"sara")
  console.log("initial bal")
  console.log(saraAccount.getBalance()); 
  saraAccount.deposit(500);
    console.log("after deposit");
  console.log(saraAccount.getBalance());
  saraAccount.withDraw(800);
    console.log("after withdraw");
  console.log(saraAccount.getBalance()); 
  

  const text = document.getElementById("message");
  const app = document.getElementById("app");
	// 2. Create a new <p></p> element programmatically
	const p = document.createElement("p");
	// 3. Add the text content
	p.textContent = "Hello, World!";
	// 4. Append the p element to the div element
	app?.appendChild(p);

    //create a paragraph display a message when the button is clicked
function displayText() {
	const message = "Button clicked!";
	const p = document.createElement("p");
	p.textContent = message;
	app?.appendChild(p);
	if (text) {
		text.textContent = message;
	}
}

    