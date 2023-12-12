//1. Arrays DSA
//forEach method
let veggies = ['onion', 'garlic', 'potato']
veggies.forEach(function (veggie, index){
    console.log(`${index} . ${veggie}`)
})


//filter method
let nums = [1,2,3,4, 20, 25, 56, 90]
nums.filter(function(num){
    // return(num > 20)
    if(num > 20){
        console.log(num)
    }
    
})

//map method

let nums2 = [0,10,20,30,40,50]
nums2.map(function(num){
    console.log(num / 10)
})

// Objects DSA
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

// Maps DSA 
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// Sets DSA 
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);