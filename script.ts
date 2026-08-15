/*Problem statement 1: একটি function বানাও যা একটি user-এর নাম আর বয়স নিয়ে sentence print করবে।
Input:
printUser("Amina", 22)
Output:
Amina is 22 years old.*/


function printUser(name: string, age: number): string {
  let finalOutput = `${name} is ${age} years old.`
  return finalOutput
}

// console.log(printUser("Amina", 22))


/* Problem statement 2: 
একটি product-এর নাম, price, এবং availability store করো primitive types use করে।
Input:
name = "Laptop"
price = 45000
isAvailable = true
Output:
Laptop cost 45000 and is available: true */

let names: string = "Laptop";
let price: number = 45000;
let isAvailable: boolean = true;

// console.log(`${names} cost ${price} and is available: ${isAvailable}`)


/* Problem statement 3: একটি array বানাও যেখানে student-এর নাম থাকবে এবং কতজন আছে সেটা কনসোল করবে।
Input:
["Amina", "Rahim", "Karim", "Salma", "Rafi"]
Output:
Total student: 5 */

let students: string[] = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];
let totalStudent:number = students.length;
// console.log(totalStudent)
