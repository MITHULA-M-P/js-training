interface User {
    readonly id: number;
    name: string;
    email: string;
    age?: number;
    role: "admin" | "editor" | "viewer";
}

// Partial<T>
function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

// Pick<T, K>
type UserContact = Pick<User, "name" | "email">;

function sendWelcomeEmail(user: UserContact): void {
    console.log(`Welcome ${user.name}! Email sent to ${user.email}`);
}

// Omit<T, K>
type NewUser = Omit<User, "id">;

function createUser(user: NewUser): User {
    return {
        id: Date.now(),
        ...user
    };
}

// Record<K, V>
type RolePermissions = Record<
    "admin" | "editor" | "viewer",
    string[]
>;

const permissions: RolePermissions = {
    admin: ["create", "update", "delete"],
    editor: ["update"],
    viewer: ["read"]
};

function getPermissions(
    role: keyof RolePermissions
): string[] {
    return permissions[role];
}

// Testing
const user = createUser({
    name: "Alice",
    email: "alice@example.com",
    role: "admin"
});

console.log(user);

console.log(
    updateUser(user, {
        age: 25
    })
);

sendWelcomeEmail(user);

console.log(getPermissions("admin"));

export {};