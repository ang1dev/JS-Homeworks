import Human from "./human";

export default class Worker extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);
8
        this.workingHourse = "8 hourse every day";
        this.overWorking = false;
        this.drinkingCoffeeOnWork = true;


    }

    
    startWotking(time) {
        if (time >= 7 && time <= 8){
            console.log("He/She will be on time")
        }else{
            console.log("He/She is late")
        }

    }
    
    
}