console.log("Hello!")

//get the text from the origin textbox
const origin = document.querySelector("#Start")
let text1 = origin.value

//get the text from the destination textbox
const destination = document.querySelector("#End")
let text2 = destination.value

//create the filler words when the origin textbox has no user text
const originField = document.querySelector("#Start")
originField.placeholder="Enter Start"

//create the filler words when the destination textbix has no user text
const DestinationField = document.querySelector("#End")
DestinationField.placeholder ="Enter End"

//create the event for when the go button is clicked
const goButton = document.querySelector("#go")
goButton.addEventListener("click",()=>{
    let startingPoint = origin.value
    let destinationPoint = destination.value
    
    //get the table from the html
    const table = document.querySelector("table")

    //create the origin and destination row elements
    const trOrigin = document.createElement("tr")
    const trDestination = document.createElement("tr")

    //create the origin and destination label data elements
    const tdOriginLabel = document.createElement("td")
    const tdDestinationLabel = document.createElement("td")

    //create the origin and destination value data elements
    const tdOrigin = document.createElement("td")
    const tdDestination = document.createElement("td")

    //assign class names for easier css styling
    tdOriginLabel.className = "label"
    tdDestinationLabel.className = "label"
    tdOrigin.className = "value"
    tdDestination.className = "value"

    //webAPI the first url to get the data for the origin
    const originalurl = 'https://api.tomtom.com/search/2/geocode/' + startingPoint + '.json?key=DhgtVFLccBV4ncfMIckGR1IMdqj6Cd1i'
    fetch(originalurl).then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            
            //get the origin info for the latitude, longitude, and the address 
            const sourceLatitude = data.results[0].position.lat
            const sourceLongitude = data.results[0].position.lon
            const address1 = data.results[0].address.freeformAddress
            console.log("Latitude of Origin: " + sourceLatitude)
            console.log("Longitude of Origin: " + sourceLongitude)
            console.log("FreeformAddress: " + address1)

            //assign the address to the corresponding table element and append it to the table
            tdOriginLabel.textContent = "Origin Address"
            tdOrigin.textContent= address1
            trOrigin.appendChild(tdOriginLabel)
            trOrigin.appendChild(tdOrigin)
            table.appendChild(trOrigin)

            //run the webAPI again for the destination address
            const destinationurl = 'https://api.tomtom.com/search/2/geocode/' + destinationPoint + '.json?key=DhgtVFLccBV4ncfMIckGR1IMdqj6Cd1i'
            return fetch(destinationurl)
                .then((response)=>response.json())
                .then((data)=>{
                console.log(data)

                //get the destination info for the latitude, longitude, and the address 
                const destinationLatitude=  data.results[0].position.lat
                const destinationLongitude = data.results[0].position.lon
                const address2 = data.results[0].address.freeformAddress
                console.log("Latitude of Destination: " + destinationLatitude)
                console.log("Longitude of Destination: " + destinationLongitude)
                console.log("FreeformAddress: " + address2)

                //assign the address to the corresponding table element and append it to the table
                tdDestinationLabel.textContent = "Destination Address"
                tdDestination.textContent = address2
                trDestination.appendChild(tdDestinationLabel)
                trDestination.appendChild(tdDestination)
                table.appendChild(trDestination)

            //call the distance function to calculate the distance and time from the other webAPI
            distance(sourceLatitude, sourceLongitude, destinationLatitude, destinationLongitude)
        })
})
.catch((error)=>console.log(error))
})

function distance(sourceLatitude, sourceLongitude, destinationLatitude, destinationLongitude){
    //webAPI the second url to get the data for the distance and time between the two locations
    const secondurl = 'https://api.tomtom.com/routing/1/calculateRoute/' + sourceLatitude + ',' + sourceLongitude + ':' + destinationLatitude + ',' + destinationLongitude + '/json?instructionsType=text&language=en-US&key=DhgtVFLccBV4ncfMIckGR1IMdqj6Cd1i'
    fetch(secondurl).then((response)=>response.json())
    .then((data)=>{
        //calculate and assign the distance
        const dist = (data.routes[0].legs[0].summary.lengthInMeters)/1609.344
        console.log("Distance: " + dist)

        //calculate the time and convert to hours, minutes, seconds and assign accordingly
        console.log("raw time " + data.routes[0].legs[0].summary.travelTimeInSeconds)
        const remainder = (data.routes[0].legs[0].summary.travelTimeInSeconds)/60
        const travelHours = Math.floor(((data.routes[0].legs[0].summary.travelTimeInSeconds)/60)/60)
        const travelMinutes = Math.floor((data.routes[0].legs[0].summary.travelTimeInSeconds)/60-(travelHours*60))
        const travelSeconds = Math.round(data.routes[0].legs[0].summary.travelTimeInSeconds - (((travelHours*60) + travelMinutes)*60))
        console.log("Travel hours: " + travelHours)
        console.log("Travel Minutes: " + travelMinutes)
        console.log("Travel Seconds: " + travelSeconds)

        //get the table from the html
        const table = document.querySelector("table")

        //create the distance and time row elements
        const trDistance = document.createElement("tr")
        const trTime = document.createElement("tr")

        //create the distance and time value data elements
        const tdDistance = document.createElement("td")
        const tdTime = document.createElement("td")

        //create the distnace and time label data elements
        const tdDistanceLabel = document.createElement("td")
        const tdTimeLabel = document.createElement("td")

        //assign class names for easier css styling
        tdDistanceLabel.className = "label"
        tdTimeLabel.className = "label"
        tdDistance.className = "value"
        tdTime.className = "value"

        //assign the distance to the corresponding table element with 2 decimal places and append it to the table
        tdDistance.textContent = dist.toFixed(2) + " miles"
        tdDistanceLabel.textContent = "Total Distance"
        trDistance.appendChild(tdDistanceLabel)
        trDistance.appendChild(tdDistance)
        table.appendChild(trDistance)

        //assign the time to the corresponding table element with hours, minutes, and seconds and append it to the table
        tdTime.textContent = travelHours + " Hours " + travelMinutes + " Minutes " + travelSeconds + " Seconds"
        tdTimeLabel.textContent = "Total Time"
        trTime.appendChild(tdTimeLabel)
        trTime.appendChild(tdTime)
        table.appendChild(trTime)
    })
    .catch((error)=>console.log(error))
    }

//create event for when the reset button is clicked
const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click",()=>{

    //get the table and origin/destination values from the html
    const table = document.querySelector("table")
    const origin = document.querySelector("#Start")
    console.log("reset button was clicked")

    //clear the values for the textboxes and the table elements
    origin.value=""
    destination.value=""
    table.textContent = ""
})