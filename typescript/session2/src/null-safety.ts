// Function 1
function getFirstWord(sentence: string | null): string {
    if (sentence === null) {
        return "No sentence provided";
    }
    return sentence.split(" ")[0];
}

/*
Without TypeScript:
Calling split() on null would cause:
TypeError: Cannot read properties of null
*/

// Function 2
function getUserAge(user: { name: string; age?: number }): string {
    if (user.age !== undefined) {
        return `${user.name} is ${user.age.toString()} years old`;
    }
    return `${user.name}'s age is unknown`;
}

/*
Without TypeScript:
Calling toString() on undefined would throw an error.
*/

// Function 3
const config = {
    database: {
        host: "localhost",
        port: 5432
    }
};

function getDbPort(): number {
    return config.database.port;
}

/*
This is already safe because port always exists.
*/

// Function 4
const users = ["Alice", "Bob", "Charlie"];

function findUser(name: string): string {
    const found = users.find(u => u === name);

    if (found === undefined) {
        return "User not found";
    }

    return found.toUpperCase();
}

/*
Without TypeScript:
Calling toUpperCase() on undefined
would crash the program.
*/