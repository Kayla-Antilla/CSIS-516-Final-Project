console.log("Hello World!")

const COIN_VALUES = [1,5,10,25,50,100];

console.log(COIN_VALUES);

for (let i = 0; i<COIN_VALUES.length; i++){
    console.log("The value at index " + i + " is " + COIN_VALUES[i]);
}

const COIN_NAMES = ["penny", "nickel", "dime", "quarter", "half-dollar", "dollar"];

let change = window.prompt("Enter the change amount in cents:");

//change = change*100;

for (let i = COIN_VALUES.length-1; i>=0; i--){
    let how_many = Math.floor(change/COIN_VALUES[i]);
    console.log(how_many + " " + COIN_NAMES[i])
    change = change % COIN_VALUES[i]
}


    // if (change>=100){
    //     let numberOfDollars = parseInt(change/100);
    //     change = change%100;
    //     console.log("The  number of dollars:" + numberOfDollars);
    // }
    // if (change>=50){
    //     let numberOfHalfDollars = parseInt(change/50);
    //     change = change%50;
    //     console.log("The  number of half-dollars:" + numberOfHalfDollars);
    // }
    // if (change>=25){
    //     let numberOfQuarters = parseInt(change/25);
    //     change = change%25;
    //     console.log("The  number of quarters:" + numberOfQuarters);
    // }
    // if (change>=10){
    //     let numberOfDimes = parseInt(change/10);
    //     change = change%10;
    //     console.log("The  number of dimes:" + numberOfDimes);
    // }
    // if (change>=5){
    //     let numberOfNickels = parseInt(change/5);
    //     change = change%5;
    //     console.log("The  number of nickels:" + numberOfNickels);
    // }
    // if(change>1){
    // let numberOfPennies = change;
    // console.log("The  number of pennies:" + numberOfPennies);
    // }


const array=[100,200,300];
array.push(400);
console.log(array);

const arr=[]

for (let i = 0; i<10; i++){
    arr.push(i)
}

console.log(arr);

let last_num = arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(100, 200, 300);
console.log(arr);

let arr2 = arr.slice(5,8);
console.log(arr2);

arr.splice(3,5);
console.log(arr);

const arr3 = ["a","b","c"];
const arr4 = ["1","2","3"];

const arr5 = arr3.concat(arr4);
console.log(arr5);

console.log(arr3.indexOf("c"));
console.log(arr3.indexOf("d"));

arr3.push("c");
console.log(arr3);
console.log(arr3.indexOf("c"));
console.log(arr3.lastIndexOf("c"));

arr3.sort();
console.log(arr3);

arr3.reverse();
console.log(arr3);