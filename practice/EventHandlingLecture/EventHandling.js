function sayHello(e){
    console.log("Hello World!")
    // console.log(e.target)

    //uses the e.target to determine which button was clicked
    const clickedButton = e.target
    if(clickedButton.innerText==="Button 1")
        console.log("1 was clicked")
    else if(clickedButton.id === "btn2")
        console.log("2 was clicked")
}

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")

btn1.addEventListener("click", sayHello)
btn2.addEventListener("click", sayHello)

// function sayHello(){
    // // This is how you access any element in the DOM
        // const h1 = document.querySelector("h1")

    // //This is how you modify a element in the DOM
        // h1.innerText = "Hello JavaScript"
        // console.log(h1.innerText)

    // //This is how you create an element in the DOM
        // const para = document.createElement("p")
        // para.innerText = "this paragraph was created in JS"
        // const body = document.querySelector("body")
        // body.appendChild(para)

    // //This is how you remove an element in the DOM
        // const p = document.querySelector("p")
        // p.remove()
// }

//creates an event listener for the h1 element
const title = document.querySelector("h1")
title.addEventListener("click",titlebutton)

//uses the e object to change the bakground color of the h1
function titlebutton(e){
    console.log("h1 was clicked!")
    title.style.backgroundColor="pink"
    console.log(e)
}

// //Click the list to make the items turn orange
// const listItems = document.querySelectorAll("li")

// for (let item of listItems){
//     item.addEventListener("click",setBackground)
// }

// function setBackground(e){
//     for (let item of listItems){
//         item.style.backgroundColor="white"
//     }
//     e.target.style.backgroundColor = "orange"
// }

//Propagation example (bubbling)
const btnchild=document.querySelector("#btn-child")
btnchild.addEventListener("click", function(e){
    console.log("button was clicked:" ,e.currentTarget)
    alert("The button was clicked")
    e.stopPropagation()
// },true)
})

const parentconatiner = document.querySelector(".parent")
parentconatiner.addEventListener("click", function(e){
    console.log("parent div was clicked",e.currentTarget)
    alert("The parent container was clicked")
// },true)
})

const grandparent = document.querySelector(".grandparent")
grandparent.addEventListener("click", function(e){
    console.log("grandparent div was clicked!",e.currentTarget)
    alert("The Grandparent container was clicked")
    e.stopPropagation()
// },true)
})

//by adding the ,true before the parenthese it changes the order that the alerts are told to the user. This makes it capture not bubbling 
//It starts with the grandparent, then the parent, then the button
//the default without it is button, then parent, then grandparent

//Event delegation example
const list = document.querySelector("#menu")
list.addEventListener("click", setBackground)

function setBackground(e){
    // console.log("A li element was clicked", e.target)
    const listItems = document.querySelectorAll("li")
    console.log(e.target.nodeName)
    for (let items of listItems){
        items.style.backgroundColor="white"
    }
    e.target.style.backgroundColor="orange"
}

//This is an example of a double click mouse event
const para = document.querySelector("#p1")
para.addEventListener("dblclick", function(){
    console.log("This is an example of a double click event.")
})


// //This is an example of a mouseover mouse event
// const para = document.querySelector("#p1")
// para.addEventListener("mouseover", function(){
//     para.style.backgroundColor="pink"
// })