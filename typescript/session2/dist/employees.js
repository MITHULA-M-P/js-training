"use strict";
// Step 4: Function to get full name
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
// Step 5: Introduce employee
function introduceEmployee(employee) {
    return `Hi, I am ${getFullName(employee)} from ${employee.department}, joined on ${employee.startDate.toLocaleDateString()}`;
}
// ----------------------
// Test Objects
// ----------------------
const person = {
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com"
};
const employee = {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice@example.com",
    employeeId: "EMP101",
    department: "Engineering",
    startDate: new Date("2024-01-01")
};
const manager = {
    firstName: "Robert",
    lastName: "Brown",
    email: "robert@example.com",
    employeeId: "EMP201",
    department: "Engineering",
    startDate: new Date("2023-06-15"),
    teamSize: 8,
    directReports: ["EMP101", "EMP102", "EMP103"]
};
// Function calls
console.log(getFullName(person));
console.log(getFullName(employee));
console.log(getFullName(manager));
console.log(introduceEmployee(employee));
console.log(introduceEmployee(manager));
/*
Why does getFullName() accept Person, Employee, and Manager?

Employee extends Person.
Manager extends Employee.

Therefore,
Manager → Employee → Person

A Manager has all the properties of Employee and Person,
so TypeScript allows it to be passed wherever a Person is expected.
*/ 
