// 'use strict';
//
// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; --> reserved word
// const private = 'private'; --> reserved word

// function logger() {
//     console.log("My name is Joseph");
// }
//
// logger();
// logger();
// logger();
//
// function fruitProcessor(apples, oranges) {
//     return `Juice with ${apples} apples and ${oranges} oranges`;
// }
//
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
//
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
//
// const num = Number('23');
// console.log(num);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
//
// const age1 = calcAge1(1991);
// console.log(age1);
//
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age2);
//
// console.log(age1, age2);

// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     return `${firstName} retires in ${65 - age} years`;
// }
//
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
//
// function fruitProcessor(apples, oranges) {
//     return `Juice with ${cutFruitPieces(apples)} pieces of apple and ${cutFruitPieces(oranges)} pieces of orange`;
// }
//
// console.log(fruitProcessor(2, 3));

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
//
// friends[2] = 'Jay';
// console.log(friends);
//
// const jonas = ['Jonas', 'Schemdtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);
//
// // Exercise
// const calcAge = function(birthYear) {return 2037 - birthYear;};
// const years = [1990, 1967, 2002, 2010, 2018];
//
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
//
// const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length - 1])];
// console.log(ages);

// // Add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);
//
// friends.unshift('John');
// console.log(friends);
//
// // Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
//
// friends.shift();
// console.log(friends);
//
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));
//
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));
//
// if (friends.includes('Steven')) {
//     console.log('You have a friends called Steven');
// }

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);
//
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
//
// const nameKey ='Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
//
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// // console.log(jonas[interestedIn]);
//
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }
//
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);
//
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//
//     // calcAge: function() {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         this.calcAge();
//         return `${this.firstName} is a ${this.age}-year old teacher, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// };
//
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
//
// console.log(jonas.getSummary());


// class Person {
//     constructor(fullName, mass, height){
//         this.fullName = fullName;
//         this.mass = mass;
//         this.height = height;
//     }
//
//     calcBMI(){
//         this.bmi = this.mass / this.height / this.height;
//         return this.bmi;
//     }
//     compareBMI(another) {
//         this.calcBMI();
//         another.calcBMI();
//         if (this.bmi > another.bmi) {
//             console.log(`${this.fullName}'s BMI (${this.bmi}) is higher than ${another.fullName}'s (${another.bmi})!`);
//         } else {
//             console.log(`${another.fullName}'s BMI (${another.bmi}) is higher than ${this.fullName}'s (${this.bmi})!`);
//         }
//     }
// }
//
// let john = new Person('John Smith', 92, 1.95);
// let mark = new Person('Mark Miller', 78, 1.69);
//
// john.compareBMI(mark);

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
//
// const types = [];
//
// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);
//
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
//
// console.log(types);
//
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages[i] = 2037 - years[i];
// }
// console.log(ages);
//
// // continue and break
// console.log('--- ONLY STRING ---');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }
//
// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
//
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }
//
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------ Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }
//
// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weight repetition ${rep}`);
//     rep++;
// }
//
// let dice = Math.trunc(Math.random() * 6) + 1;
//
// while (dice !== 6) {
//     console.log(`You rolled a ${dice})`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {console.log('Loop is about to end..');}
// }