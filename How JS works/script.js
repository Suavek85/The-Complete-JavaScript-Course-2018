//GLOBAL EXECUTION CONTEXT - ALL CODE THAT IS NOT ASSIGNED TO A PARTICULAR FUNCTION, BECOMES GLOBAL AND ITS OBJECT BECOMES THE WINDOW (IN BROWSER THAT'S THE GLOBAL OBJECT) --------- lastName VAR IS THE PROPERTY OF THE WINDOW OBJECT (PROPERTIES ARE VARIABLES ATTACHED TO OBJECTS)



//GLOBAL EXECUTION CONTECT => EXECUTION CONTEXT => EXECUTION CONTEXT




// HOISTING IN PRACTICE

/*

calculateAge(1950); //FUNCTION DECLARATION - FUNCTION ALREADY AVALABLE TO USE


function calculateAge(year) {
    
    console.log(2018 - year);
}


retirement(1956); //FUNCTION EXPRESSION - HOISTING DOESNT WORK HERE

var retirement = function(year) {
    
    console.log(65 - (2018 - year))
    
}



console.log(age); //HOSITING DOESNT WORK HERE AS WELL
var age = 23
console.log(age);


var age = 23
console.log(age);

function foo(age) {
    

var age = 65;
console.log(age);}

foo(age);            //WHY 23? BECUASE ITS FROM first GLOBAL CONTEXT VAR...IF YOU WAN TO TAKE IT FROM OUTSIDE OF FUNCTION IN FUNCTION U WILL GET - UNDEFINED
console.log(age)




// SCOPING

// FUNCTIONS CREATES A SCOPE

//FUNCTION WITHN A FUNCTION CREATES A LOCAL SCOPE NOT A GLOBAL SCOPE

//THANKS TO LEXICAL SCOPE, THE LOCAL SCOPE HAS ACCESS TO GLOBAL SCOPE AS SHOWN BELOW


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c); // => THATS A SCOPE CHAIN GOING UP TO FIND THE NEEDED VARIABLES, BUT T DOESNT WORK BACKWARDS - FROM TOP TO BOTTOM
    }
}



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}





// THIS KEYWORD

//REGULAR FUNCTION CALL - THIS POINTS AT THE GLOBAL OBJECT

//METHOD CALL - THIS POINTS TO THE OBJECT THAT IS CALING THE METHOD

//console.log(this)

calcAge(1985);

function calcAge (year) {
    
    console.log(2018 - year);
}

console.log(this)



var john = {
    fullName: 'John Smith',
    year: 1985,
    calcAge: function () {

        console.log(this);
        console.log(2018 - this.year);

        function inner() {
            console.log(this);
        }
        inner();
    }
}

*/

john.calcAge()

//METHOD BORROWING

//mike.calcAge = john.calcAge
