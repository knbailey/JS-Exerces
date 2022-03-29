//  Chapter 3 exercises on Loops

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i -= 1) {
//   console.log(i);
// }

// let greeting = 'Aloha!';

// for (let count = 1; count <= 3; count += 1) {
//   console.log(greeting);
// }

// for (let i = 1; i <= 100; i += 1) {
//   console.log(i * 2);
// }

// let array = [1, 2, 3, 4];
// let index = 0;

// while (index < array.length) {
//   console.log(array[index]);
//   index += 1;
// }

// let cities = [
//   'Istanbul',
//   'Los Angeles',
//   'Tokyo',
//   null,
//   'Vienna',
//   null,
//   'London',
//   'Beijing',
//   null,
// ];

// for (let i = 0; i < cities.length; i += 1) {
//   if (cities[i] === null) {
//     continue;
//   }

//   console.log(cities[i].length);
// }

// let num = 1;

// while (num < 40) {
//   console.log(num);
//   num += 2;
// }

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}
