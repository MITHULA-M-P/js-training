"use strict";
// Error 1
// Property 'username' does not exist on type 'User'
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Alice"
};
// console.log(user.username);
// Fix:
// console.log(user.name);
// Error 2
// Argument of type 'string' is not assignable to parameter of type 'number'
function square(num) {
    return num * num;
}
// square("5");
// Fix:
// square(5);
// Error 3
// Parameter 'data' implicitly has an 'any' type
// function print(data) {
//     console.log(data);
// }
// Fix:
function print(data) {
    console.log(data);
}
// Error 4
// Object is possibly 'undefined'
const users = ["Alice", "Bob"];
const found = users.find(u => u === "John");
// console.log(found.toUpperCase());
// Fix:
if (found) {
    console.log(found.toUpperCase());
}
// const emp: Employee = {};
// const employeeName: string = emp.name;
// Fix:
const emp = {};
const employeeName = emp.name ?? "Unknown";
console.log(employeeName);
