export default class GetData {
    constructor() {
        this.results = [];
    }


    getData(input) {
        return new Promise((resolve, reject) => {

            fetch("https://swapi.dev/api/" + input)
                .then((data) => {
                    data.json().then((parsedData) => {
                        resolve(parsedData)
                    })
                })
                .catch((e) => {                    
                    console.error(e);
                })
        })
    }
}