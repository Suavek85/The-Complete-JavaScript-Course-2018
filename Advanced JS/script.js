//OBJECTS AND FUNCTIONS - ADVANCED

//EVERYTHING IS AN OBJECT
//PRIMTIVES (numbers, strings, booleans, undefined, null)
//EVERYTHING ELSE (arrays,functions, objects, dates, wrappers for numbers etc) IS AN OBJECT

//OBJECT ORIENTED PROGRAMING
//- OBJECTS INTERACTING WITH ONE ANOTHER VIA METHODS & PROPERTIES
//- USED TO STORE DATA, STRUCTURE APPLICATIONS INTO MODULES AND KEEPING CODE CLEAN

//-there are blueprints that help us generate as many OBJECTS (instead of writing them manually one by one) as we want e.g. PERSON (NAME, YEAROFBIRTH, JOB, CALCULATEAGE) - that's called CONSRUCTOR/PROTOTYPE - thanks to this you can build as many instances as you want

//INSTANCE with everything defined - var John (John, 1990, teacher, calculateAge(1990))

//INHERITANCE - ONE OBJECT IS BASED ON ANOTHER OBJECT TAKING THEIR PROPERTIES ETC

//PERSON OBJECT (with it's properties) <==== ATHLETE )BJECT (with it's properties) borrows/inherits all the properties from PERSON OBJECT

//inheritance uses PROTOTYPRE
//each object has a prototype property which makes inheritance possible
//add to PERSONS (OBJECT) PROTOTYPE PROPERTY a method or a property, so THAT JOHN (OBJECT) can access it/ inherit it --- the inheritance would work for all the objects created from a PERSON OBJECT BLUEPRINT

//PERSON OBJECT ITSELF IS AN INSTANCE OF AN EVEN BIGGER CONSTRUCT - OBJECT (OBJECT) WHICH HAS A BUNCH OF METHODS IN ITS PROTOTYPE PROPERTY ----- JOHN OBJECT CAN ALSO ACCESS THESE ------AND ALL OF THIS IS A PROTOTYPE CHAIN

// 1. EVERY JS OBJECT HAS A PROTOTYPE PROPERTY WHICH MAKES INHERITANCE POSSIBLE IN JS
// 2. PROTOTYPE PROPERTY OF AN OBJECT IS WHERE WE PUT METHODS AND PROPERTIES THAT WE WANT OTHER OBJECTS TO INHERIT
// 3. WHEN A CERTAIN PROPERTY OR METHOD IS CALLED, THE SEARCH STARTS IN THE OBJECT ITSELF, AND IF IT CANNOT BE FOUND, THE SEARCH MOVES ONTO THE OBJECTS PROTOTYPE. THIC CONTINUES UNTIL THE METHOD IS FOUND: PROTOTYPE CHAIN.



//FUNCTION CONSTRUCTOR

// WRITING OBJECTS WITH OBJECTS LITERAL
/*
var john = {

    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'


};

 

// WRITING OBJECTS WITH FUNCTION CONSTRUCTOR (INSTATIATION) 

- always written with capital letter
- new operator - creates a brand new object
- then a function is called creating new execution context with 'this' variable which points to the new empty object
- 

*/

/*

//START WITH PERSON PROTOTYPE

var Person = function (name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}


Person.prototype.calculateAge = function () {

    console.log(2016 - this.yearOfBirth);

};

Person.prototype.lastName = 'Smith';


//JOHH JANE MARK BASED ON PERSON PROTOTYPE

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1985, 'designer');

var mark = new Person('Mark', 1940, 'retired');


john.calculateAge();
//function always needs to be called, in order for the result to be displayed
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/



//IN CONSOLE

/*if in the CONSOLE you type in john you would get all the infromation about john:

john
Person {name: "John", yearOfBirth: 1990, job: "teacher"}
job
:
"teacher"
name
:
"John"
yearOfBirth
:
1990
__proto__
:
Object

there you can access properties.methods of john, it's object and the object of the object which by deafult has for instance hasOwnProperty
 john.hasOwnPropert('job')
 true
john.hasOwnPropert('lastName')
 false (that's not johns own property it's been inherited from the prototype)
 john instanceof Person
 true
 
*/


