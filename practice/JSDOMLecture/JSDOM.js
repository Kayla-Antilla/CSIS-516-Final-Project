console.log("Hello World!")

console.log(document.URL)
console.log(document["inputEncoding"])

let x = document.getElementById("heading1")
console.log(x)

let y = document.getElementsByClassName("para")
console.log(y)

let z = document.getElementsByTagName("a")
console.log(z)

let o = document.querySelectorAll(".para")
console.log(o)

const heading1 = document.querySelector('h1')
console.log(heading1)
console.log(heading1.id)
console.log(heading1.className)
console.log(heading1.classList)
console.log(heading1.innerHTML)
console.log(heading1.style)
console.log(heading1.tagName)
heading1.classList.add("h1new")
console.log(heading1.classList)
heading1.classList.remove("h1new")
console.log(heading1.classList)
heading1.classList.toggle("h1new")
console.log(heading1.classList)

const div1 = document.querySelector("div")
console.log(div1.innerHTML)
console.log(div1.innerText)
console.log(div1.children)
console.log(div1.children[0])
console.log(div1.firstElementChild)
console.log(div1.lastElementChild)
console.log(div1.previousElementSibling)
console.log(div1.nextElementSibling)
console.log(div1.parentElement)

const p2 = document.querySelector("div p")
console.log(p2)
p2.innerText = "This is a blog post created by John Smith"
// p2.innerHTML = "This is a blog post created by <i>John Smith</i>"
console.log(p2.textContent)

const head3 = document.createElement('h3')
const text = document.createTextNode("This header was created using JS")
head3.appendChild(text)
// head3.innerText = "This header was created using JS"
div1.appendChild(head3)
console.log(div1)

const b = document.querySelector("#mtns")
console.log(b.tagName)

// function sayHello(){
//     console.log("Hello World")
// }

// const btn = document.querySelector("button")
// btn.addEventListener("click", sayHello)

// function changeColor(){
//     const link = document.querySelector("#homeLink")
//     link.style.background = "yellow"
// }

// const link = document.querySelector("#homeLink")
// link.addEventListener("click", changeColor)

const btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    console.log("Button was clicked!")
})

const btnList = document.querySelectorAll(".item button")
console.log(btnList)

for (let btn of btnList){
    btn.addEventListener("click", function(){
        btn.innerText = "Added!"
    })
}

const btnRegister = document.querySelector("#btnRegister")
btnRegister.addEventListener("click", function(){
    const txt = document.querySelector("#txtName")
    alert("Hello " + txt.value)
})
