console.log("Addition Program:");

// let x = window.prompt("Enter a value for x");
// let y = window.prompt("Enter a value for y");

// x = parseInt(x);
// y = parseInt(y);

// let z = x + y;

// window.alert("The sum of " + x + " and " + y + " is: " + z);


// let num = window.prompt("Enter a number");

// if(num%2===0){
// console.log("The number " + num + " is a even number");
// }
// else{
// console.log("The number " + num + " is a odd number");
// }

// let a = window.prompt("Enter a number(1-7)");

// a = parseInt(a);

// switch (a){
// case 1: console.log("Monday");
// break;
// case 2: console.log("Tuesday");
// break;
// case 3: console.log("Wednesday");
// break;
// case 4: console.log("Thursday");
// break;
// case 5: console.log("Friday");
// break;
// case 6: console.log("Saturday");
// break;
// case 7: console.log("Sunday");
// break;
// default: console.log("Invalid input");
// break;
// }

// let day = window.prompt("Enter a day");

// switch(day){
//     case ("Monday"): console.log(day + " is a weekday");
//     break;
//     case ("Tuseday"): console.log(day + " is a weekday");
//     break;
//     case ("Wednesday"): console.log(day + " is a weekday");
//     break;
//     case ("Thursday"): console.log(day + " is a weekday");
//     break;
//     case ("Friday"): console.log(day + " is a weekday");
//     break;
//     case("Saturday"): console.log(day + " is a weekend");
//     break;
//     case("Sunday"): console.log(day + " is a weekend");
//     break;
//     default: console.log("Invalid input");
//     break;
// }

// let num = window.prompt("Enter a number");

// let sum = 1;

// for(let i=1; i<= num; i++){
//     sum = sum * i;
// }

// console.log(sum);


// let a = "hello";
// let b = "world";

// console.log(a+b);
// console.log(a);
// console.log(b);

// let c = "hey girl hey!"

// let d = "alpha"
// let e = "bravo";

// console.log(c);
// console.log(c.substring(4,8));
// console.log(d<e);

// console.log(c.indexOf("y"));

// d = d.toUpperCase();
// console.log(d);



//my way
let word = "stressed";
let newWord = "";

for (let i = word.length; i>=0;i--){
    newWord= newWord + word.charAt(i);
}

//professor's way
console.log(newWord);

let word2 = "desserts";
let rev = "";

for(let i = word.length-1; i>=0;i--){
    rev+=word[i];
}

console.log(rev);

console.log("Goodbye!");