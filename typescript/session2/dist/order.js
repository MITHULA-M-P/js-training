"use strict";
// Function to calculate total
function calculateTotal(order) {
    return order.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
}
// Sample Products
const laptop = {
    id: 1,
    name: "Laptop",
    price: 60000,
    category: "Electronics"
};
const mouse = {
    id: 2,
    name: "Mouse",
    price: 800,
    category: "Accessories"
};
// Sample Order
const order = {
    id: 101,
    customer: "Alice",
    items: [
        {
            product: laptop,
            quantity: 1
        },
        {
            product: mouse,
            quantity: 2
        }
    ],
    shippingAddress: {
        street: "12 MG Road",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        postalCode: "560001"
    },
    status: "pending",
    createdAt: new Date()
};
console.log("Order Total:", calculateTotal(order));
/*
Recursive Type Example

interface TreeNode {
    value: string;
    children: TreeNode[];
}

A TreeNode contains an array of TreeNodes.
This is called a recursive type because the interface
references itself.
*/ 
