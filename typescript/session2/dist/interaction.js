"use strict";
function isDeleted(record) {
    return record.isDeleted;
}
const base = {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date()
};
const user = {
    ...base,
    name: "Alice",
    email: "alice@gmail.com"
};
const audited = {
    ...user,
    isDeleted: false
};
console.log(isDeleted(audited));
/*
type A={value:string}
type B={value:number}
type C=A&B

value becomes never.

No object can satisfy both string and number simultaneously.
*/ 
