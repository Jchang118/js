// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
//
// console.log("Jonas");
// console.log(23);
//
// let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
//
// let jonas_matilda = "JM";
// let $function = 27;
// let person = "jonas";
// let PI = 3.1415;
//
// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";
//
// let job1 = "programmer";
// let job2 = "teacher";
//
// console.log(myFirstJob);
//
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
//
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");
//
// javascriptIsFun = "Yes";
// console.log(typeof javascriptIsFun);
//
// let year;
// console.log(year);
// console.log(typeof year);
//
// year = 1991;
// console.log(year);
// console.log(typeof year);
//
// console.log(typeof null);
//
// let age = 30;
// age = 31;
//
// const birthYear = 1991;
// birthYear = 1990; -- > not allowed
//
// const job; --> not allowed, has to be an initial value
//
// var job = "programmer"; --> always use LET instead of VAR!!!
// job = "teacher";
//
// lastName = "Chang"; --> without LET OR CONST, this would be treated as a global variable
// console.log(lastName);
//
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Joseph";
// const lastName = "Chang";
// console.log(firstName, lastName + " is brilliant!");

// // Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);
// console.log(`I'm ${firstName}, a ${year - birthYear} years old ${job}!`);

// console.log(`String with
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start driving license 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, wait another ${yearsLeft} years :)`)
// }

// const birthYear = 2001;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear) + 18, inputYear);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if(money) {
//     console.log("Don't spend it all!");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if(height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

// const age = 18;
// if(age == '18') {
//     console.log("it matches!");
// } else {
//     console.log("it dose not match!");
// }
// if(age === '18') {
//     console.log("it matches!");
// } else {
//     console.log("it dose not match!");
// }

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 7) {
//     console.log(`Cool! 7 is an amazing number!`);
// } else if (favourite === 23) {
//     console.log("23 is also a cool number1");
// } else if (favourite === 9) {
//     console.log("9 is also a cool number1");
// } else {
//     console.log("Number is neither 23 or 7.");
// }

// if (favourite !== 23) console.log("Why not 23?");