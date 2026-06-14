console.log("===== SECTION 1 =====");

const name = "Mithula";
let age = 20;
const role = "Student";
let isAvailable = true;

console.log(`name is a ${typeof name}`);
console.log(`age is a ${typeof age}`);
console.log(`role is a ${typeof role}`);
console.log(`isAvailable is a ${typeof isAvailable}`);



console.log("===== SECTION 2 =====");

console.log(`Hi, I'm ${name} and I'm a ${role}.`);
console.log(`Available: ${isAvailable}`);
console.log(`My name has ${name.length} characters`);

console.log("===== SECTION 3 =====");

const fullName = (first, last) => `${first} ${last}`;

const isAdult = age => age >= 18;

const formatUser = user => `${user.name} — ${user.role}`;

console.log(fullName("Alice", "Johnson"));
console.log(isAdult(20));
console.log(formatUser({ name: "Alice", role: "dev" }));

console.log("===== SECTION 4 =====");

const user = {
  id: 1,
  name: "Alice",
  role: "dev",
  active: true,
  address: {
    city: "Mumbai",
    country: "India"
  }
};

const { name: userName, role: userRole, active } = user;
const { city } = user.address;

console.log(userName);
console.log(userRole);
console.log(active);
console.log(city);

const updatedUser = {
  ...user,
  active: false
};

console.log(updatedUser);

console.log("===== SECTION 5 =====");

const devs = ["Alice", "Carol"];
const designers = ["Bob", "Dan"];

const team = [...devs, ...designers];
console.log(team);

const newTeam = [...team, "Eve"];
console.log(newTeam);

const [firstMember, secondMember] = team;

console.log(firstMember);
console.log(secondMember);

console.log("===== SECTION 6 =====");

const users = [
  { id: 1, name: "Alice", role: "dev", active: true },
  { id: 2, name: "Bob", role: "design", active: false },
  { id: 3, name: "Carol", role: "dev", active: true },
  { id: 4, name: "Dan", role: "design", active: true },
  { id: 5, name: "Eve", role: "dev", active: false }
];

const activeUsers = users
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeUsers);

const devUsers = users.filter(user => user.role === "dev");
console.log(devUsers);

const descriptions = users.map(
  user => `${user.name} is a ${user.role}`
);

console.log(descriptions);

const activeDevs = users
  .filter(user => user.active && user.role === "dev")
  .map(user => user.name);

console.log(activeDevs);

console.log("===== SECTION 7 =====");

const roleCount = users.reduce((acc, user) => {
  acc[user.role] = (acc[user.role] || 0) + 1;
  return acc;
}, {});

console.log(roleCount);

const firstActiveDesigner = users.find(
  user => user.active && user.role === "design"
);

console.log(firstActiveDesigner);

const hasInactive = users.some(user => !user.active);
console.log(hasInactive);

const allHaveRoles = users.every(user => user.role);
console.log(allHaveRoles);

console.log("===== SECTION 8 =====");


const input = "5";
const score = 5;

if (input === score) {
  console.log("match");
}


const doubled = [1, 2, 3].map(n => n * 2);
console.log(doubled);


const original = [1, 2, 3];
const updatedArray = [...original, 4];

console.log(original);
console.log(updatedArray);


const person = {
  name: "Alice",
  active: true
};

person.active = false; 
console.log(person);
 person = {name:"Bob"}; 

console.log("===== SECTION 9 =====");


const Username = "Alice";
const username = "Bob";

console.log(Username);
console.log(username);


const a = null;
const b = undefined;

console.log(typeof a); 
console.log(typeof b); 



const greet = name => `Hello, ${name}`;

console.log(greet("Alice"));

