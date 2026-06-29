"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Partial<T>
function updateUser(user, updates) {
    return { ...user, ...updates };
}
function sendWelcomeEmail(user) {
    console.log(`Welcome ${user.name}! Email sent to ${user.email}`);
}
function createUser(user) {
    return {
        id: Date.now(),
        ...user
    };
}
const permissions = {
    admin: ["create", "update", "delete"],
    editor: ["update"],
    viewer: ["read"]
};
function getPermissions(role) {
    return permissions[role];
}
// Testing
const user = createUser({
    name: "Alice",
    email: "alice@example.com",
    role: "admin"
});
console.log(user);
console.log(updateUser(user, {
    age: 25
}));
sendWelcomeEmail(user);
console.log(getPermissions("admin"));
