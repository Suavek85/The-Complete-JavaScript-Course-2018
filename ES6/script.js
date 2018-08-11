//LET AND CONST


//CONST is an unmutable variable, cannot be changed
//LET behaves liek the old var

/*

//ES5

var name5 ='Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6

const name6 ='Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name5);

*/

//ES5

/*

function driversLicence5(passedTest) {

    if (passedTest) {

var firstName = 'John';
    var yearOfBirth = 1990;

    }

    
    console.log(firstName + ', ' + yearOfBirth + ', can drive a car.');

}

driversLicence5(true);


//ES6

function driversLicence6(passedTest) {

    if (passedTest) {

let firstName = 'John';
    const yearOfBirth = 1990;

    }
    
    console.log(firstName + ', ' + yearOfBirth + ', can drive a car.');
}

driversLicence6(true);

//DOESNT WORK CAUSE LET AND CONST ARE BLOCK SCOPED - ACCESIBLE ONLY INSIDE THE SAME BLOCK, VAR IS FUNCTION SCOPED

*/

/*
function driversLicence6(passedTest) {
    
    let firstName;
    const yearOfBirth = 1990;
    

    if (passedTest) {

    firstName = 'John';

    }
    
    console.log(firstName + ', ' + yearOfBirth + ', can drive a car.');
}

driversLicence6(true);

*/

/*

let z = 23;
for (let z = 0; z < 5; z++) {
    
    
    console.log(z);
    
    
}
console.log(z)

//the result here is 0,1,2,3,4,5,23 (2 LET VALUES ACCEPTED)

var i = 23;
for (var i = 0; i < 5; i++) {
    
    
    console.log(i);
    
    
}
console.log(i)

*/

//the result here is 0,1,2,3,4,5 (FIRST VAR OVERWRITTEN)



//BLOCKS AND IIFES

//if LET and CONST are block scoped that soudns very much like data privacy

//{} - thats all we need to create a block and use it instead of IIFES

//ES6

/*

{
    
    
    let a = 1;
    
    const b = 2;
    
    var c = 7;
    
}

console.log(a + b);//not accesible

console.log(c);

*/

//ES5

/*

(function() {
    
    var c = 5;
    
})();

console.log(c);

*/


//STRINGS

/*

let firstName = 'John';

let lastName = 'Smith';

const yearOfBirth = 1990;

function calcAge(year) {

    return 2016 - year;

}

*/

//TEMPLATE LITERALS

//ES5

/*

console.log('This is ' + firstName + ' ' + lastName + '. ' + 'He was born in ' + yearOfBirth + ' so today he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6 - backtick and a dollar sign

console.log(`This is ${firstName} ${lastName}. Today he is ${calcAge(yearOfBirth)}`);


//STRING METHODS (startsWith, endsWith, includes, repeat)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('J'));
console.log(n.includes('hn'));

console.log(` ${firstName}`.repeat(10));


*/
/*

//ARROW FUNCTIONS


const years = [1987, 1999, 2011, 1984];


//ES5 - LOOPING A FUNCTION OVER ARRAY

//the map() method creates a new array with the results of calling a function for every array element

var years5 = years.map(function(el) {
    return 2016 - el;
});
console.log(years5);


//ES5 - ARROW FUNCTION FOR LOOPING A FUNCTION OVER ARRAY


//const years6 = years.map(el => 2016 - el);
//console.log(years5);


let years6 = years.map((el,index) => `Age element ${index + 1}: ${2016 - el}.`);


console.log(years6); //(4) ["Age element 1: 29.", "Age element 2: 17.", "Age element 3: 5.", "Age element 4: 32."]

*/

//ARROW FUNCTIONS - MORE

//ES5

/*

var box5 = {
    
    color:'green',
    position:'1',
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {  var str = 'This is box number' + self.position + '. '; alert(str);})
        
    }
}

box5.clickMe();

*/
/*
//ES6

const box6 = {
    
    color:'green',
    position:'1',
    clickMe: function() {
        
        document.querySelector('.green').addEventListener('click', () => {  var str = 'This is box number' + this.position + '. '; alert(str);})
        
    }
}

box6.clickMe();

//the arrow function shares the lexical this keyword with its surroundings

*/



function Person(name) {
    this.name = name;
}

