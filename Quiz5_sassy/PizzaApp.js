let cost = document.querySelector("#cost")
let total = 0;

let checkboxes = document.querySelectorAll(".topping")

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change",function(){
        if (this.checked){
            total+=1;
        }
        else{
            total-=1;
        }
        cost.innerText= "Additional Cost: $" + total;
    })
})

const sizes = document.querySelectorAll("input[type=radio]")
const crustList = document.querySelector(".crustOptions")

for(let size of sizes){
    size.addEventListener("change", populateCrustList)
}

function populateCrustList(e){
    const smallCrusts = ["Hand Tossed", "Gluten Free"]
    const medCrusts = ["Hand Tossed", "Crunchy Thin", "Pan"]
    const lgCrusts = ["Hand Tossed", "Crunchy Thin", "Brooklyn Style"]
    
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
