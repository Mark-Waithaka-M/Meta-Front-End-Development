const countries = ['Kenya', 'Tanzania', 'Uganda']

function EastAfricaCountries(country1, country2, country3){
    console.log('1st country : ' + country1)
    console.log('2nd country : ' + country2)
    console.log('3rd country : ' + country3)
}

EastAfricaCountries(... countries)


//The Rest operator
// unpacks item into a smaller box

const top7 = ['kenya', 'uganda', 'Rwanda', 'Burundi', 'Congo', 'Tanzania', 'Eritrea']

const [] = top7 

const[first, second, third, ...secondVisit] = top7

console.log('In my first visit I will visit :', first, second, third)
console.log('In my next visit I will tour : ', secondVisit)

// Using the Rest operator in function 
function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)
}

let shoppingCart = (addTaxToPrices(1.1, 46, 89, 35))
console.log(shoppingCart)


// Join arrays, objects using the rest operator
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

// Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// Copy either an object or an array into a separate one
//  how to copy an object into a completely separate object, using the spread operator.
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

// copy an array into a completely separate array, also using the spread operator
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

