console.log("Hey");

let emp1 = {
    name: "Scrooge",
    title: "CEO",
    salary: 1000
};

console.log(emp1);

let emp2 = {
    name: "Bob",
    title: "clerk",
    salary: 100
};

console.log(emp2);

console.log(emp1.salary);

console.log(emp1['name']);

const students = [
    {id: 2332, name:"John", gpa: 3.4},
    {id: 4334, name: "Jill", gpa: 3.6},
    {id: 1111, name: "Peter", gpa: 3.7}
]

for(let i = 0; i<students.length; i++){
    console.log(students[i].gpa);
    //console.log(students[i]["id"]);
}

let input = window.prompt("Enter a airport code:");

const AIRPORT_CODES = {
    'ATL': 'Atlanta, GA, USA',
    'ORD': 'Chicago, IL, USA',
    'LHR': 'London, England, United Kingdom',
    'HND': 'Tokyo, Japan',
    'LAX': 'Los Angeles, CA, USA',
    'CDG': 'Paris, France',
    'DFW': 'Dallas/Ft Worth, TX, USA',
    'FRA': 'Frankfurt, Germany',
    'PEK': 'Beijing, China'
}

console.log(AIRPORT_CODES[input]);

for(let key in AIRPORT_CODES){
    console.log(key,AIRPORT_CODES[key])
}