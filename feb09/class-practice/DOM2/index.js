console.log("Script start");

let tableContent = `  <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td id="markCell">Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>The Bird</td>
                            <td>@lol+loser</td>
                        </tr>
                    </tbody>`

function deleteTable() {
    const table = document.getElementById("table-data")
    if (table) {
        table.innerHTML = ""
    }
}

function loadTable() {
    const table = document.getElementById("table-data")
    if (table) {
        table.innerHTML = tableContent
    }
}

function add3Rows(){
    const table = document.getElementById("table-data")
    if (table){
        const tbody = table.querySelector("tbody");
            if (tbody) {
                const currentRowCount = tbody.rows.length;
                tbody.innerHTML += `
                    <tr>
                        <th scope="row">${currentRowCount + 1}</th>
                        <td id="markCell">Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">${currentRowCount + 2}</th>
                        <td id="markCell">Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">${currentRowCount + 3}</th>
                        <td id="markCell">Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                `;
            }
    }
}

function clearTable() {
    document.getElementById("table-cars-headers").innerHTML = ""
}

// fill table
function loadTable() {
    clearTable()
    const firstElement = carsForRental[0]
    const fields = Object.keys(firstElement)
    console.log(firstElement)
    console.log(fields)
    const theadTr = document.getElementById("table-cars-headers")
    if (theadTr) {
        for (let index = 0; index < fields.length; index++) {
            const th = document.createElement("th")
            th.innerText = fields[index].replaceAll("_", " ")
            theadTr.append(th)
        }
    }
    const tBody = document.getElementById("table-cars-body")
    if (tBody) {
        for (let index = 0; index < carsForRental.length; index++) {
            const currentCar = carsForRental[index];
            const tr = document.createElement("tr")

            const tdName = document.createElement("td")
            tdName.innerText = currentCar.Name

// unfinished
            

            tr.append(tdName, tdMPG, tdCyl, toDis)
            tBody.append(tr)
        }
    }

}






console.log("Script end")