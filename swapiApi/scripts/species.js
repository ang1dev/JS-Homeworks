import GetData from "./helpers/getData.js";

export default class Species extends GetData{
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
                let cell2Text = document.createTextNode(rowData.classification);

                let cell3 = document.createElement("td");
                let cell3Text = document.createTextNode(rowData.average_height);

                let cell4 = document.createElement("td");
                let cell4Text = document.createTextNode(rowData.skin_colors);

                cell.appendChild(cellText);
                row.appendChild(cell);

                cell2.appendChild(cell2Text);
                row.appendChild(cell2);

                cell3.appendChild(cell3Text);
                row.appendChild(cell3);

                cell4.appendChild(cell4Text);
                row.appendChild(cell4);

            tblBody.appendChild(row);
        }


        tbl.appendChild(tblBody);

    
        tbl.setAttribute("border", "1");

    }
}