//OBJECT.CREATE
/*

var personProto = {
    
    calculateAge: function () 
    { console.log(2016 - this.yearOfBirth);} 
};



var john = Object.create(personProto); //asisgning methods/properties from personProto
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';



var jane = Object.create(personProto,
                        
                        {
    
    name: {value: 'Jane'},
    yearOfBirth: {value: 1960},
    job: {value: 'designer'},
}

                        
                        
                        
                        )

//OBJECT.CREATE VS FUNCTION CONSRUCTOR

//OBJECT.CREATE - BUILDS AN OBJECT THAT INHERITS DIRECTLY FROM THE ONE THAT WE PASSED INTO THE FIRST ARGUMENT

//FUNCTION CONTRUCTOR - THE NEWLY CREATED OBJECT INHERTS FROM THE CONTRUCTOR"S PROTOTYPE PROPERTY

*/

//PRIMITIVES VS OBJECTS

//VARIABLES ASSOCIATED WITH PRIMITIVES HOLD THEM INSIDE
//VARIABLES ASSCOIATED WITH OBJECTS DO NOT HOLD THEM  -THEY ARE A REFERENCE WHERE THE OBJECT IS STORED

/*

//PRIMITIVES

var a = 23;
var b = a;
a = 46;
console.log(a, b);


//OBJECTS

var obj1 = {

    name: 'John',
    age: 26

};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
*/

//FUNCTIONS

/*

var age = 27;
var obj = {
    
    name:'Jonas',
    city:'Lisbon',
    
};

function change (a,b) {
    
    
    a = 30;
    b.city = 'San Francisco';
    
}

change(age,obj);

console.log(age);
console.log(obj.city);

*/

//primitve changed in the function, when we pass primitive into function a simple copy is created
//when we pass an object we do not pass it, we just pass a reference to the object



//FUNCTIONS - PASSING FUNCTIONS AS ARGUMENTS


/* a function is an instance of an object type and behaves like an object 
- we can store functions in a variable
- we can pass a function as an argument to another function
- we can return a function from a function

in JAVASCRIPT WE HAVE FIRST CLASS FUNCTIONS

*/

/*

//A FUNCTION CAN BE A MACHINE THAT LOOPS THROUGH AN ARRAY AND WE TELL IT WHAT TO DO WITH EACH THING IN THE ARRAY (ONE MORE FUCNTION)

var years = [2000,1928,1985, 1996,1998];

//define main function

function arrayCalc(arr, fn) {
    
    var arrRes = [];
    for (var i = 0; i < arr.length; i++)
        { 
        
        arrRes.push(fn(arr[i]));
    
        }
    
    return arrRes;
    
}

//define callback function


function calculateAge(el) {
    
    return 2016 - el;
    
}

function isFullAge(el) {
    
    
    return el >= 18
    
}

function maxHeartRate(el) {
    
    if (el >= 18 && el <= 81)
    
    { return Math.round(206.9 - (0.67 * el));}
    
    else {  return -1 }
}

//call the main function, store in a ne variable to display the result

var ages = arrayCalc(years,calculateAge); //calculateAge is a callback function as it's caled later by the main function, no need to call is seperately
var fullAge = arrayCalc(ages,isFullAge); 
var rates = arrayCalc(ages,maxHeartRate); 

console.log(ages);
console.log(fullAge);
console.log(rates);

*/

//FIRST CLASS FUNCTIONS. FUNCTIONS RETURNING FUNCTIONS (OBJECTS EFFCTIVELY)

/*

function interviewQuestion (job)

{
    if (job === 'designer') { return function(name) {console.log(name + ', can you please explain what UX design is?');}  } 
    
    else if (job === 'teacher') { return function(name) {console.log(name + ', what subject do you teach?');} }
    
    else { return function(name) {console.log('Hello ' + name + ' what do you do?');}}
    
    
    
}

//1st way

var teacherQuestion = interviewQuestion('teacher'); //WOW, FIRST FUNCTION TREATED AS ANY OTHER VARIABLE
teacherQuestion('John'); 

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Tom');


//2nd way

interviewQuestion('teacher')('Mark');

*/

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

/*

//function declaration

function game()

{
    var score = Math.random() * 10;
    console.log(score >= 5);

}

//...and calling a function

game();

*/

