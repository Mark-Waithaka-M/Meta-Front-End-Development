//How to convert JSON String to a Javascript Object using the JSON.parse Method 
const jsonStr = '{"color": "Gold"}'

console.log('This is a JSON String', jsonStr)

var aPlainObj = JSON.parse(jsonStr)
console.log('The JSON string has been converted to a Javascript Object :', aPlainObj)

// How to convert a plain Javascript Object to a json string using the JSON.stringify method

const person = {
    name:'Mark',
    age:23,
    gender:'Male',
    is_married:false
}

console.log('This is a normal Javascript Object', person)

const toJson = JSON.stringify(person)

console.log('A Javascript Object converted to a Json String', toJson)
