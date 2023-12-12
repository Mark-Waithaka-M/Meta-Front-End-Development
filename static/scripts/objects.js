//Building objects using the dot notation
var user = {};
user.name = 'Mark'
user.age = 23
user.gender = 'Male'

console.log('This objects is built using the dot notation')
console.log(user)

//updating the objects with the dot notation and the Bracket notation
user.name = 'Mark Waithaka'
user.nationality = 'Kenyan'
user['marital status'] = 'Single'

// console.log('This is an updated version of the user object')
// console.log(user)


//Building objects using the comma-delimited key-value pairs
let Blog = {
    name : 'Javascript objects',
    author : 'James'
}

console.log('This object is built using the comma-delimited key-value pairs')
console.log(Blog)

//updating the Blog by adding a property category using the Bracket notation and changing the author's name using the dot notation
Blog.author = 'James Bond'
Blog['category'] = 'programming'

// console.log('This is an updated version of the Blog object')
// console.log(Blog)


//Building objects using the Bracket notation
let car = {}
car['Engine model'] = 'v12'
car ['Brand'] = 'Toyota land cruiser'

console.log('This object is built using the Brackets notation')
console.log(car)

//updating the car by adding a property year using the  dot notation and adding a property color using the Bracket notation
car.year = 2019
car['color'] = 'black'

// console.log('This is an updated version of the car object')
// console.log(car)

//using bracket notation to evaluate expressions.
let ArrayOfKeys = ['subjects', 'students', 'teachers', 'busModel']
let school = {
    subjects: 50,
    students: 2500,
    teachers:100,
    busModel: 'scania'
}

for(let i = 0; i < ArrayOfKeys.length; i++){
    console.log(`${ArrayOfKeys[i]} :`,school[ArrayOfKeys[i]])
}

//Arrays Objects
let fruits = ['peach', 'orange']
fruits.push('Mango')
fruits.push('Banana', 'Guava')

console.log('using push method to add item/items at the end of an array')
console.log(fruits)

fruits.pop()

console.log('using pop to remove the last item of an array')
console.log(fruits)

function ArrayBuilder(first, second, third){
    let arr = []
    arr.push(first, second, third)
    return arr
}

let phones = ArrayBuilder('Tecno', 'Infinix', 'Huawei')
console.log(phones)