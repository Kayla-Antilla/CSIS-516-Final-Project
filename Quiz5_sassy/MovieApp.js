const movieData = [
    { id:17, title:"Back to the Future", year:1989 },
    { id:651, title:"Sense and Sensibility", year:1995 },
    { id:1144, title:"Casablanca", year:1942 }
    ];

const container = document.querySelector(".container");
const table = document.createElement("table");
// let tableRow = document.createElement("tr")
// let tableHeader = document.createElement("th")
// let tableData = document.createElement("td")

let headerRow = document.createElement("tr");
let headers = ["ID", "Movie Name", "Year"];

headers.forEach(headerText => {
    let tableHeader = document.createElement("th");
    tableHeader.innerText = headerText;
    headerRow.appendChild(tableHeader);
})

table.appendChild(headerRow);

// container.appendChild(table)
// table.appendChild(tableRow)
// tableHeader.innerText="ID"
// tableRow.appendChild(tableHeader)
// tableHeader.innerText="Movie Name"
// tableRow.appendChild(tableHeader)
// tableHeader.innerText="Year"
// tableRow.appendChild(tableHeader)

// let curMovie.forEach(movieData)
// for(let curMovie of movieData){
    
// }

movieData.forEach(function(m){
    let tableRow = document.createElement("tr")

    let idData = document.createElement("td")
    idData.innerText = m.id;
    tableRow.appendChild(idData);

    let titleData = document.createElement("td")
    titleData.innerText = m.title;
    tableRow.appendChild(titleData);

    let yearData = document.createElement("td")
    yearData.innerText = m.year;
    tableRow.appendChild(yearData)

    let x = tableRow

    let buttonData = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", function(){
        x.remove();
    })
    buttonData.appendChild(button);
    tableRow.appendChild(buttonData)

    table.appendChild(tableRow);
    // tableData = m.title
    // tableRow.appendChild(tableData)
        // console.log(m.title + " by: " + m.year)
})

container.appendChild(table);