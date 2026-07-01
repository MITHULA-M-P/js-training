"use strict";
// User Interface
// Admin User
const adminUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 28,
    role: "admin"
};
// Editor User
const editorUser = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    role: "editor"
};
// Viewer User
const viewerUser = {
    id: 3,
    name: "Carol",
    email: "carol@example.com",
    role: "viewer"
};
console.log(adminUser);
console.log(editorUser);
console.log(viewerUser);
/*
❌ Error Example:

const invalidUser: User = {
    id:4,
    name:"David",
    email:"david@gmail.com",
    role:"superuser"
};

Error:
Type '"superuser"' is not assignable to type
'"admin" | "editor" | "viewer"'.


❌ Error Example:

adminUser.id = 10;

Error:
Cannot assign to 'id' because it is a read-only property.


readonly protects important values from being modified accidentally,
making the code safer and preventing bugs.
*/ 
