console.log("HOURGLASS 2")

//read in the outer and inner elements to create the hourglass at t = 12
let time = 0; 

// hourglass(outer, inside, time);

//function to create the hourglass
function hourglass(outer, inside, time){
    const displaying = document.getElementById('container')
    displaying.innerText = "";

    //upper portion of the hourglass
    let n =14;

    for(let i=0;i<n;i++){
        let line=""
        
        for(let j=0;j<i;j++){
            line+=""
        }
        
        for(let k=0;k<n-i+1;k++){
            if(k===0 || k===n-i){
            line += outer + "\xa0" 
            }
            else{
                if(i===0){
                    line+= outer + "\xa0"  
                }
                else if(i>time){
                        line+= inside + "\xa0";   
                }
                else{
                    line+="\xa0 ";
                }
            }
        }
        let lineElement = document.createElement('p');
        lineElement.textContent = line;
        displaying.appendChild(lineElement);
    }

    //lower portion of the hourglass
    let m = 14

        for(let i=1;i<=m;i++){
            let line=""

            for(let j=0;j<m-i;j++){
                line+=""
            }
            
            for(let k=0;k<=i;k++){
                if(k===0 || k===i){
                    line += outer + "\xa0"; 
                }
                else{
                    if(i===m){
                        line+= outer + "\xa0";
                    }
                    else if(i>=m-time){
                        // if(k>t){
                        line+= inside + "\xa0";   
                    }
                    else{
                        //if (k<=t){
                        line+="\xa0 ";
                    }
                    
                }
            }
            let lineElement = document.createElement('p');
            lineElement.textContent = line;
            displaying.appendChild(lineElement);
            // console.log(line) 
        }
}

//button click event for display button
let displayHourglass = document.getElementById("displayButton")
displayHourglass.addEventListener("click", display);
// display.onclick = display();

// function to display the hourglass once the button is clicked
function display(){
    let outer = document.getElementById("border").value;
    let inside = document.getElementById("inner").value;
    hourglass(outer, inside, time);
}

//button click event for next button
let nextTime = document.getElementById("nextButton");
nextTime.addEventListener("click", next);

//function to go to the next time (t++)
function next(){
    if(time===12){
        time=0;
    }
    else{
        time++;
    }
    console.log(time);
    //hourglass(outer, inside, time);
    display();
}

//button click event for previous button
let prevTime = document.getElementById("previousButton")
prevTime.addEventListener("click", prev);

//function to go to the previous time (t--)
function prev(){
    if(time===0){
        time=12;
    }
    else{
        time--;
    }
    console.log(time);
    //hourglass(outer, inside, time);
    display();
}

//button click event for nexus event button
let nexusTime = document.getElementById("nexusButton")
nexusTime.addEventListener("click", nexus);

//nexus event to reset the time 
function nexus(){
    time = 0;
    console.log(time);
    //hourglass(outer, inside, time);
    display();
}

