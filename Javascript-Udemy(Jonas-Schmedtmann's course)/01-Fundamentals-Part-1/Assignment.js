//Lecture challenges starts

const country = 'Georgia';  
const continent = 'Europe';
const population = 133;


console.log(country);
console.log(continent);
console.log(population);

let isIsland = 'Georgia';
let language = 'English';
isIsland = false;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);


console.log(population);

console.log(population / 2);
console.log(population ++ );
console.log(population > 6);
console.log(33 - population > 0);
const description1 = 'Portugal' + ' ' + 'is in' + continent + 'and its 11 million people speak portuguese';
const description1Literal = `Portugal is in  ${continent}  and its 11 million people speak portuguese`
console.log(description1);

if (population > 33) {
 console.log(`${country}'s population is above average`)
} else {
 console.log (`${country}'s population is ${33 - population} million below average`)
};


console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// const numNeighbours = Number(prompt(`How many neighbour countries does your country
// have?`));
// console.log(numNeighbours);
// console.log(typeof numNeighbours);

// if(numNeighbours === 1) {
//   console.log('Only 1 border!')
// ;} else if (
//   numNeighbours > 1
// ) {
//   console.log('More than 1 border')
// ;} else {
//   console.log('No borders');
// ;}
  





//Lecture challenges ends


// coding challenge #1

// BMI = mass / height **2 
// Mark 78kg 1.69 John 92kg 1.95 m
// Mark 95kg 1.88 John 85kg 1.76 m

const massOfMark = 78;
const heightOfMark = 1.69;
const massOfJohn = 98;
const heightOfJohn = 1.95;



const bmiOfMark = massOfMark / 1.69 ** 2;
const bmiOfJohn = massOfJohn / 1.95 ** 2;



console.log (bmiOfMark);
console.log (bmiOfJohn);


// Coding challenge #2

if (bmiOfMark > bmiOfJohn) { console.log(
  `Mark's BMI (${bmiOfMark}) is higher than John's (${bmiOfJohn})`
)}  else { console.log(
  `John's BMI (${bmiOfJohn}) is higher than Mark's (${bmiOfMark})!`
)};


if (language === 'English' && population < 50 && !isIsland) {console.log(
 `You should live in ${country} :) `)
;} else {console.log(
  `${country} does not meet your criteria :(`)
;}


//Dolphins 96, 108, 89 Koalas 88, 91, 110

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//  console.log(`Dolphins are the winners`
// );} else if (scoreDolphins = scoreKoalas) {
// console.log(`Draw`)
// ;} else {
//   console.log(`Koalas are the winners`);
// }


const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

//bonus 1

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
 console.log(`Dolphins are the winners`);} 
 else if ( scoreDolphins = scoreKoalas && scoreDolphins>=100 && scoreKoalas>=100 ) {
console.log(`Draw`)
;} else if (scoreKoalas > scoreDolphins && scoreKoalas>=100 )
{
  console.log(`Koalas are the winners`);
} else {
 console.log('No one is the winner');
}

const languagem = ''
switch (languagem) {
  case  'chinese':
  case 'mandarin':
    console.log ('MOST number of native speakers!');
    break;
case 'spanish': 
console.log('2nd place in number of native speakers');
break;
case 'english':
  console.log('3rd place');
  break;
case 'hindi':
  console.log('Number 4');
  break;
case 'arabic':
  console.log('5th most speaken language');
  break;
default:
  console.log('Great language too :D');


} 



 console.log(`${country}'s population is ${population > 33 ? 'above' : 'below' } the average  `);

const fee = 275
 const tip = fee <= 300 && fee >= 50 ? `fee * 0.15'` : `fee * 0.2`;
 console.log(`The bill was ${fee}, the tip was ${tip} and the total value is ${tip + fee}`);

 console.log(`The bill was ${fee}, the tip was ${fee <= 300 && fee >= 50 ? `fee * 0.15`: `fee * 0.2`} 
 and the total value is ${tip + fee}`);