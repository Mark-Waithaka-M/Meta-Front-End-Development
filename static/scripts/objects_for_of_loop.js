const car = {
    speed: 100,
    color: "blue"
}
try{
    for(prop of car) {
        console.log(prop)
    }
}catch(err){
    console.log('Objects can\'t be iterated with a for of loop : ')
}

//Iterating over an Array
const colors = ['red', 'blue', 'green', 'yellow', 'black']

console.log('Arrays are Iterable with a for of loop : ')
for(var color of colors){
    console.log(color)
}

// Using Built in methods to iterate over Object's keys and values
const car1 = {
    color:'gold',
    speed:200
}

console.log('This will return an object car1')
console.log(car1)

console.log('This will return an array of keys')
console.log(Object.keys(car1))

console.log('This will return an array of values')
console.log(Object.values(car1))

console.log('This will return an array of arrays also called 2-member arrays nested inside an array')
console.log(Object.entries(car1))

var clothingItem = {
    price:200,
    color:'black',
    material:'leather',
    weather:'winter'
}

for(const key of Object.keys(clothingItem)){
    console.log(key + ':' + clothingItem[key])
}

for(const val of Object.values(clothingItem)){
    console.log(val + ':' + clothingItem[val] )
}

for(const prop of Object.entries(clothingItem)){
    console.log(prop + ':' + clothingItem[prop])
}