// Type Aliases

type UserId = string;
type ProductId = string;
type Timestamp = number;
type Status = "active" | "inactive" | "pending";
type Direction = "north" | "south" | "east" | "west";

// Functions using aliases

function getUserById(id: UserId): void {
    console.log("Fetching user:", id);
}

function updateStatus(id: UserId, status: Status): void {
    console.log(`User ${id} is now ${status}`);
}

function move(direction: Direction, steps: number): void {
    console.log(`Moving ${steps} steps towards ${direction}`);
}

// Test

const userId: UserId = "U101";
const productId: ProductId = "P201";
const time: Timestamp = Date.now();

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
