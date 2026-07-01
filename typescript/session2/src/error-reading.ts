// Error 1
// Property 'username' does not exist on type 'User'

interface User {
    name: string;
}

const user: User = {
    name: "Alice"
};

// console.log(user.username);

// Fix:
// console.log(user.name);


// Error 2
// Argument of type 'string' is not assignable to parameter of type 'number'

function square(num: number): number {
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

function print(data: string): void {
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


// Error 5
// Type 'string | undefined' is not assignable to type 'string'

interface Employee {
    name?: string;
}

// const emp: Employee = {};
// const employeeName: string = emp.name;

// Fix:

const emp: Employee = {};

const employeeName = emp.name ?? "Unknown";

console.log(employeeName);

export {};