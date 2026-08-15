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


// Problem statement 4: একটি tuple বানাও যেখানে একজন মানুষের নাম আর বয়স থাকবে।

let person: [string, number] = ["Amina", 22]
// console.log(person)


// Problem statement 5: একটি user object বানাও যেখানে name required, কিন্তু email optional।

let userObj: {name: string, email?: string} = {
    name: "Amina",
}
// console.log(`Name: ${userObj.name}, Email: ${userObj.email ? userObj.email : "Not Provided"}`)


// Problem statement 6: একটি function লেখো যা একটি number নিয়ে check করবে সেটা even কি না।

function isEven(number: number) {
    if (number % 2 === 0) {
        return true
    } else{
        return false
    }
}

// console.log(isEven(2026))


// Problem statement 7: একটি function বানাও যা যেকোনো সংখ্যক number নিয়ে তাদের sum করবে।

function sumAll(...numbers: number[]): number {
    let sum = 0; 
    for (const number of numbers) {
        sum += number
    }
    return sum
}

// console.log(sumAll(1, 2, 3, 4))