/*
//ES5

Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) { return this.name + ' is friends with ' + el}.bind(this)); console.log(arr);
}

var friends = ['Bob', 'Jack', 'Jane'];
new Person('John').myFriends5(friends);

*/


//ES5

/*

Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`); console.log(arr)
}

var friends = ['Bob', 'Jack', 'Jane'];
new Person('John').myFriends5(friends);

*/

//DESTRUCTURING

//ES5

var john = ['John', 26];

//var name = john[0];
//var age = john[1];


//ES6
/*

const [name, age] = ['John', 26];
console.log(name, age)

const obj = {firstName: 'John', lastName: "Worldly"};

const  {firstName, lastName} = obj;
console.log(firstName, lastName);

const  {firstName: a, lastName: b} = obj;
console.log(a,b);



function calcAgeRetirement(year) {


    const age = new Date().getFullYear() - year;
    return [age, 65 - age]; //TO GET AN ARRAY


}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement)

*/

//110 - start


//ARRAYS

const boxes = document.querySelectorAll('.box'); //ITS A NODE LIST SO A PROBLEM...

//ES5

/*

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function (cur)

    {


        cur.style.backgroundColor = 'dodgerblue';

    }

)


for (var i = 0; i < boxesArr5.length; i++) {


    if (boxesArr5[i].className === 'box blue') {

        continue; //skips iteration of the loop

    }

    boxesArr5[i].textContent = 'I changed to blue'

};


*/

//ES6

/*

const boxesArray6 = Array.from(boxes);

boxesArray6.forEach(cur => cur.style.backgroundColor = 'yellow');


for(const cur of boxesArray6)   {
    
    if(cur.className === 'box blue') {continue;}
    
    
    cur.textContent = 'I changed to blue'
    
};

*/

/*
var ages = [12, 54, 11, 19, 12, 90];

var full = ages.map(function (cur)

    {

        return cur >= 18;
    });
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6

console.log(ages.findIndex (cur => cur >= 18));
*/



//SPREAD OEPRATOR

/*

function addFourAges (a,b,c,d)
{ return a + b + c + d };

var sum1 = addFourAges(13,12,11,2);

console.log(sum1);

//ES5 - USING APPLY

var ages = [13,12,11,2];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


//ES6

const max3 = addFourAges(...ages); //expands an array into its components
console.log(max3);



const familySmith = ['Mark', 'Lucia', 'Tom'];
const familyMiller = ['Chris', 'Adam', 'Luca'];


const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

*/

//spreads works both on arrays as well as node lists


/*

const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box');

const all = [h, ...boxes1]; //node list

//converting it into an array and looping with forEach:

Array.from(all).forEach(cur => cur.style.color = 'purple');

*/

//REST PARAMETERS


//ES5

/*

function isFullAge5() {

    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (cur) {
            console.log((2016 - cur) >= 18);
        }


    )

};

//isFullAge5(1990,1995, 2000);


//ES5

function isFullAge6(...years)

{
    years.forEach(cur => console.log((2016 - cur) >= 18))
}



isFullAge6(1990, 1995, 2000);

*/

//DEFAULT PARAMETERS

//ES5

/*

function SmithPerson(firstName, yearOfBirth, lastName, nationality)

{

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;


}

var john = new SmithPerson('John', 1990);

console.log(john);


var emily = new SmithPerson('John', 1990, 'Diaz');


console.log(emily);

*/

//ES6

/*

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = "American") {
    
    
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
    
}



var john = new SmithPerson('John', 1990);

console.log(john);


var emily = new SmithPerson('John', 1990, 'Diaz');


console.log(emily)

*/


//MAPS

//set ,get, has, clear, delete are the methods that can be used to manipulate the map


/*

const question = new Map();

question.set('question', 'What is the offical name of the latest JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct',3);
question.set(true,'Correct answer');
question.set(false,'Wrong answer');


console.log(question.get('question'));
console.log(question.size);

if(question.has(4)) { question.delete(4);}


question.forEach((value, key) => console.log(`This is ${key} and its set to ${value}`))

*/

//CLASSES

//ES5

var Person5 = function (
    name, yearOfBirth, job) {


    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;


}


Person5.prototype.calculateAge = function ()

{
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age)
}

var john = new Person5('John', 1987, 'consultant');



//ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job
    }
    
    calculateAge()

    {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age)
    }
};
