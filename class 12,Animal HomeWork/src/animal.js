export default class Animal {
    constructor(
        nameOfAnimal,
        typeOfAnimal,
        inputAge,
        sizeOfAnimal
    ) {
        this.name = nameOfAnimal;
        this.type = typeOfAnimal;
        this.age = inputAge;
        this.size = sizeOfAnimal;
        this.isEaten = false   
    }

    eat(animal) {
        if (animal instanceof Animal && this.type === "herbivore") {
            console.log("The animal " + this.name + " is a herbivore and does not eat other animals")
        }
        else if (animal instanceof Animal && this.type != "herbivore") {
            animal.isEaten = true;
            console.log("The animal " + this.name + ` ate the ${animal.name}.`)
        } else if (animal.size > this.size) {
            console.log("The animal " + this.name + " tried to eat the " + animal.name + " but it was too large")

        }

        let isAnimal = animal instanceof Animal;
        if (isAnimal == false) {
            console.log("The animal " + this.name + " is eating " + animal.name)
        }
    }
}

