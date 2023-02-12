import Mammal from "../mammal.js";


export default class Human extends Mammal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.sleeping = true;
        this.talk = true;
        this.twoLegs = true;

    }

    eat(njam){
        this.soOtvorenaUsta = true;
    }
}