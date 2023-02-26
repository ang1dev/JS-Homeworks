import GetData from "./helpers/getData.js";

export default class Films extends GetData {

    constructor() {
        super()

    }

    create(data) {


        let tbl = document.getElementsByTagName('table')[0];
        tbl.innerHTML = "";

        let tblBody = document.createElement("tbody");


       let row = document.createElement("tr");
       let cell = document.createElement("td");
       let cell1 = document.createElement("td");
       let cellText = document.createTextNode("Name")
       let cellText1 = document.createTextNode("Opening craw")
       cell.appendChild(cellText);
       cell1.appendChild(cellText1);
       row.appendChild(cell);
       row.appendChild(cell1);
       tblBody.appendChild(row);


        for (let j = 0; j < data.results.length; j++) {

            let rowData = data.results[j];

            let row = document.createElement("tr");

            let cell = document.createElement("td");
            let cellText = document.createTextNode(rowData.title);

            let cell2 = document.createElement("td");
            let cell2Text = document.createTextNode(rowData.opening_crawl);
      
            cell.appendChild(cellText);
            row.appendChild(cell);

            cell2.appendChild(cell2Text);
            row.appendChild(cell2);

            tblBody.appendChild(row);
        }


        tbl.appendChild(tblBody);


        tbl.setAttribute("border", "1");

    }

}