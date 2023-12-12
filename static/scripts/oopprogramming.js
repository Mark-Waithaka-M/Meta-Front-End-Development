// Task 1: Code a Person class
class Person{
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.name = name
        this.age = age
        this.energy = energy
    }
    sleep() {
        if (this.energy) {
            this.energy += 10
            console.log('The new Increased Energy level is : ', this.energy)
        }
    }
    doSomethhingFun() {
        if (this.energy) {
            this.energy -= 10
            console.log('The new decreased energy is : ', this.energy)
        }
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
    }
    goToWork(){
        if (this.xp) {
            this.xp += 10
            console.log('The new Increased expirience level is : ', this.xp)
        }
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var internObject = new Worker( 0, 10, 'Bob', 21, 110)

    internObject.goToWork()
    return internObject
}

intern()
// Task 4: Code a manager object, methods
function manager() {
    var managerObject = new Worker(100, 30, 'Alice', 30, 120)

    managerObject.doSomethhingFun()
    return managerObject
}


manager()
