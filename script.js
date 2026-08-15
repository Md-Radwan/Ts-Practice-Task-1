"use strict";
/*Problem statement 1: একটি function বানাও যা একটি user-এর নাম আর বয়স নিয়ে sentence print করবে।
Input:
printUser("Amina", 22)
Output:
Amina is 22 years old.*/
function printUser(name, age) {
    let finalOutput = `${name} is ${age} years old.`;
    return finalOutput;
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
let names = "Laptop";
let price = 45000;
let isAvailable = true;
console.log(`${names} cost ${price} and is available: ${isAvailable}`);
