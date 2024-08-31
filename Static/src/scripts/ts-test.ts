// example.ts

// A basic interface to define the shape of a Person object
interface Person {
    name: string;
    age: number;
    isStudent?: boolean; // Optional property
}

// A function that takes a Person object and returns a greeting message
function greet(person: Person): string {
    const studentStatus = person.isStudent ? "a student" : "not a student";
    return `Hello, my name is ${person.name}, I am ${person.age} years old and I am ${studentStatus}.`;
}
greet({ name: "John Doe", age: 25, isStudent: true });
// Create an object that adheres to the Person interface
const john: Person = {
    name: "John Doe",
    age: 25,
    isStudent: true,
};

// Call the greet function with the john object and log the result
console.log(greet(john));

// Another example with the isStudent property omitted
const jane: Person = {
    name: "Jane Smith",
    age: 30,
};

console.log(greet(jane));
