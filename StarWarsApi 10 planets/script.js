const url = "https://swapi.dev/api/planets/?page=1";
const url2 = "https://swapi.dev/api/planets/?page=2";


planet = [];
let table = document.getElementById("planetTable").getElementsByTagName("tbody")[0];



document.getElementById("previous")
    .addEventListener("click", function () {


        getInfoPlanet(url);
        $("#previous").hide();
        $("#next").show();
       

    });

document.getElementById("next")
    .addEventListener("click", function () {


        getInfoPlanet(url2);
        $("#next").hide();
        $("#previous").show();
        


});



function getInfoPlanet(url) {
    planet = [];
    table.innerHTML = "";
    $("#previous").hide();

    fetch(url)
        .then(planet => {
            planet.json()
                .then(parsedPlanet => {
                    planet = parsedPlanet;
                    console.log(planet);

                    for (let i = 0; i < planet.results.length; i++) {
                        const element = planet.results[i];
                        let row = table.insertRow(i);
                        let cell1 = row.insertCell(0);
                        let cell2 = row.insertCell(1);
                        let cell3 = row.insertCell(2);
                        let cell4 = row.insertCell(3);
                        cell1.innerHTML = element.name;
                        cell2.innerHTML = element.population;
                        cell3.innerHTML = element.climate;
                        cell4.innerHTML = element.gravity;


                    }



                })

        })

}

getInfoPlanet(url);

