"use strict";
// Type Aliases
// Functions using aliases
function getUserById(id) {
    console.log("Fetching user:", id);
}
function updateStatus(id, status) {
    console.log(`User ${id} is now ${status}`);
}
function move(direction, steps) {
    console.log(`Moving ${steps} steps towards ${direction}`);
}
// Test
const userId = "U101";
const productId = "P201";
const time = Date.now();
getUserById(userId);
updateStatus(userId, "active");
move("north", 5);
/*
Observation:

UserId and ProductId are both aliases for string.

This works:

getUserById(productId);

TypeScript allows it because it uses Structural Typing,
not Nominal Typing.

Limitation:
Although UserId and ProductId represent different concepts,
TypeScript treats both simply as strings.
*/
