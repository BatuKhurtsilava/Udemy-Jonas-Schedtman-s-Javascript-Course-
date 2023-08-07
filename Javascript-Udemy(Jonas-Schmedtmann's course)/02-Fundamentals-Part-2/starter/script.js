'use strict';

//functions

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;
// const if =23;

function logger(){
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
 
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor (2,4);
console.log(appleOrangeJuice);

const num = Number('23');

// function declaration vs expression

// function calcAge1(birthYear) {
//  return 2037 - birthYear;

// }
//function declaration

// const age1 = calcAge1(1991);
// console.log(age1);

//function expression

const calcsAge2 = function (birthYear) {
  return 2037 - birthYear;
}

// Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`}

console.log(yearsUntilRetirement (1991,'Jonas'));
console.log(yearsUntilRetirement (1980,'Bob'));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges){
 
  const applePieces = cutFruitPieces (apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
 
}
console.log(fruitProcessor(2,3));



console.log(describePopulation('Georgia',4));


// const calcAge = function(birthYear) {
// return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) 
// {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement > 0){
//     console.log(`${firstName} has already retired`);
//     return retirement;
//   } else {
//     return `${firstName} retires in ${retirement} years`;
//     return -1;
//   }


// }

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1950,'Mike'));


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const y = new Array(1001, 1984, 2008, 2020);

// console.log(friends[2]);
// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas.length);

//Exercise
const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.lenght - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[0]), calcAge(years[years.lenght - 1])]






const friends = ['Michael', 'Maugli', 'Peter'];
console.log(friends);

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);


//Remove elements
const popped = friends.pop();
console.log(popped);  // Last

friends.shift();

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// Objects



// const jonas = {
//   firstName: 'Jonas',
//   lasName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven' ],
//   hasDriverLicense: true,

//   // calcAge: function(birthYear) {
//   //   return 2037 - birthYear;
//   // }

//   // calcAge: function() {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function() {
//     this.age = 
//      2037 - this.birthYear;
//      return this.age;
//   }




// console.log(jonas.calcAge());
// console.log(jonas.age);

// console.log(jonas.calcAge(1991));
// console.log(jonas[`calcAge`](1991));







// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, age, job, and friends');
// console.log(jonas[interestedIn]);

// if(jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(`Wrong request! Choose between firstName, age, job, and friends`);
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// Challenge
//"Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]} `)

// Object methods



const jonasB = {
  firstName: 'Jonas',
  lasName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven' ],
  hasDriverLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function() {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function() {
    this.age = 
     2037 - this.birthYear;
     return this.age;
  },

  dataSummary: function() {
    return `${this.firstName} is ${this.calcAge} -year old ${this.job}, and he has ${this.hasDriversLicense ? `a`: `doesn't have`} driver's license`;

  
  }

};

// console.log(jonas.calcAge());
// console.log(jonas.age);

// Challenge
// "Jonas is 46-year old teacher, and he has a driver's license"

console.log(jonasB.dataSummary);


console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');

// for loop keeps running while condition is true



const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael','Peter', 'Steven']
  
];

// 0, 1, ...
//4, 3,... , 0
for(let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let rep = 1 ; rep <= 10; rep++) {
  console.log(`-------- Starting exercise ${rep}`);
}


let rep = 1;
while(rep <= 10) {

  // console.log(`-------- Starting exercise ${rep}`);
  // rep++;

}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end..`);
}















  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}`);
  }












const types = []

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

types[0] = 'string';
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
 ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] !== 'string') continue;
console.log(jonas[i], typeof jonas[i]);
types.push(typeof jonas[i]);
}

console.log('--- Break with number ---')
for (let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] !== 'number') break;
console.log(jonas[i], typeof jonas[i]);
types.push(typeof jonas[i]);
}























// Challenges
// #1
function describeCountry (country, population, capitalCity) {
  const countryMan = `${country} has ${population} million people and its capital city is ${capitalCity} `;
   return countryMan;
 }
 
 const Georgia = describeCountry ('Georgia', 4, 'Tbilisi')
 console.log(Georgia);

 const Russia = describeCountry ('Russia', 130, 'Moscow')
 console.log(Russia);

 const Ukraine = describeCountry ('Ukraine', 45, 'Kiev')
 console.log(Ukraine);


// #2
 // Population 7900 mil
//  const population = 4
 function percentageOfWorld1 (population) {
  console.log(`population / 7900 * 100`);
 }
// const pGeorgia = percetageOfWorld1(4);
// const pRussia = percetageOfWorld1(140);
// const pUkraine = percetageOfWorld1(45);

//  console.log(pGeorgia, pRussia, pUkraine);


const percetageOfWorld2 = function percetageOfWorld1 (population) {
  return (population / 7900 * 100);
}

//#3
const percentageOfWorld = population => population / 7900 * 100;
const pGeorgia = percentageOfWorld(4);
const pUkraine = percentageOfWorld(45);
const pRussia = percentageOfWorld(140);
console.log(pGeorgia);
console.log(pUkraine);
console.log(pRussia);

// #4

function describePopulation(country,population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, 
  which is about ${percentage} of the world.`
 return description;
}


