import GetData from "./helpers/getData.js";

export default class Planets extends GetData {
    constructor() {
        super();

    }
    create(data) {

        let tbl = document.getElementsByTagName('table')[0];

        tbl.innerHTML = "";

        let tblBody = document.createElement("tbody");

        for (let j = 0; j < data.results.length; j++) {

            let rowData = data.results[j];

            let row = document.createElement("tr");



            let cell = document.createElement("td");
            let cellText = document.createTextNode(rowData.name);

            let cell2 = document.createElement("td");
            let cell2Text = document.createTextNode(rowData.climate);

            let cell3 = document.createElement("td");
            let cell3Text = document.createTextNode(rowData.gravity);

            cell.appendChild(cellText);
            row.appendChild(cell);

            cell2.appendChild(cell2Text);
            row.appendChild(cell2);

            cell3.appendChild(cell3Text);
            row.appendChild(cell3);

            tblBody.appendChild(row);
        }


        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "1");

    }
}