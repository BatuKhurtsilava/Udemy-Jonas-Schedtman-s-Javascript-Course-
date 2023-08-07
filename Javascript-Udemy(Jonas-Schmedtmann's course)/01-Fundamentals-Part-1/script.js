
// let js = 'amazing';
// console.log(40 + 8 +23 - 10);

// console.log("Jonas");
// console.log (23);

// let firstName = "Matilda";



// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;

// let age = 30;
// age = 31;

var job = 'programmer';
job = 'teacher';


//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now -2020;
console.log(ageJonas);
console.log(ageSarah, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 =25
// x *=4; // x = x * 4 = 100
// x++; // x =x + 1
// x--; // x = x - 1
// console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >=18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log( ageJonas, ageSarah, averageAge);



const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ', a' + (year - birthYear) + 'years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year -birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('Just a regular string...')

console.log('String with \n\
multtiple \n\
lines');

console.log(`String 
multiple
lines`)

const age = 15;


if (age >= 18) {
  console.log('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age;
  console.log( `Sarah is too young. Wait another ${yearsLeft} years :)`)
};

const birthhar = 2000;
let century;
if(birthhar <= 2000) {
 century = 20;
} else {
 century = 21;
};
console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(' I am' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1; // '11'
n = n -1 ; 
console.log(n);

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean());
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
  console.log("Don't spend it all ;)");
} else {
  console.log(' You should get a job!');
}

let height = 123;
 if(height) {
  console.log('YAY! Height is defined')
;} else {
  console.log('Height is UNDEFINED')
;}

if(age === 18) console.log('You just became an adult :D( strict)');

if(age === 18) console.log('You just became an adult :D (loose)');

// const favourite =Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) { // '23' = 23
//   console.log('Cool! 23 is an amazing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if(favourite !== 23) console.log('Why not a 23?');

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if(shouldDrive) {
//   console.log('Sarah is able to drive');

// ;} else {
//   console.log('someone else should drive...')
// ;}

const isTired = true; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');

;} else {
  console.log('someone else should drive...')
;}


const day = 'monday';

switch(day) {
  case 'monday'://day === 'monday'
    console.log('Plan course structure')
    console.log('Go to coding meetup');
    break;
    case 'tuesday':
      console.log('prepare theory videos');
      break;
      case 'wednesday':
        case 'thursday':
          console.log('Write code examples');
          break;
          case 'friday':
            console.log ('record videos');
            break;
          case 'saturday':
            case 'sunday':
              console.log('Enjoy the weekend');
        
              break;    
              default:
                console.log('Not a valid day!')

}

const ages = 23;
// age>= 18 ? console.log('I like to drink wine 🍷 ') :
//   console.log('I like to drink water 💧');

 const drink = ages >= 18 ? 'wine' : 'water';
 console.log(drink);

 let drink2;
 if(ages >= 18) {
  drink2 = 'wine';

 } else {
  drink2 = 'water';
 }

 console.log(drink2);

 console.log(`I like to drink ${ages >= 18 ? 'wine' : 'water'}`);

 