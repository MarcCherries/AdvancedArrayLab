"use strict"
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },

    
]

/*Example function
function findMexicanFood(){
    let results = dishes.filter(function(el){
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

    return results;
}

let mexicanFood = findMexicanFood();
console.log('Mexican Foods: ', mexicanFood)



//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter
*/
function problemOne(){
    let type = dishes.filter(function(dish){
        if(dish.cuisine === "Vegetarian"){
            return true;
        }
        else{
            return false;
        }})

    return type
}
  
let vegeterianMeals = problemOne();
console.log (vegeterianMeals);

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemTwo(){
    let bigItalian = dishes.filter(function(dish){
        if (dish.cuisine === "Italian" && dish.servings > 5){
            return true;
        }
        else {
            return false;
        }
    })
    return bigItalian;
}

let bigItalianOne = problemTwo()
console.log (bigItalianOne)

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter

function problemThree(){
    let idServingMatch = dishes.filter(function(dish){
        if (dish.id === dish.servings){
            return true;
        }
        else{
            return false;
        }
    })
    return idServingMatch;
}

let idServingMatchOne = problemThree();
console.log(idServingMatchOne);

//4. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFour(){
    let evenServing = dishes.filter(function(dish){
        if (dish.servings % 2 === 0){
            return true;
        }
        else {
            return false;
        }
    }

    )
    return evenServing;
}

let evenServingOne = problemFour();
console.log(evenServingOne);
//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter
function problemFive(){
    let tomatoCheese = dishes.filter(function(dish){
        if (dish.ingredients.includes('tomato') && dish.ingredients.includes('cheese')){
            return true;

        }
        else {
            return false;
        }
    }
        )
    return tomatoCheese;
}

let tomatoCheeseOne = problemFive();
console.log (tomatoCheeseOne);

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map
// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array
function problemSixA(){
    let cuisineType = dishes.map(function(dish){
        {
            return dish.cuisine;
        }
    })
    return cuisineType;
}
let cuisineTypeOne = problemSixA();
console.log (cuisineTypeOne)

function problemSixB(){
    let cuisineType = dishes.map(function(dish){
        {
            return dish.cuisine;
        }
    }).filter(function(dish, index, cuisineType){
        if (dish === cuisineType[index-1]){
            return false;
        
        }
        else {
            return true;
        }
    })
    return cuisineType;
}
let cuisineTypeTwo = problemSixB();
console.log (cuisineTypeTwo)

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 
function problemSeven(){
    let newNames = dishes.map(function(dish, id){
        return dish.cuisine +  ' ' + dish.name


    })
    return newNames
}

let newNamesONe = problemSeven();
console.log(newNamesONe);
//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

function problemEight(){
    let newNamesVeg = dishes.filter(function(dish){
        if (dish.cuisine === "Vegetarian"){
            return true;
        }
        else {
            return false;
        }
    }
    ).map(function(dish){
        return dish.cuisine +  ' ' + dish.name;


    })
    return newNamesVeg;
    
}
 let newNamesVegOne = problemEight();
 console.log(newNamesVegOne)

//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function problemNine(){
    let ingredientCheck = dishes.filter(function(dish){
        if (dish.ingredients.includes('chickpea')){
            return true;
        }
        else{
            return false;
        }
    }
    )
    return ingredientCheck;
}
let ingredientCheckOne = problemNine();
console.log(ingredientCheckOne);

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.
function problemTen(){
    let totalServings = dishes.map(function(dish){
        return dish.servings;
    }
    
    ).reduce(function(sum, current){
        return sum + current;
    }

        

    )
    return totalServings;
    
}


let servingCountOne = problemTen();
console.log (servingCountOne);

console.log()
//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

function problemEleven (){
    
    let uniqueMeal = dishes.map(function(dish){
        return dish.cuisine;

    }
    ).filter(function(dish, index, uniqueMeal){
        
        if (dish === uniqueMeal[index-1]){
            return false;
        }
        else {
            return true;
        }
        
    })
    return uniqueMeal;
}
let uniqueMealOne = problemEleven();

console.log (uniqueMealOne)
