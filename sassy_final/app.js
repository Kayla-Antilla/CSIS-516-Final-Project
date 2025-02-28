const tasks=[]

const addTaskButton = document.querySelector("#add")
addTaskButton.addEventListener("click", display)

function display(){
    const text = document.querySelector("#entry")
    console.log (text.value)
    const completion = false
    let task = {id: Math.floor(Math.random()*100), description: text.value, completed: completion}
    tasks.push(task);
    console.log(tasks)

    text.value = ""

    const item = document.createElement("li")
    item.innerText = task.description 

    const list = document.querySelector("ul")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = "check"
    const removeButton = document.createElement("button")
    removeButton.id = "remove"
    removeButton.innerText = "X"

    item.appendChild(checkbox)
    item.appendChild(removeButton)
    list.appendChild(item)

    checkbox.addEventListener("change", function(e){
        if (checkbox = this.checked)
            
        item.toggle()
    })

    removeButton.addEventListener("click", function(e){
        console.log(e.currentTarget)
    // const taskId = (item.id)
    // const taskIndex = tasks.findIndex(function(){
    //     if (tasks.id === taskId)
    //         removeObject()
    // })

    // function removeObject(){
    //     if (taskIndex > -1)
    //         tasks.splice(taskIndex,1)
    // }
    
    item.remove()
    console.log(tasks)
    })
}

