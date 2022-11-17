import {Person} from "./modules/person"

localStorage.setItem("name", "Sergejs");




// let pTagEl = document.getElementById("pTag");


// let mittNamn = localStorage.getItem("name");
// pTagEl.innerHTML = mittNamn;

// console.log(mittNamn);


let personsList = [new Person("Sergejs", 38, 178, 74), new Person("Nastja", 37, 169, 60)];
console.log(personsList);

localStorage.setItem("persons", JSON.stringify(personsList));



let persons = localStorage.getItem("persons");
let personsListfrLs = JSON.parse(persons);
console.log(personsListfrLs)


let newpersList = personsListfrLs.map((persons)=>{
    return new Person(persons.name, persons.age, persons.length, persons.weight);
})

console.log(newpersList);
