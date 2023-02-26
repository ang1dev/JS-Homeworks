import Films from "./scripts/films.js";
import People from "./scripts/people.js";
import Planets from "./scripts/planets.js";
import Species from "./scripts/species.js";
import Starships from "./scripts/starships.js";
import Vehicles from "./scripts/vehicles.js";


const films = new Films();

let filmsBtn = document.getElementById("films");
filmsBtn.addEventListener("click", () => {
    films.getData("films").then((data) => {
        console.log(data)
        films.create(data);
        document.getElementById("table").style.visibility = "visible";
        document.getElementById("people").style.display = "none";
        document.getElementById("planets").style.display = "none";
        document.getElementById("species").style.display = "none";
        document.getElementById("starships").style.display = "none";
        document.getElementById("vehicles").style.display = "none";

    })

});

const people1 = new People();
let peopleBtn = document.getElementById("people");
peopleBtn.addEventListener("click", () => {
    people1.getData("people").then((data) => {
        console.log(data);
        people1.create(data);
        document.getElementById("table").style.visibility = "visible";
        document.getElementById("films").style.display = "none";
        document.getElementById("planets").style.display = "none";
        document.getElementById("species").style.display = "none";
        document.getElementById("starships").style.display = "none";
        document.getElementById("vehicles").style.display = "none";
    })
})
const planets1 = new Planets();
let planetsBtn = document.getElementById("planets");
planetsBtn.addEventListener("click", () => {
    planets1.getData("planets").then((data) => {
        console.log(data);
        planets1.create(data);
        document.getElementById("table").style.visibility = "visible";
        document.getElementById("films").style.display = "none";
        document.getElementById("people").style.display = "none";
        document.getElementById("species").style.display = "none";
        document.getElementById("starships").style.display = "none";
        document.getElementById("vehicles").style.display = "none";
    })
})
const species1 = new Species();
let speciesBtn = document.getElementById("species");
speciesBtn.addEventListener("click", () => {
    species1.getData("species").then((data) => {
        console.log(data);
        species1.create(data);
        document.getElementById("table").style.visibility = "visible";
        document.getElementById("films").style.display = "none";
        document.getElementById("people").style.display = "none";
        document.getElementById("planets").style.display = "none";
        document.getElementById("starships").style.display = "none";
        document.getElementById("vehicles").style.display = "none";
    })
})
const starships1 = new Starships();
let starshipsBtn = document.getElementById("starships");
starshipsBtn.addEventListener("click", () => {
    starships1.getData("starships").then((data) => {
        console.log(data);
        starships1.create(data);
        document.getElementById("table").style.visibility = "visible";
        document.getElementById("films").style.display = "none";
        document.getElementById("people").style.display = "none";
        document.getElementById("planets").style.display = "none";
        document.getElementById("species").style.display = "none";
        document.getElementById("vehicles").style.display = "none";
    })
})

const vehicles1 = new Vehicles();
let vehiclesBtn = document.getElementById("vehicles");
vehiclesBtn.addEventListener("click", () => {
    vehicles1.getData("vehicles").then((data) => {
        console.log(data);
        vehicles1.create(data);
        document.getElementById("table").style.visibility = "visible";
        document.getElementById("films").style.display = "none";
        document.getElementById("people").style.display = "none";
        document.getElementById("planets").style.display = "none";
        document.getElementById("species").style.display = "none";
        document.getElementById("starships").style.display = "none";

    })
})

let refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener('click', function refreshPage() {
    window.location.reload();

})





