import { Person } from "./models/person";

localStorage.setItem("name", "Sergejs");




// let pTagEl = document.getElementById("pTag");


// let mittNamn = localStorage.getItem("name");
// pTagEl.innerHTML = mittNamn;

// console.log(mittNamn);


let personsList : Person [] = [new Person("Sergejs", "38", "178", "74"), new Person("Nastja", "37", "169", "60")];
console.log(personsList);

localStorage.setItem("persons", JSON.stringify(personsList));



let persons : string | null = localStorage.getItem("persons");
if (persons!==null){
    let personsListfrLs : [] = JSON.parse(persons);

    console.log(personsListfrLs)
    let newpersList: Person [] = personsListfrLs.map((personsInfo:Person) =>{

        return new Person  (personsInfo.firstName, personsInfo.age, personsInfo.length, personsInfo.weight);
    })
    console.log(newpersList);
}








