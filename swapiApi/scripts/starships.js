import GetData from "./helpers/getData.js";

export default class Starships extends GetData{
    constructor(){
        super();
        
    }
    create(data) {
        let tbl = document.getElementsByTagName("table")[0];

        tbl.innerHTML="";
        let tblBody = document.createElement("tbody");

        
        for (let j = 0; j < data.results.length; j++) {

            let rowData = data.results[j];

            let row = document.createElement("tr");

            

                let cell = document.createElement("td");
                let cellText = document.createTextNode(rowData.name);

                let cell2 = document.createElement("td");
                let cell2Text = document.createTextNode(rowData.model);

                let cell3 = document.createElement("td");
                let cell3Text = document.createTextNode(rowData.manufacturer);

                let cell4 = document.createElement("td");
                let cell4Text = document.createTextNode(rowData.cost_in_credits);

                let cell5 = document.createElement("td");
                let cell5Text = document.createTextNode(rowData.max_atmosphering_speed);

                cell.appendChild(cellText);
                row.appendChild(cell);

                cell2.appendChild(cell2Text);
                row.appendChild(cell2);

                cell3.appendChild(cell3Text);
                row.appendChild(cell3);

                cell4.appendChild(cell4Text);
                row.appendChild(cell4);

                cell5.appendChild(cell5Text);
                row.appendChild(cell5);

            tblBody.appendChild(row);
        }


        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "1");

    }
}