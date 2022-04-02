// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };
// console.log(student.courses);

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus',
//   },
//   occupation: 'engineer',
// };
// console.log(jane.location.country);

// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };
// fido['age'] = 4;
// fido['favorite food'] = 'beef';
// console.log(fido);

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus',
//   },
//   occupation: 'engineer',
//   greet: function (name) {
//     console.log(`Hej, ${name}!`);
//   },
// };

// jane.greet('Bobby'); // Hej, Bobby!

// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function () {
//     console.log('Harr Harr!');
//   },
// };

// for (let prop in obj) {
//   if (prop === true) {
//     console.log("It's true!");
//   }
// }

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33,
// };
// let nestedPerson = Object.entries(person);
// console.log(nestedPerson);

// let nestedArray = [
//   ['title', 'Duke'],
//   ['name', 'Nukem'],
//   ['age', 33],
// ];

// let person = Object.fromEntries(nestedArray);
// console.log(person);

// let obj = {
//   number: 1,
//   string: 'abc',
//   array: [1, 2, 3],
// };
// function clone(obj) {
//   return Object.assign({}, obj);
// }
