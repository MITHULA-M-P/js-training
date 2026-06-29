"use strict";
// Task A
function describe(value) {
    if (value === null) {
        return "No value provided";
    }
    if (typeof value === "string") {
        return `String of length ${value.length}: ${value}`;
    }
    if (typeof value === "number") {
        return `Number: ${value.toFixed(2)}`;
    }
    return `Boolean: ${value}`;
}
console.log(describe("Hello"));
console.log(describe(12.3456));
console.log(describe(true));
console.log(describe(null));
function makeSound(animal) {
    if ("meow" in animal) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
const cat = {
    meow() {
        console.log("Meow!");
    }
};
const dog = {
    bark() {
        console.log("Woof!");
    }
};
makeSound(cat);
makeSound(dog);
// Task C
function summarise(input) {
    if (typeof input === "string") {
        return `String: ${input}`;
    }
    if (Array.isArray(input)) {
        return `Array contains ${input.length} numbers`;
    }
    return `Object label: ${input.label}`;
}
console.log(summarise("TypeScript"));
console.log(summarise([10, 20, 30]));
console.log(summarise({ label: "Student" }));
/*
Discriminated Union Example

interface Cat {
    kind: "cat";
    meow(): void;
}

interface Dog {
    kind: "dog";
    bark(): void;
}

type Animal = Cat | Dog;

function sound(animal: Animal) {
    if (animal.kind === "cat") {
        animal.meow();
    } else {
        animal.bark();
    }
}

Discriminated unions are more reliable because
TypeScript narrows the type using the common 'kind'
property instead of checking whether a property exists.
*/
