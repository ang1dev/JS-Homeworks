import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import StarZenskiSarplaninec from "./models/animal/starZenskiSarplaninec.js";
import Dog from "./models/animal/dog.js";
import Musican from "./models/animal/musician.js";

// console.log('Main class');


// const horse1 = new Horse('Goce', 7, 'Male');

// // console.log(horse1);

// horse1.die();

// const sarplaninec1 = new Sarplaninec('Sarko', 5, 'Male');

// sarplaninec1.bark();

// console.log(sarplaninec1);

// const pudlica1 = new Pudlica('Kiko', 5, undefined);
// // pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.die('crkni');
// pudlica1.bark('gaf gaf gaf');

// pudlica1.comeAlive()

// console.log('bark');
// pudlica1.bark()
// sarplaninec1.bark()
// console.log('bark ends');

// setTimeout(() => {
//     pudlica1.die()
// }, 10000)

// console.log(horse1);

// const starZenskiSarplaninec = new StarZenskiSarplaninec('Lajka', 11);
// console.log(starZenskiSarplaninec);


console.log(`This properties is for horse`);
const horse = new Horse ("Koko",24,"Male");
horse.printSpec();
horse.printAllValues();

console.log(`This properties is for Dog`);
const dog = new Dog("Kate", 5, "Female");
dog.printSpec();
dog.printAllValues();

console.log(`This properties is for Pudlica`);
const pudlica = new Pudlica("kiki",15,"Female");
pudlica.printSpec();
pudlica.printAllValues();

console.log(`This properties is for Sarplaninec`);
const sarplaninec = new Sarplaninec("Momo",8,"Male");
sarplaninec.printSpec();
sarplaninec.printAllValues();

console.log(`This properties is for Star Zenski Sarpl`);
const starZenskiSarplaninec = new StarZenskiSarplaninec ("Veks",8);
starZenskiSarplaninec.printSpec();
starZenskiSarplaninec.printAllValues();


console.log("Musican");
const musican = new Musican("Pero",55,"Male");
musican.playASong("narodna");
musican.printAllValues();




