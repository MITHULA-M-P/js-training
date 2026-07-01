interface StoreProduct {
    id: string;
    name: string;
    price: number;
    tags: string[];
    discount?: number;
}

// Bug 1
function applyDiscount(product: StoreProduct): number {
    return product.price - (product.discount ?? 0);
}

/*
Without TypeScript:
If discount is undefined,
price - undefined becomes NaN.
*/


// Bug 2
function getTagSummary(product: StoreProduct): string {
    return product.tags.join(", ").toUpperCase();
}

/*
Bug:
toUppercase() → wrong spelling.
Correct:
toUpperCase()
*/


// Bug 3
function createProduct(name: string, price: number): StoreProduct {
    return {
        id: Math.random().toString(),
        name,
        price,
        tags: []
    };
}

/*
Without TypeScript:
'name' and 'price' would become implicit any.
*/


// Bug 4
function findCheapest(products: StoreProduct[]): StoreProduct | undefined {
    if (products.length === 0) {
        return undefined;
    }

    return [...products].sort((a, b) => a.price - b.price)[0];
}

/*
Sorting directly mutates the original array.
Using spread creates a copy first.
*/


// Bug 5
function printProduct(product: StoreProduct): void {
    console.log(`${product.name} costs ₹${product.price}`);
}

/*
A void function should not return a value.
*/


// Testing

const p1 = createProduct("Laptop", 50000);
const p2 = createProduct("Mouse", 800);
const p3 = createProduct("Keyboard", 1500);

console.log(applyDiscount(p1));
console.log(getTagSummary({
    ...p1,
    tags: ["electronics", "computer"]
}));

console.log(findCheapest([p1, p2, p3]));

printProduct(p1);