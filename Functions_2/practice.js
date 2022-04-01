// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }

// greet('Salutations');

// greet();

// function greet(greeting = 'Hello', recipeint = 'world') {
//   console.log(`${greeting}, ${recipeint}!`);
// }
// greet();
// greet('Salutations');
// greet('Good morning', 'Launch School');

// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//   console.log(`${greeting()}, ${recipient()}`);
// }
// greet();

// function calculateBMI(heightInCentimeters, weightInKilograms) {
//   let heightInMeters = heightInCentimeters / 100;
//   let bmi = weightInKilograms / heightInMeters ** 2;

//   return bmi.toFixed(2);
// }

// console.log(calculateBMI(180, 80)); // "24.69"

// function catAge(humanYears) {
//   switch (humanYears) {
//     case 0:
//       return 0;
//     case 1:
//       return 15;
//     case 2:
//       return 24;
//     default:
//       return 24 + (humanYears - 2) * 4;
//   }
// }

// console.log(catAge(0));
// console.log(catAge(1));
// console.log(catAge(2));
// console.log(catAge(3));
// console.log(catAge(4));

// function removeLastChar(string) {
//   return string.substring(0, string.length - 1);
// }

// console.log(removeLastChar('ciao!'));
// console.log(removeLastChar('hello'));

// const template = 'I VERB NOUN.';

// let sentence = (verb, noun) => {
//   return template.replace('VERB', verb).replace('NOUN', noun);
// };

// console.log(sentence('like', 'birds'));

// let initGame = function () {
//   return {
//     level: 1,
//     score: 0,
//   };
// };

// let game = initGame();

// let initGame = () => ({
//   level: 1,
//   score: 0,
// });
// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);
