const person = {
    name: "John",
    age: 30,
    city: "Copenhagen",
    occupation: "Developer",
    isEmployed: true,
    skills: ["JavaScript", "HTML", "CSS"],
    address: {
        street: "Main St",
        number: 123,
        postalCode: "12345"
    }
};

// Udskriv egenskaberne ved hjælp af dot notation
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.occupation);

// Udskriv egenskaberne ved hjælp af bracket notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);
console.log(person["occupation"]);
// Løkke til at udskrive værdierne af arrayet
for (let i = 0; i < person.skills.length; i++) {
    console.log(person.skills[i]);
}

// Udskriv værdierne fra det nestede objekt
console.log(person.address.street);
console.log(person.address.number);
console.log(person.address.postalCode);