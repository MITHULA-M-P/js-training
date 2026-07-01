"use strict";
function filter(items, predicate) {
    return items.filter(predicate);
}
function transform(items, fn) {
    return items.map(fn);
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers, n => n % 2 === 0);
const stringNumbers = transform(numbers, n => n.toString());
console.log(evenNumbers);
console.log(stringNumbers);
const handler = (event, payload) => {
    console.log(event, payload);
};
handler("LOGIN", { user: "Alice" });
