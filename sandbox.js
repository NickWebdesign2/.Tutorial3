alert('hello, world');

console.log(1);
console.log(2);

<!-- will run in order from log 1 to 2 -->

let age = 25;
let year = 2019;

// log thing to console
// console.log(age, year);

/* age = 30;
console.log(age);

const points = 100;
console.log(points); */

var score = 75;
console.log(score)

//strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string lenght
console.log(fullName.lenght);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@')

//common string methods

//let result = email.lastIndexOf('n');

//let result = email.slice(2,5);

//let result = email.substr(4,10);

console.log(result);

let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

//math operators +, -, *, /, **, %

//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius**2

//order of operation - B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes);

// NaN - not a number

//console.log(5 / 'hello');
//console.log(5 * 'hello');



//template strings
const title = 'Best reads of 2019'
const author = 'Mario';

//concatenation way
//let result = 'The blog called' + title + 'by' + author + 'has' + likes + 'likes';
//console.log(result);

//template string way
console.log(result);

//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);


let ninjas = ['shaun', 'ryu', 'chun-li'];

//ninjas[1] = 'ken';
//console.log(ninjas[1]);

//let ages = [2-,25,30,35];
//console.log(ages[2]);

//let random = ['shaun', 'crystal', 30, 20];
//console.log(random);

//console.log(ninjas.lenght);

//array methods

//let result = ninja.join('-');
//let result = ninja.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal'])

console.log(ninjas);


//booleans & comparisons
console.log(true, false, "true", "false");

//methods can return booleans
//let email = 'luigi@thenetninja.co.uk';
//let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('!');
//let result = names.includes('luigi');

//console.log(result);

//comparison operators
//let age = 25;

//console.log(age == 25);
//console.log( age == 30);
//console.log(age != 30);
//console.log(age > 20);
//console.log(age < 20);
//console.log(age <= 25);
//console.log(age >= 25);

//let name = 'shaun';

//console.log(name == 'shaun');
//console.log(name == 'Shaun');
//console.log(name > 'crystal');
//console.log(name > 'Shaun');
//console.log(name > 'Crystal');


//loose comparison (different types can still be euqal)

//console.log(age == 25);
//console.log(age == '25');
//console.log(age != 25);
//console.log(age != '25');

//strict comparison (different types cannot be equal)

//console.log(age === 25);
//console.log(age === '25');
//console.log(age !== 25);
//console.log(age !== '25');

//type conversion
//let score = 100

//score = Number(score);
//console.log(score + 1);
//console.log(typeof score);

//let result = Number('hello');
//let result = String(50);
//let result = Boolean(0);
//let result = Boolean('');

//console.log(result, typeof result);




// Modern JavaScript Part #3 -------------------------------------



//Control Flow

//Use loops for cycling through data
//Use conditional statements fo checking conditions

//while loops
//const names = ['shaun' , 'mario', 'luigi'];
//let i = 0;

//while(i < 5){
// console.log('in loop: ', i);
// i++;
//}

//let i = 0;
//while(i < names.lenght){
//  console.log(names[i]);
//  i++
//}

//do while loops

//let i = 3;

// do{
// console.log('val of i is: ', i);
// i++;
// } while(i < 5);

//if statements
//const age = 25;

//if(age > 20){
//  console.log('you are over 20 years old');
//}

//const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

//if(ninjas.lenght > 4){
//  console.log("thats's a lot of ninjas");
//}

//Loical Operators - OR || and AND &&

//const password = 'p@assword1234';
//if(password.lenght >= 12 && password.includes('@')){
//  console.log('The password is mighty strong');
//} else if(password.lenght >= 8 || password.includes('@') && password.lenght > 5){
//  console.log('That password is long enough');
//} else {
//  console.log('Password is not long enough');
//}

//Logical NOT (!)

//let user = false;

//if(!user){
//  console.log('you must be logged in to continue');
//}

//console.log(!true);
//console.log(!false);

//Break and continue

//const scores = [50, 25, 0, 30, 100, 20, 10];

//for(let i = 0; i < scores.lenght; i++){

//if(scores[i] === 0){
//  continue;
//}

//console.log('your score: ', scores[i]);

//  if(scores[i] === 100){
//    console.log('congrats you got the top score!');
//  }
//}

//switch statements

/* const grade = 'D';

switch(grade){
  case '50':
  console.log('You got an A!');
  break;
  case 'B':
  console.log('You got an B!');
  break;
  case 'C':
  console.log('You got an C!');
  break;
  case 'D':
  console.log('You got an D!');
  break;
  case 'E':
  console.log('You got an E!');
  break;
  default:
  console.log('not a valid grade')
} */

//Variable And Block Scope

/* const age = 30;

if(true){
  const age = 40;
  const name = 'shaun';
  console.log('inside 1st code block: ', age, name);

  if(true){
    const age = 50;
    console.log('inside 2nd cod block: ', age);
  }
}

console.log('outside the code block: ', age, name, test); */

// Modern JavaScript Part #4 -------------------------------------

//Function Expression

const speak = function() {
  console.log('good day!');
};

greet();
greet();
greet();

//speak();
//speak();
//speak();

//function greet()
