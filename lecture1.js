/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practise
 */


var firstCar = 'Doge';/*A variable in js does not start with a number*/
var myVariable = 'variable';/*Var is a reserverd word in javascript*/ 
var firstName = 'Jerry';/*Variables are must not have white spaces between them*/
var schoolName = 'MEST';/*Variable not human readable and not in camelCase*/
var totalNumber = 100;/*Best practice is to ensure the variable is in camelCase*/

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  "It's nice to me you today!";/*Double quotes must be used to prevent a syntax error*/
var response = "Ashwin said, Yes Sir!";/*the presence of  extras quote resulted in a syntax error*/
/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 The identity  operator evaluates the left side of the expression and compares with the right side . It evaluates to true. 
 */

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
//    Object literal notation ：
      var pizza = {
      	size: 'medium',
      	toppings: 'pepperoni',
      	price: 'expensive',
      	ingredients: 'flour' 
      };



// Object constructor function
    var pizzaAmericano = {...}, var pizzaBeef= {...}, var pizzaPineapple={...} 
    function pizza(size,toppings,price,ingredients) {
	this.size = size; 
	this.toppings = toppings;
    this.price = price;
    this.ingredients = ingredients;   
} 
	var pizzaAmericano = new pizza('medium', 'pepperoni', 'flour','expensive');

	var object = Object.create(); 
    var pizza = {
			size: 'medium',
      	    toppings: 'pepperoni',
      	    price: 'expensive',
      	    ingredients: 'flour' 
    };

    var pizza1 = Object.create(pizza); 





/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
