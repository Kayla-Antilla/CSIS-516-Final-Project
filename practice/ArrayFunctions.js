const paintings = [
    {title: "The Girl with a Pearl Earring", artist: "Vermeer", year: 1872},
    {title: "Artists Holding a Thistle", artist: "Durer", year: 1990},
    {title: "Wheatfield with Crows", artist: "Van Gogh", year: 1912},
    {title: "Burial at Ornans", artist: "Courbet", year: 1801},
    {title: "Sunflower", artist: "Van Gogh", year: 1989}
]

// //Example of a forEach function in an array
// paintings.forEach(function(p){
//     console.log(p.title + " by: " + p.artist)
// })

// //Example of a find function in an array
// // let foundPainting = paintings.find(function(p){
// //     return p.artist === "Van Gogh"
// // })

// // console.log(foundPainting)

// //Example of a filter function in an array
// let results = paintings.filter(p=>{
//     return p.artist === "Van Gogh"
// })

// console.log(results)

// //Example of a map function in an array
// let upperResults = paintings.map(p=>{
//     return p.artist.toUpperCase()
// })

// console.log(upperResults)

// //another mapping example
// const numbers = [1,2,3,4]

// let numarr = numbers.map(n=>{
//     return n*n
// })

// console.log(numarr)

// //example of mapping where the resul is printed on the website
const container = document.querySelector("#container")
// let upperTitle = paintings.map(p=>{
//     let value = p.artist.toUpperCase()
//     const h2 = document.createElement("h2")
//     h2.innerText = value
//     return h2
// })

// upperTitle.forEach(h=>{
//     container.appendChild(h)
// })

// //example of the sort function using an array of numbers
// let arr1 = [5,2,1,8]
// console.log(arr1)
// console.log(arr1.sort())
// console.log(arr1)

// //example of the sort function using an array of strings
// let arr2 = ["Bob", "Alice", "Jane", "Peter"]
// console.log(arr2)
// console.log(arr2.sort())
// console.log(arr2)

// //example of the sort function using an array of objects
// console.log(paintings)

// console.log(paintings.sort(function(a,b){
//     if(a.year===b.year)
//         return 0
//     if(a.year<b.year)
//         return -1
//     if(a.year>b.year)
//         return 1
// }))

// console.log(paintings)

const btnClick = document.querySelector("#btnClick")
btnClick.addEventListener("click", ()=>{
    console.log("Button was clicked!")
})

const btnRequest = document.querySelector("#btnRequest")
btnRequest.addEventListener("click", ()=>{
    // console.log("This is printed first")
    // setTimeout(function(){
    //     console.log("Hello World!")
    //     console.log("This is printed last")
    // },5000)

    // fetch("https://icanhazdadjoke.com/slack").then((response)=>response.json())
    // .then((data)=>{console.log(data.attachments[0].text)})
    // .catch((error)=>console.log(error))

    fetch("https://icanhazdadjoke.com/slack").then((response)=>response.json())
    .then((data)=>{
        const joke = document.createElement("p")
        joke.innerText = data.attachments[0].text
        container.appendChild(joke)
    })
    .catch((error)=>console.log(error))
})

