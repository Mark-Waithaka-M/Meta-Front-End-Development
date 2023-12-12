export class Train{
    constructor(color, lightsOn){
        this.color = color
        this.lightsOn = lightsOn
    }

    toggleLightsOn(){
        this.lightsOn = !this.lightsOn
    }
    lightStatus(){
        console.log('Lights on?', this.lightsOn)
    }
    getSelf(){
        console.log(this)
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this)
        console.log(proto)
    }
}

export class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn)
        this.passengers = passengers
        this.highSpeedOn = highSpeedOn
    }
    toggleHighSpeedOn() {
        this.highSpeedOn = !this.highSpeedOn
        console.log('High speed status : ', this.highSpeedOn)
    }
    toggleLights() {
        super.toggleLightsOn();
        super.lightStatus();
        console.log('The lights are fully functional')
    }
    
}

var train1 = new Train('blue', true)
var train2 = new Train('black', false)


console.log('Train 1')
console.log(train1)
train1.toggleLightsOn()
train1.lightStatus()
train1.getSelf()
train1.getPrototype()

console.log('Train 2')
console.log(train2)
train2.toggleLightsOn()
train2.lightStatus()
train2.getSelf()
train2.getPrototype()

var highSpeedTrain1 = new HighSpeedTrain(600, false, 'red', true)

console.log('high speed train 1')
console.log(highSpeedTrain1)
highSpeedTrain1.toggleHighSpeedOn()
highSpeedTrain1.toggleLights()
highSpeedTrain1.getSelf()
highSpeedTrain1.getPrototype()