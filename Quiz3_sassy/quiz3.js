const openGiftImg = document.getElementById("openGift");
openGiftImg.hidden = true;

const closedGiftImg = document.getElementById("closedGift");
closedGiftImg.hidden = false;

// const updatedText = document.getElementById("updatedText");
// updatedText.hidden=true;

// const originalText = document.getElementById("originalText");
// originalText.hidden=false;

const updated = document.getElementById("updated");
const og = document.getElementById("original");

const display = document.getElementById("gift");
display.hidden = true;

const giftAmount = document.getElementById("amount");

og.hidden =false;

const btn = document.querySelector("#closedGift")
btn.addEventListener("click", updates);

function updates(){
    // updated.hidden = true;
    // og.hidden = false;


    openGiftImg.hidden = false;
    closedGiftImg.hidden = true;
    originalText.innerText = "Congratulations!";
    // updatedText.hidden = true;
    
    display.hidden = false;

    let random = Math.floor(Math.random() * 4); //returns a random number between 0-3


    const amounts = [5,25,50,100];
    let gift="";

        switch(random){
            case(0): (gift = 5)
                break;
            case 1: (gift = 25)
                break;
            case 2: (gift = 50)
                break;
            case 3: (gift = 100)
                break;
        }
        console.log(gift);
        amount.innerText = "$" + gift;

}

