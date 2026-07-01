"use strict";
// legacy.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Calculate invoice total
function calculateInvoiceTotal(items, taxRate) {
    let total = 0;
    for (const item of items) {
        total += item.price * item.quantity;
    }
    const tax = total * taxRate;
    return total + tax;
}
// Format currency
function formatCurrency(amount, currencyCode) {
    return `${currencyCode}${amount.toFixed(2)}`;
}
// Display user name
function getUserDisplayName(user) {
    if (user.title) {
        return `${user.title} ${user.firstName} ${user.lastName}`;
    }
    return `${user.firstName} ${user.lastName}`;
}
// Find products by category
function findProductByCategory(products, category) {
    return products.filter(product => product.category === category);
}
// Sample Data
const invoiceItems = [
    { price: 100, quantity: 2 },
    { price: 250, quantity: 1 }
];
console.log(calculateInvoiceTotal(invoiceItems, 0.18));
const user = {
    firstName: "Alice",
    lastName: "Johnson",
    title: "Ms."
};
console.log(getUserDisplayName(user));
const products = [
    {
        id: "P101",
        name: "Laptop",
        category: "Electronics"
    },
    {
        id: "P102",
        name: "Chair",
        category: "Furniture"
    },
    {
        id: "P103",
        name: "Mouse",
        category: "Electronics"
    }
];
console.log(findProductByCategory(products, "Electronics"));
