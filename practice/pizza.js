console.log("Pizza!!")

const nameField = document.querySelector("#txtName")
nameField.addEventListener("focus", function(){
    console.log("Text field is in focus");
    nameField.style.backgroundColor = "lightyellow"
})

nameField.addEventListener("blur", function(){
    console.log("Text field lost focus")
    nameField.style.backgroundColor = "white"
})

//This is an example of how to use a form change event using radio buttons
const sizes = document.querySelectorAll("input[type=radio]")
const crustList = document.querySelector(".crust")

for(let size of sizes){
    size.addEventListener("change", populateCrustList)
}

function populateCrustList(e){
    const smallCrusts = ["Hand Tossed", "CrunchyThin"]
    const medCrusts = ["CrunchyThin", "Handmade Pan", "Brooklyn Style"]
    const lgCrusts = ["Brooklyn Style", "Chicago Style"]
    
    console.log(e.target.value)
    crustList.length=0

    let arr=[]
    if(e.target.value === "Small")
        arr =smallCrusts
    else if(e.target.value === "Medium")
        arr=medCrusts
    else
        arr=lgCrusts

    for (let item of arr){
        const option = document.createElement("option")
        option.value = item
        option.innerText = item
        crustList.appendChild(option)
    }
}