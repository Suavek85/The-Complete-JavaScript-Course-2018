/*

TO DO LIST:

1. ADD EVENTHANDLER FOR BUTTON CLICK
2. GET INPUT VALUES

3. ADD NEW ITEM TO DATA STRUCTURE (BOTTOM SECTION)
4. ADD NEW ITEM TO THE UI (BOTTOM SECTION)

5. CALCULATE BUDGET (TOP SECTION)
6. UPDATE UI (TOP SECTION)


MODULES - DOING THE ARCHITECTURE-STRUCTURING


MODULES - KEEP UNITS OF CODES CLEANLY SEPARATED AND ORGANIZED, U KEEP CODE RELATED TO ONE ANOTHER TOGETHER

UI MODULE - GET INPUT VALUES, ADD THE NEW ITEM TO THE UI, UPDATE UI
DATA MODULE - ADD THE NEW ITEM TO OUR DATA STRUCTURE, CALCULATE BUDGET
CONTROLLER MODULE - ADD EVENT HANDLER

//77

FUNCTIONS INSIDE THE MODULES WILL BE PRIVATE AND ACCESIBLE ONLY IN THAT MODULE

PLUS

PUBLIC METHODS EXPOSED TO THE PUBLIC

ALL OF THIS IS DATA ENCAPSULATION - ALLOWS TO HDE IMPLEMENTATION DETAILS OF A SPECIFC MODULE FORM THE OUTSIDE SCOPE SO THAT WE ONLY EXPOSE A PUBLC INTERFACE - AN API


MODULE PATERN (CLOSURES AND IFFES)


)

*/


/* EXPLANATION:

var budgetController = (function () //budgetCotroller va is an object contaitining the method publicTest....publicTest usses var x and add, thanks to the power of closures...x and add are in the closure, they are private and only publicTest can access them


    {

        var x = 23;

        var add = function (a) { //PRIVATE ADD FUNCTION ALSO DOESNT WORK FRM OUTISDE
            return x + a;
        }

        return { // RETURN OBJECT WITH METHOD PUBLIC TEST WORKS - WHY???
            publicTest: function (b) {
                return add(b);
            }
        } //return empty object


    })(); //IIFE self invoking function creates privacy by creating scope not visible from the outisde



var UIController = (function () {


    }


)();



var controller = (function (budgetCtrl, UICtrl) {

        var z = budgetCtrl.publicTest(5);

        return {
            anotherPublic: function () {
                console.log(z);
            }
        }
    }



)(budgetController, UIController);

*/







//BUDGET CONTROLLER - MODULE

//we want to have an object with a unique id for each data entry, an object with expense, description and value etc, and we want to have many objects - function constructor is needed

var budgetController = (function ()

    {

        //two constructors

        var Expense = function (id, description, value)

        {
            this.description = description;
            this.value = value;
            this.id = id;
        };


        var Income = function (id, description, value)

        {
            this.description = description;
            this.value = value;
            this.id = id;
        };

        var calculateTotal = function (type) {

            var sum = 0;
            data.allItems[type].forEach(function (cur) { //forEach() method calls a provided function once for each element in an array - similar to loop - has a callback which takes 3 arguments (currentValue, index, array)


                sum += cur.value;


            });

            data.totals[type] = sum;


        }


        //data structure where newItems from addItem method are pushed

        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: 0,
                inc: 0
            },
            budget: 0,
            percentage: -1 //minus 1 means it doesnt exist at this point

        };


        return {

            addItem: function (type, des, val) {
                var newItem, ID;


                // Create new ID
                if (data.allItems[type].length > 0) {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                } else {
                    ID = 0;
                }

                // Create new item based on 'inc' or 'exp' type - see both values in HTML (option) - one different assigned to each button

                if (type === 'exp') {
                    newItem = new Expense(ID, des, val);
                } else if (type === 'inc') {
                    newItem = new Income(ID, des, val);
                }

                // Push it into our data structure
                data.allItems[type].push(newItem);

                // Return the new element
                return newItem;
            },




            deleteItem: function (type, id) {

                var ids, index;

                //difference between forEach and map is that map returns a brand new array

                ids = data.allItems[type].map(function (current)

                    {

                        return current.id;



                    }



                );

                index = ids.indexOf(id);

                //splice to remove element from an array

                if (index !== -1) {
                    data.allItems[type].splice(index, 1);

                }

            },



            calculateBudget: function () {

                //calculate total income and expenses
                calculateTotal('exp');
                calculateTotal('inc');

                //total budget (income minus expenses)

                data.budget = data.totals.inc - data.totals.exp;

                //calculate the perentage of income that we spent

                if (data.totals.inc > 0) {

                    data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);

                } else {
                    data.percentage = -1;
                }

                // expense = 100, income = 200, spent 50% (100/200) = 0.5 * 100



            },

            getBudget: function () {

                //return an object with all the 4 values that we want nicely stored in one object

                return {

                    budget: data.budget,
                    totalExp: data.totals.exp,
                    totalInc: data.totals.inc,
                    percentage: data.percentage


                }

            },

            testing: function () {
                console.log(data);
            }




        };


    })();





//UI CONTROLLER - MODULE


