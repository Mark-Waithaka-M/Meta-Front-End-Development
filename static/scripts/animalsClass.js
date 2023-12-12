class Animal{
    constructor(color = 'green', energy = 100){
        this.color = color
        this.energy = energy
    }
    isActive(){
        if (this.energy > 0 ){
            this.energy -= 20
            console.log('Energy is decreasing current Energy at : ', this.energy)
        }else if(this.energy == 0){
            this.sleep()
        }
    }
    sleep(){
        this.energy +=20
        console.log('Energy is increasing current energy at : ', this.energy)
    }
    getColor(){
        console.log(this.color)
    }
}

class Cat extends Animal{
    constructor(sound = 'prr', canJump = true, canClimbTree = true, color , energy){
        super(color, energy)
        this.sound = sound
        this.canJump = canJump
        this.canClimbTree = canClimbTree
    }
    makeSound(){
        console.log(this.sound)
    }
}

class Bird extends Animal{
    constructor(sound = 'chirp', canFly = true, color, energy){
        super(color, energy)
        this.sound = sound
        this.canFly = canFly
    }
    makeSound(){
        console.log(this.sound)
    }
}

class HouseCat extends Cat{
    constructor(houseCatSound = 'meow', sound, canJump, canClimbTree, color, energy){
        super(sound, canJump, canClimbTree, color, energy)
        this.houseCatSound = houseCatSound
    }
    makeSound(option){
        if(option){
            super.makeSound()
        }
        console.log(this.houseCatSound)
    }
}

class Tiger extends Cat{
    constructor(tigerSound = 'Roar!', sound, canJump, canClimbTree, color, energy){
        super(sound, canJump, canClimbTree, color, energy)
        this.tigerSound = tigerSound
    }
    makeSound(option){
        if(option){
            super.makeSound()
        }
        console.log(this.tigerSound);
    }
    
}

class Parrot extends Bird{
    constructor(canTalk = true, sound, canFly, color, energy){
        super(sound,canFly, color, energy)
        this.canTalk = canTalk
    }
    makeSound(option){
        if(option){
            super.makeSound()
        }
        if(this.canTalk){
            console.log('I am a talking Parrot')
        }
    }
}

/*
// testing class Cat
console.log(<---------------------------------------Testing class Cat--------------------------------------->)
var tom = new Cat()

//Cat Methods
tom.isActive()
tom.getColor()
tom.makeSound()

//Cat properties 
var x = tom.color
var y = tom.energy
var s = tom.sound
var c = tom.canJump
var d = tom.canClimbTree
console.log('tom\'s color is : ', x)
console.log('tom\'s energy is : ', y)
console.log('tom\'s sound is : ', s)
console.log('can tom Jump : ', c)
console.log('can tom climb a tree : ', d)
*/

/*
// testing class House cat
console.log('<------------------------------------------Testing class House cat-------------------------------->')
var tom = new HouseCat(true)
var jerry = new HouseCat(false)


// House cat Methods
tom.isActive()
tom.getColor()
tom.makeSound()

jerry.isActive()
jerry.getColor()
jerry.makeSound()

// House cat properties 
var x = tom.color
var y = tom.energy
var s = tom.sound
var ts = tom.tigerSound
var c = tom.canJump
var d = tom.canClimbTree
console.log('tom\'s color is : ', x)
console.log('tom\'s energy is : ', y)
console.log('tom\'s Inherited sound is : ', s)
console.log('tom\'s sound is : ', ts)
console.log('can tom Jump : ', c)
console.log('can tom climb a tree : ', d)

var xj = jerry.color
var yj = jerry.energy
var sj = jerry.sound
var tsj = jerry.houseCatSound
var cj = jerry.canJump
var dj = jerry.canClimbTree
console.log('jerry\'s color is : ', xj)
console.log('jerry\'s energy is : ', yj)
console.log('jerry\'s Inherited sound is : ', sj)
console.log('jerry\'s sound is : ', tsj)
console.log('can jerry Jump : ', cj)
console.log('can jerry climb a tree : ', dj)

*/


/*
// testing class Tiger
console.log('<------------------------Testing class Tiger----------------------------->')
var tom = new Tiger(true)
var jerry = new Tiger(false)


// House Tiger Methods
tom.isActive()
tom.getColor()
tom.makeSound()

jerry.isActive()
jerry.getColor()
jerry.makeSound()

// House cat properties 
var x = tom.color
var y = tom.energy
var s = tom.sound
var ts = tom.tigerSound
var c = tom.canJump
var d = tom.canClimbTree
console.log('tom\'s color is : ', x)
console.log('tom\'s energy is : ', y)
console.log('tom\'s Inherited sound is : ', s)
console.log('tom\'s sound is : ', ts)
console.log('can tom Jump : ', c)
console.log('can tom climb a tree : ', d)

var xj = jerry.color
var yj = jerry.energy
var sj = jerry.sound
var tsj = jerry.tigerSound
var cj = jerry.canJump
var dj = jerry.canClimbTree
console.log('jerry\'s color is : ', xj)
console.log('jerry\'s energy is : ', yj)
console.log('jerry\'s Inherited sound is : ', sj)
console.log('jerry\'s sound is : ', tsj)
console.log('can jerry Jump : ', cj)
console.log('can jerry climb a tree : ', dj)

*/

/*
// testing class Bird
console.log('<---------------------------------------Testing class Bird--------------------------------------->')
var tom = new Bird()

//Bird Methods
tom.isActive()
tom.getColor()
tom.makeSound()

//Bird properties 
var x = tom.color
var y = tom.energy
var s = tom.sound
var c = tom.canFly
console.log('tom\'s color is : ', x)
console.log('tom\'s energy is : ', y)
console.log('tom\'s sound is : ', s)
console.log('can tom Fly : ', c)
*/

// testing class House Parrot
console.log('<------------------------------------------Testing class Parrot cat-------------------------------->')
var tom = new Parrot(true)
var jerry = new Parrot(false)


// House Parrot Methods
tom.isActive()
tom.getColor()
tom.makeSound()

jerry.isActive()
jerry.getColor()
jerry.makeSound()

// House Parrot properties 
var x = tom.color
var y = tom.energy
var s = tom.sound
var c = tom.canFly
var d = tom.canTalk
console.log('tom\'s color is : ', x)
console.log('tom\'s energy is : ', y)
console.log('tom\'s Inherited sound is : ', s)
console.log('can tom Fly : ', c)
console.log('can parrot tom Talk : ', d)

var xj = jerry.color
var yj = jerry.energy
var sj = jerry.sound
var tsj = jerry.houseCatSound
var cj = jerry.canFly
var dj = jerry.canTalk
console.log('jerry\'s color is : ', xj)
console.log('jerry\'s energy is : ', yj)
console.log('jerry\'s Inherited sound is : ', sj)
console.log('jerry\'s sound is : ', tsj)
console.log('can jerry Fly : ', cj)
console.log('can Parrot jerry talk : ', dj)

