import Human from "./human.js";

export default class Musican extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.singASong = true;
       

    }

    playASong(songType){

        this.typeOfSong = songType;

        if(songType === "narodna"){
            console.log("Stani mome da zaigras...")
        }else{
            console.log("izlazi me uste ednas...")
        }
    }
    
   
}