// console.log(`<--- control flow --->`)
// controlling the flow of the execution of the program.
// let isItSunny = false; 
// console.log(isItSunny);
// console.log(typeof isItSunny);

// if(isItSunny) { //inside these brackets are referred too as a 'block'
//     console.log(`let's go to the beach`);
// } else {
//     console.log(`let's stay inside and read a book`);
// }

// example: determine what we can make based on ingredients we have 

// let weHaveEggs = false; 
// let weHaveBacon = true; 

// if(weHaveEggs) {
//     console.log(`make an omelet`);
// }

// if(weHaveBacon) {
//     console.log(`make some bacon`);
// }

// let a = 4; 
// let b = 7;

// <---- COMPARISON OPERATORS ---->
// do not use double equals 

// a === b : is a equal to b? 
// a !== b : is a NOT equal to b? 
// a > b : is a > b
// a >= b : is a greater than or equal to b? 
// a < b : is a less than b? 
// a <= b : is a less than or equal to b? 

// console.log(a === 6); // false
// console.log(a = 6) //this is NOT a comparison operator. It's an assignment

// console.log(a = 6) // this is not comparison this is assignment 

// let temp = 52; 
// let jacket; 

// if (temp > 50) {
//     jacket = `no jacket`;
// } else {
//     jacket = `heavy jacket`
// }

// if (temp > 50 ) {
//     jacket = `no jacket`;
// } else if (temp > 50) {
//     jacket = `light jacket`;
// } else {
//     jacket = `heavy jacket`;
// }

// else if preferred to nesting else

// console.log(jacket);

// ( <--- TRUTHY VS FALSEY ---> )
// 8 falsey values really just 6 
// false, 0, '', null, undefined, NaN, -0, 0n, */
// everything else is true
 
// let a = 6;

// if (a) {
//     console.log(`a is truthy`);
// } else {
//     console.log(`its zero`);
// }

// const name = `zer0`;

// switch(name) {
//     case `joshua`:
//         console.log(`hello joshua`);
//         break;
//     case `alice`: 
//         console.log(`hello alice`);
//         break;
//     default: 
//         console.log(`idk your name`);
// }

// ( <--- LOGICAL OPERATORS ---> )
// 3 main operators 
// and = &&
// or = ||
// not = !

// console.log(`and operator!!!!!`);

// let pretzelsInStock = true; 
// let amountOfChange = .60;

// if (pretzelsInStock && amountOfChange >= 1.50) {
//     console.log(`buy them thangs`);
// } else {
//     console.log(`dont buy them thangz`);
// }

console.log(`or operator!!!!!!!`)

let rainy = false; 
let excitingMovieOut = false; 
let moneyIHave = 3.00;

if (rainy || excitingMovieOut) {
    console.log(`go to the movies`);
} else{
    console.log(`go to the park`);
};

 // you can put conditions into variables