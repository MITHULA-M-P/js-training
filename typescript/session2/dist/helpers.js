"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = slugify;
exports.truncate = truncate;
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-");
}
function truncate(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + "...";
}
/*
A .d.ts file provides type information for JavaScript code
without containing the implementation.

It helps TypeScript understand existing JS libraries during migration.
*/ 
