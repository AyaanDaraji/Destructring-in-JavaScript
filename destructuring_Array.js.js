let person = [
  { name: "Ayaan", age: 19, country: "India" },
  { name: "Iram", age: 13, country: "USA" },
  { name: "Ariz", age: 7, country: "China" }
];

let [indianPerson,...rest] = person;

console.log(indianPerson.name); 
console.log(indianPerson.age); 
console.log(indianPerson.country); 

console.log(rest[0].name);  
console.log(rest[1].name);              

