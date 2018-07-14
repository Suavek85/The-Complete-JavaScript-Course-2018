/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);
console.log(lastName);
//variable naming rules
var job;
console.log(job);
*/

/*
var firstName = 'John';
var lastName = 'Smith';
var age = '32';
console.log(firstName + ' ' + age)

var job, isMarried;
job ='teacher';
isMarried = 'false';
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
age = 'twenty eight';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

//MATH OPERATOR

/*
var now, yearJohn, yearMark, ageJohm, ageMark;
now = 2018;
ageJohn = 32;
ageMark = 40;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

//LOGICAL OPERATOR

var johnOlder;
johnOlder = ageJohn > ageMark;
console.log(johnOlder)

//type off operator

console.log(typeof johnOlder);


//OPERATOR PRECEDENCE

var now, fullYear, yearJohn, isFullAge;
now = 2018;
fullYear = 18;
yearJohn = 1985;
isFullAge = now - yearJohn >= fullYear;
console.log(isFullAge);

//MULTIPLE OPERATORS

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


var x,y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y)

//MORE OPERATORS

x *= 2; 
console.log(x);



//CODING CHALLENGE 1


Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 



var Markkg, Johnkg, Markmet, Johnmet, MarkBMI, JohnBMI;
Markkg = 80;
Johnkg = 90;
Markmet = 1.80;
Johnmet = 1.70;
MarkBMI = Markkg / (Markmet * Markmet);
JohnBMI = Johnkg / (Johnmet * Johnmet);
console.log(MarkBMI,JohnBMI);
var Markhigher = MarkBMI >= JohnBMI;
console.log(Markhigher);
console.log('Is Marks BMI higher than Johns?' + ' ' + Markhigher);



//CONDITIONAL CODE

//IF ELSE STATEMENTS - 1ST WAY TO WRITE CONDITIONAL CODE

var firstName = 'John';
var status = 'single';
if (status === 'married') {

    console.log(firstName + ' is married');

}

else  {
    
    console.log(firstName + ' will hopefully marry soon')
}




var isMarried = true;
if (isMarried) {

    console.log(firstName + ' is married');

}

else  {
    
    console.log(firstName + ' will hopefully marry soon')
}

var Markkg, Johnkg, Markmet, Johnmet, MarkBMI, JohnBMI;
Markkg = 110;
Johnkg = 90;
Markmet = 1.80;
Johnmet = 1.70;
MarkBMI = Markkg / (Markmet * Markmet);
JohnBMI = Johnkg / (Johnmet * Johnmet);
console.log(MarkBMI,JohnBMI);

if (MarkBMI > JohnBMI) {
    
    console.log('Marks BMI is higher than Johns');
}

else {
    console.log('Johns BMI is higher than Marks')
}

//var Markhigher = MarkBMI >= JohnBMI;
//console.log(Markhigher);
//console.log('Is Marks BMI higher than Johns?' + ' ' + Markhigher);




var firstName = 'John';
var age = '20';

if (age < 13){
    
    console.log(firstName + ' is a boy.');
}

else if (age >= 13 && age < 20 ) {
    
    console.log(firstName + ' is a teenager.');
}

else {
    
    console.log(firstName + ' is a man.');
}



//TERNARY OPERATOR - 2nd WAY TO WRITE CONDITIONAL CODE

var firstName = 'John';
var age = 44;



age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');


var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);



if (age >= 18) {
    
    console.log('beer')
} else {
    
    console.log('juice')
}



//SWITCH STATEMENT - 3rd WAY TO WRITE CONDITIONAL CODE

var job ='teachers';
switch (job) {
        
    case 'teacher': console.log(firstName + ' teaches kids how to fart.');
        break;
    default: console.log(firstName + ' does nothing.')
}


var firstName = 'John';
var age = 8;

switch (true){
        
    case age < 13: console.log(firstName + ' is a boy.'); break;
        
    case age >= 13 && age < 20: console.log(firstName + ' is a tennager.' );break;
        
    case age >= 20 && age < 30: console.log(firstName + ' is a man.');break;
        
    default: console.log(firstName + ' is an old man.')
        
}



//TRUTHY AND FALSY VALUES

//FALSY VALUES = UNDEFINED, NULL, 0, ' ' , NaN

//TRUTHY VALUES = NOT FALSY


var height;
height = 23;

if (height || height === 0) {

    console.log('Variable is defined');
} else {

    console.log('Variable is NOT defined')

}

//EQUALITY OPERATORS

if (height == '23') {
    
    console.log('It\'s coercion!')
}



//CODING CHALLENGE 2

var JohnTeam, MikeTeam, MaryTeam, winner;
JohnTeam = (89 + 120 + 103) / 3;
MikeTeam = (116 + 94 + 123) / 3;
MaryTeam = (97 + 134 +105) / 3;

if (JohnTeam > MikeTeam && JohnTeam > MaryTeam ) {
    
    console.log('John\'s Team scored more points on average with' + JohnTeam + ' points');
} else if (MikeTeam > JohnTeam && MikeTeam > MaryTeam) {
    
    console.log('Mike\'s Team scored more points on average with ' + MikeTeam + ' points');
    
    
}  
else if (MaryTeam > JohnTeam && MaryTeam > MikeTeam) {
    
    console.log('Mary\'s Team scored more points on average with ' + MaryTeam + ' points');
     
} 


else {
    
    console.log('There was a no clear winner' )
}



//FUNCTIONS

function calculateAge (birthYear) {
    
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1944);
var ageBen = calculateAge(1999);

console.log(ageJohn, ageMike, ageBen);




function yearsUntilRetirement (year, firstName) {
    
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {  //conditional if statement
    console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        
        console.log(firstName + ' is already retired for ' + retirement + ' years.')
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1944, 'Lory');
yearsUntilRetirement(1999, 'Tom');

*/
/*

//FUNCTION STATEMENTS 9do not produce immediate result) AND EXPRESSIONS (produce result)


//FUNCTION DECLARATION

//function whatDoYouDo (job, firstName) {}


//FUNCTION EXPRESSION

var whatDoYouDo = function (job, firstName) {

    switch (job) { //conditional switch statement

        case 'teacher':
            return firstName + ' teaches kids.';
        case 'driver':
            return firstName + ' conducts vehicle.';
        case 'designer':
            return firstName + ' designs stuff.';
        default: firstName + ' does soemthign else.';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Jack'));
console.log(whatDoYouDo('designer', 'Marbella'));



//ARRAYS

var names = ['John', 'Mark', 'Jane'];
var years = new Array (1990, 1985, 1977);

console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
names[5] = 'Kamikadze';
console.log(names)

var john = ['John','Smith', 1990, 'teacher', false];
john.push('blue');
console.log(john);
john.unshift('Mr.');
john.shift();
console.log(john);
john.pop();
john.pop();
console.log(john);
console.log(john.indexOf(1990)); //most useful to test if an element is in the array or not, if not returns -1


var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer': 'John is a designer';
console.log(isDesigner);



* CODING CHALLENGE 3


John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀



//MINE WRONG,CAUSE ITS NOT A FUNCTION...

var bill = [124,48,268];
function whatTip (bill) {

    if (bill < 50) {
        bill * 0.2;
    } else if (bill >= 50 && bill < 200) {
        bill * 0.15;
    } else {
        bill * 0.1;
    }
}

var alltips = [whatTip(124[0]), whatTip(48[1]), whatTip(268[2])];
console.log(whatTip)



//CORRECT



function tipCalculator(bill) { //IN BRACKETS U DEFINE WHAT IS OR WILL BE KNOWN
    var percentage;
    if (bill < 50) {    //CONDITIONAL STATEMENT TO HELP
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill; //ACTION WITHOUT CONDITIONS, THESE DEFINED ABOVE
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);


//OBJECTS AND PROPERTIES - MOST IMPORTANT THING IN JS

//in objects order doesn;t matter at atll, in arrays in does

//OBJECT LITERAL

var john = {  

    firstName:'John', lastName:'Smith', birthYear:1990, family:['Jane', 'Mark', 'Bob', 'Emily'], job: 'teacher', isMarried:'false'};
console.log(john.firstName);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer' //TO CHANGE THE DATA


//OBJECT SYNTAX

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
console.log(jane)



//OBJECTS AND METHODS MEANING FUNCTIONS

var john = {  

    firstName:'John', 
    lastName:'Smith', 
    birthYear:1995, 
    family:['Jane', 'Mark', 'Bob', 'Emily'], 
    job: 'teacher', 
    isMarried:'false',
    calcAge: function(birthYear) {return 2018 - this.birthYear;}  //function without a name which is assigned to value
    
    
    
};

console.log(john.calcAge())



var john = {  

    firstName:'John', 
    lastName:'Smith', 
    birthYear:1995, 
    family:['Jane', 'Mark', 'Bob', 'Emily'], 
    job: 'teacher', 
    isMarried:'false',
    calcAge: function(birthYear) {this.age = 2018 - this.birthYear;}  //function without a name which is assigned to value
    
    
    
};

john.calcAge();
console.log(john)



// CODING CHALLENGE 4


Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 



var mark = {
    fullName: 'Mark',

    height: 1.90,

    mass: 80,

    BMI: function () {
        this.BMI = this.mass / (this.height * this.height);

        return this.BMI;


    }

};



mark.BMI();

console.log(mark);



var john = {
    fullName: 'John',

    height: 1.70,

    mass: 90,

    BMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }

};



john.BMI();

console.log(john);


if (mark.BMI > john.BMI) {
        console.log('Marks BMI is higher')
    } else if (john.BMI > mark.BMI) {
                console.log('Johns BMI is higher')}
                else {
                    'Both have the same BMI'
                };




// LOOPS AND ITERATION



// FOR LOOP

for (var i = 1; i <= 20; i += 2) { //you want to print from 0 to 9

    console.log(i);

}


//WITH WHAT START; WHEN END; HOW add 1 or every two

// i = 0, 0 < 10 true, log i to console, i++

// i = 1, 1 < 10 true, log i to the console, i++

//...

// i = 9, 9 < 10 true, log i to the console, i++

// i = 10, 10 < 10 FALSE, exit the loop!



var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {  //START WITH ZERO CAUSE ITS ZERO BASED ARRAY

    console.log(john[i]);

}



// WHILE LOOP

var i = 0;

while (i < john.length) {

    console.log(john[i]);

    i++;

}


// CONTINUE AND BREAK STATEMENTS

//CONTINUE - SKIP JUST ONe,TWO TEC AND CONTINUE
//BREAK - ON CONDITION QUIT COMPLETELY

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];



for (var i = 0; i < john.length; i++) {

    if (typeof john[i] !== 'string') continue;

    console.log(john[i]);

}



for (var i = 0; i < john.length; i++) {

    if (typeof john[i] !== 'string') break;

    console.log(john[i]);

}


// LOOPING BACKWARDS

for (var i = john.length - 1; i >= 0; i--) {

    console.log(john[i]);

}
*/

