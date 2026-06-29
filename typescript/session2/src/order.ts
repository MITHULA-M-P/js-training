// Address Interface
interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

// Product Interface
interface Product {
  readonly id: number;
  name: string;
  price: number;
  category: string;
}

// Order Item Interface
interface OrderItem {
  product: Product;
  quantity: number;
}

// Order Interface
interface Order {
  readonly id: number;
  customer: string;
  items: OrderItem[];
  shippingAddress: Address;
  status: "pending" | "shipped" | "delivered";
  createdAt: Date;
}

// Function to calculate total
function calculateTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}

// Sample Products
const laptop: Product = {
  id: 1,
  name: "Laptop",
  price: 60000,
  category: "Electronics"
};

const mouse: Product = {
  id: 2,
  name: "Mouse",
  price: 800,
  category: "Accessories"
};

// Sample Order
const order: Order = {
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