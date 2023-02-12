import Human from "./human";

export default class Farmer extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.workingHourse = "3 hourse on the day";
        this.workingWithAnimals = true;
        this.ridesHorses = true;
        
        if(age > 50){
            console.log( `This human is too old to working like a`,  this.type)
        }

    }

   
    
    
}