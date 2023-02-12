import Animal from "./animal.js"

const wolf = new Animal("Wolf","carnivore",5);
const dear= new Animal("Dear","herbivore",10);


wolf.eat(wolf);
wolf.eat(dear);