// Dolphins 44 23 71 Koalas 65 54 49
// Dolphins 85 54 41 Koalas 23 34 27



//challenge1

const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3 


let dolphinsScore = calcAverage (44, 23, 71);
let koalasScore =  calcAverage (65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas){
if (avgDolphins > 2 * avgKoalas) {
console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
} else if (avgKoalas > 2 * avgDolphins){
  console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
} else {
 console.log(`No one wins`);
}

}

checkWinner(dolphinsScore, koalasScore);

dolphinsScore = calcAverage (85, 54, 41);
koalasScore =  calcAverage (23, 34, 27);
checkWinner(dolphinsScore, koalasScore);

// array lecture challenge

const populations = [15, 140, 40, 34];
if (populations.length = 4){
  console.log(`true`);

} else {
  console.log(`false`);
};

console.log(populations.length === 4);

const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]),
 percentageOfWorld(populations[2]), percentageOfWorld(populations[3]), percentageOfWorld(populations[4])];

 console.log(percentages);

 const percentages2 = [];

 for(let i = 0; i < populations.length; i ++ ) {
  // if (percentages[i] === percentageOfWorld(populations[i])) ;
 const perc = percentageOfWorld(populations[i]);
 percentages2.push(perc);
 };

 console.log(percentages2);


 const percentages3 = []
 let i = 0
 while (i <= populations.length) {
  const perc = percentageOfWorld(populations[i]);
  percentages3.push(perc);
  i++
 }

console.log(percentages3);



const grip = function(bills) {
  return bills >=50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
 }

//  const bill = [125, 555, 44];
//  console.log(tip(bill[0]));


 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totals = [];
const totalCosts = grip + tipss;
for (let p = 0; p <= bills.length; p++) {
  console.log(grip(bills[p]));
  push.tipss(grip(bills[p]));
  push.totals(bills[p] + tipss[p])


}










 //LECTURE: Basic Array Operations (Methods)

 const neighbours = ['Turkey', 'Ukraine', 'Georgia', 'Armenia'];
 neighbours.push('Russia');
 console.log(neighbours);
 neighbours.pop('Russia');


 if (!neighbours.includes('Germany')) {
  console.log(`Probably not a central European country`);
 }

 neighbours[neighbours.indexOf('Georgia')] = 'Republic of Georgia';
 console.log(neighbours);

 //challenge #2

const tip = function(bills) {
  return bills >=50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
 }

 const bill = [125, 555, 44];
 console.log(tip(bill[0]));


 console.log(tip(bill[0]), tip(bill[1]), tip(bill[2]));
 const tips = [tip(bill[0]), tip(bill[1]), tip(bill[2])];

 const totalCost = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(totalCost);


// lecture challenges

const myCountry = {
  country: 'Georgia',
  capital: 'Tbilisi',
  language: 'Georgian',
  population: 4,
  neighbours: ['Armenia', 'Turkey', 'Ukraine']

};

console.log
(`${myCountry.country} has ${myCountry.population} million finnish-speaking people,
${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}`) ;

myCountry.population = myCountry.population * 2;
console.log(myCountry.population);

myCountry[`population`] = myCountry[`population`] / 2
console.log(myCountry.population);

//challenge 
// Mark 78 kg 1.69 John 92kg 1.95

const dataMark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  bMI: function () {
   this.bmi = this.mass / this.height ** 2;
   return this.bmi;

  } 


} ;

const dataJohn = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  bMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  } 

} ;

console.log(dataJohn.bMI);
// console.log(`${dataJohn.bMI > dataMark.bMI ? ` ${dataJohn.fullName} has hihger BMI ` : ` ${dataMark.fullName} has hihger BMI `})


const listOfNeighbours = 
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']] ;

for( i = 0; i <= 1- length.listOfNeighbours; i++) {
  console.log(`${i}`);

  for (countrynumber = 0; countrynumber <= length.listOfNeighbours[i]; countrynumber++ ) {
    console.log(`listofneighbours[i]: neighbour: `)
  }

}