// CODING CHALLENGE 5

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK ??


var john = {

    firstName: 'John',

    billValues: [124, 28, 268, 180, 42],

    calcTip: function () {

        var percentage;
        
        this.tips = [];
        
        this.finalValues = [];

        var bill = this.billaValues[i];

        for (var i = 0; i < billValues.length; i++)

            if (bill < 50) {

                percentage = 0.2

            } else if (bill > 50 && bill < 200) {

            percentage = 0.15

        } else {

            percentage = 0.1

        };

        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;

    }
   

}

*/

/*

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = []; //TWO EMPTY ARRAYS FILLED BY THE LOOP
        this.finalValues = []; //TWO EMPTY ARRAYS FILLED BY THE LOOP

        for (var i = 0; i < this.bills.length; i++) {
            // THIS BECAUSE ITS IN METHOD OUTSIDE THE OBJECT
            var percentage;
            var bill = this.bills[i]; //JOIN SIMPLE VAR FOR CALCULATIONS WITH DEFINED ARRAY WITH DEFINED LOOPING, YOU CAN USE this.bills[i] in calculations though

            if (bill < 50) { //CONDITIONS, CALCULATIONS
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage; //NOW TWO EMPTY ARRAYS CAN BE FILLED WITH CALCULATIONS
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

john.calcTips();
console.log(john);


var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) { //CALCULATING AVERGAE THATvIS SMART
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}

*/