const url = "https://swapi.dev/api/people/";


let personName = document.getElementById("personName");
let personObj = {};
let personHeight = document.getElementById("height");
let personWeight = document.getElementById("mass");
let eyeColor = document.getElementById("eye");
let hairColor = document.getElementById("hair");
let select = document.getElementById("person");


document.getElementById("getData")
    .addEventListener('click', function () {

        let value = select.options[select.selectedIndex].value;


        fetch(url + value)
            .then(person => {
                person.json()
                    .then(parsedStudent => {
                        personObj = parsedStudent;
                        personName.innerText = personObj.name;
                        console.log(personObj);

                        personHeight.innerText = personObj.height;
                        personWeight.innerText = personObj.mass;
                        eyeColor.innerText = personObj.eye_color;
                        hairColor.innerText = personObj.hair_color




                    })
                    .catch(e => {
                        console.error(e);
                    })
            })
    })







let people = [];

function getAllPeople() {
    fetch(url)
        .then(people => {
            people.json()
                .then(parsedPeople => {
                    people = parsedPeople.results;

                    for (let i = 0; i < people.length; i++) {
                        const element = people[i];
                        let option = document.createElement("option");
                        option.value = i + 1;
                        option.textContent = element.name;
                        select.appendChild(option);
                    }
                })
                .catch(e => {
                    console.error(e);
                })
        })
}

getAllPeople();