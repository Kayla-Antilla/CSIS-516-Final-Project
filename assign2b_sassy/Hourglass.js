let outer_material = window.prompt("Enter outer material:");

let inner_material = window.prompt("Enter inner material:");

let t = 12;

while(true){
    if(t!=-1){
            let n =14

        for(let i=0;i<n;i++){
            let line=""
            
            for(let j=0;j<i;j++){
                line+=" "
            }
            
            for(let k=0;k<n-i+1;k++){
                if(k===0 || k===n-i){
                line += outer_material + " " 
                }
                else{
                    if(i===0){
                        line+= outer_material + " "  
                    }
                    else if(i<t+1){
                            line+= inner_material + " ";   
                    }
                    else{
                        line+="  ";
                    }
                }
            }
            console.log(line)
        }

        let m = 14

        for(let i=1;i<=m;i++){
            let line=""

            for(let j=0;j<m-i;j++){
                line+=" "
            }
            
            for(let k=0;k<=i;k++){
                if(k===0 || k===i){
                    line += outer_material + " "; 
                }
                else{
                    if(i===m){
                        line+= outer_material + " ";
                    }
                    else if(i>t+1){
                        //if(k>t){
                        line+= inner_material + " ";   
                    }
                    else{
                        //if (k<=t){
                        line+="  ";
                    }
                    
                }
            }
            console.log(line) 
        }

    input = window.prompt("Enter either next, prev, nexxus, or quit");
        if(input === "next"){
            if(t===0){
                t=12;
            }
            else{
                t-=1;   
            }

        }
        else if(input === "prev"){
            if(t===12){
                t=0;
            }
            else{
                t+=1;
            }
        }
        else if(input === "nexxus"){
            t=12;
        }
        else if(input === "quit"){
            t=-1;
        }
    }
    else if(t=-1) {
        break;
    }
}