/*

var UIController module holds a function which holds an object with a getInput method accesible to all by UIController.getInput

since its accesible to all then the controller module takes it and declares a  ctrlAddItem function to store the input in a var, then on click and keypress bot addeventlisteners act 

gets users input and store it 

*/

var UIController = (function () {

        var DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
            incomeContainer: '.income__list',
            expensesContainer: '.expenses__list',
            budgetLabel: '.budget__value',
            incomeLabel: '.budget__income--value',
            expensesLabel: '.budget__expenses--value',
            percentageLabel: '.budget__expenses--percentage',
            container: '.container'
        };


        return { // UI returns a method GETINPUT (which returns an object with 3 values) and GETDOMSRINGS which are both public now

            getInput: function () {


                return {

                    type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: parseFloat(document.querySelector(DOMstrings.inputValue).value) //parseFloat convers strings to numbers

                };
            },

            addListItem: function (obj, type) {
                var html, newHtml, element;

                //create HTML string with placeholder text

                if (type === 'inc') {
                    element = DOMstrings.incomeContainer;
                    html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%<div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                } else if (type === 'exp') {
                    element = DOMstrings.expensesContainer;
                    html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }

                //replace the placeholder with some actual data

                newHtml = html.replace('%id%', obj.id);
                newHtml = newHtml.replace('%description%', obj.description)
                newHtml = newHtml.replace('%value%', obj.value);


                /* insertAdjacentHTML 'beforebegin': Before the element itself.'afterbegin': Just inside the element, before its first child.' 'beforeend': Just inside the element, after its last child.'afterend': After the element itself. */

                //insert the HTML into the DOM using insertAdjacentHTML method

                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);



            },

            clearFields: function () {

                var fields, fieldsArr;

                fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue); //the querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object. document.querySelectorAll(".example"); x[0].style.backgroundColor = "red";

                fieldsArr = Array.prototype.slice.call(fields);

                fieldsArr.forEach(function (current, index, array) { //forEach() method calls a provided function once for each element in an array - similar to loop - does not involve variable setup (iterates over each element of the array) - has a callback which takes 3 arguments (currentValue, index, array)

                    current.value = "";
                });

                fieldsArr[0].focus(); //THe focus() method is used to give focus to an element 


            },


            /* budget: data.budget,
            totalExp: data.totals.exp,
            totalInc: data.totals.inc,
            percentage: data.percentage */

            //display the data stored originally in the private data structure mad epublic by a method tat returned an object


            displayBudget: function (obj) {

                document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
                document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
                document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;



                if (obj.percentage > 0) {

                    document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;


                } else {
                    document.querySelector(DOMstrings.percentageLabel).textContent = '---'
                };
            },

            getDOMstrings: function () {

                return DOMstrings; //make it public to use in GLOBAL APP CONTROLLER for button (inputBtn: '.add__btn')

            }

        };

    }


)();





//GLOBAL APP CONTROLLER - MODULE

//sets up addeventlisteners upon which ctrlAddItem is done (two inputs from two modules)


var controller = (function (budgetCtrl, UICtrl) {


    var setUpEventListeners = function () {

        var DOM = UICtrl.getDOMstrings(); //borrows UICTRL MODULE'S GETDOMSTRINGS method to run the inputBtn ADDEVENTLISTENERS

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); //on click ctrlAddItem

        document.addEventListener('keypress', function (event) { //on press ctrlAddItem

            if (event.keyCode === 13 || event.which === 13) {


                ctrlAddItem();

            }

        });


        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);






    };


    //so what is this ctrlAdditem??? ITS A CONTROL CENTER


    var updateBudget = function () {

        //1. calculate the budget

        budgetCtrl.calculateBudget();


        //2. return budget

        var budget = budgetCtrl.getBudget();


        //3. display the budget on the UI

        UICtrl.displayBudget(budget);

    };


    var ctrlAddItem = function () {

        var input, newItem;

        //1. get the field input data
        //stores the result of the UIController method in the new var

        input = UICtrl.getInput();

        //Conditions for user's valid data entry
        //isNaN means if it's not a number then, but we want the opposite

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            //2. add the item to the budget controller
            //stores the result of the Budgetcontroller method in the new var because the method return an object

            newItem = budgetCtrl.addItem(input.type, input.description, input.value); //var inputs simple 3 values

            //what is budgetCtrl.addItem ?????


            //3. add the new item to the  UI
            UICtrl.addListItem(newItem, input.type);

            //4. clear the fields

            UICtrl.clearFields();

            //5. calculate an dupdate budget


            updateBudget();
        }


    };









    var ctrlDeleteItem = function (event) {

        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; //traversing DOM structure

        if (itemID) {

            splitID = itemID.split('-'); //splits a string into two parts in array
            type = splitID[0];
            ID = parseInt(splitID[1]);


            //delete the item from the data sructure

            budgetCtrl.deleteItem(type, ID);

            //delete the item from the user interface


            //update and show the new budget




        }


    };



    return {

        init: function () {

            console.log('Apllication has started');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setUpEventListeners();
        }
    }


})(budgetController, UIController); //two arguments that will be passed as UICtrl and BudgetCtrl


controller.init();




//event delegation and event bubbling - to be used when we have an element with lots of child elements that we are intrested in OR when we want an event handler to be attached to an element which is not yet in the DOM when