/*

//a better way IIFE:

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score); //but doesn't work from the outside

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);

*/




//CLOSURES

/*

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}


var retirementUS = retirement(66);
var retirementGER = retirement(65);
var retirementICE = retirement(68);


retirementUS(1990);
retirementGER(1990);
retirementICE(1990);

//OR

//retirement(66)(1990);

//closure - the inner function is able to use variables retirement and the a of the function that is already gone BECAUSE the inner function has always access to the variables and parameters of its outer function, even after the outer function has returned

*/

//CHALLENGE ADHOC

//mine

/*

function interviewQuestion(job)

{

    var a = ', can you please explain what UX design is?';
    var b = ', what subject do you teach?';
    var c = ' what do you do?';
    if (job === 'designer') {
        return function (name) {
            console.log(name + a);
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + b);
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + c);
        }
    }


};

interviewQuestion('teacher')('Mark');


//HIS

function interviewQuestion(job)

{
    return function (name) {

    if (job === 'designer') {
        console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
        console.log(name + ', what subject do you teach?');
    } else 
        {
            console.log('Hello ' + name + ' what do you do?');
        }


    }};

    interviewQuestion('teacher')('Mark');
    
    */

//BIND CALL AND APPLY METHODS

/*

var john = {


    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemen. I am ' + this.name + ', I am ' + this.age + ' years old, and I am a ' +
            this.job)
        } else if (style === 'friendly') {
            console.log('Hey lads. I am ' + this.name + ', I am ' + this.age + ' years old, and I am a ' +
            this.job + '. Have a nice ' + timeOfDay )
        }
    }

};



var emily = {
    
    
    name: 'Emily',
    age: 32,
    job: 'designer'
    
    
    
};

john.presentation('formal', 'evening');
//let's use john's presentation method for emily, let's use CALL METHOD - MEETHOD BORROWING;

john.presentation.call(emily,'friendly', 'morning');

*/


//APPLY METHOD

//john.presentation.apply(emily,['friendly', 'morning']);

//BIND METHOD - the difference is that it doesn;t automatically call the function but creates a copy of the fnction so that we can store it somewhere - it's called CARRYING

/*

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');



//MODYFYING EARLIER EXAMPLE - PASSING IN 2nd ARGUMENT




var years = [2000,1928,1985, 1996,1998];


function arrayCalc(arr, fn) {
    
    
    var arrRes = [];
    for (var i = 0; i < arr.length; i++)
        { 
        
        arrRes.push(fn(arr[i]));
    
        }
    
    return arrRes;
    
}


function calculateAge(el) {
    
    return 2016 - el;
    
}

function isFullAge(limit, el) { //we have added limit
    
    
    return el >= limit //limits instead of a fixed 18
    
}



var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); //copy of the isFullAge function with 20 as the preset limit
console.log(ages);
console.log(fullJapan);


*/

/////////////////////////////
// CODING CHALLENGE 7


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array



4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).


5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).


7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


//YEAHHHHHHH I DID IT :D


/*

var Question = function (question, ansArray, correct) {

    this.question = question;
    this.ansArray = ansArray;
    this.correct = correct;

};



var set1 = new Question('Who are you?', ['You - 1', 'Me - 2', 'Them - 3'], '2');

var set2 = new Question('What do you do?', ['Work - 1', 'Fly - 2', 'Die - 3'], '1');

var set3 = new Question('Whats you color ?', ['Dog - 1', 'House - 2', 'Blue-3'], '3');


var set = [set1, set2, set3];


//console.log(set1.question, set1.ansArray[0], set1.ansArray[1], set1.ansArray[2]);



function init()

{
    
    var random = Math.floor(Math.random() * 3);
    
    console.log('Question: ' + set[random].question + ' Answers: ' + set[random].ansArray[0],set[random].ansArray[1],set[random].ansArray[2]);
    
   
    var sign = prompt("What's the answer?");
    if (sign == set[random].correct) {console.log('Correct')} else {console.log('Wrong')};
  
    
};
    
    
init();

*/

//APPLY IIFE for 7? YES


//HIS WAY OF DOING IT WITH METHODS

/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again :)')
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
*/




/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/



(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();
