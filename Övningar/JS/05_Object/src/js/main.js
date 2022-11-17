let inputName = document.getElementById("inputName");
let inputAge = document.getElementById("inputAge");
let inputLength = document.getElementById("inputLength");
let inputWeight = document.getElementById("inputWeight");
let saveBtn = document.getElementById("saveBtn");
let updateBtnEl = document.getElementById("updateBtn");

class Person {
    constructor(name,age,length,weight){
        this.name = name;
        this.age = age;
        this.length = length;
        this.weight = weight;
    }  
}

let container = document.getElementById("container");
container.className = "container";
me = new Person("Sigge", 38, 178, 74);

let personsList = [];

function newPerson(){
    let newPersName = inputName.value;
    let newPersAge = inputAge.value;
    let newPersLength = inputLength.value;
    let newPersWeight = inputWeight.value;
    let newPers = new Person(newPersName, newPersAge, newPersLength, newPersWeight);
    personsList.push(newPers);
}

function updatePersons (){
    for (i=0; i<personsList.length; i++){
        let personContainer = document.createElement("div");
        let headingName = document.createElement("h2");
        let pTagAge = document.createElement("p");
        let pTagLength = document.createElement("p");
        let pTagWeight = document.createElement("p");
    
    
        container.appendChild(personContainer);
        personContainer.appendChild(headingName);
        personContainer.appendChild(pTagAge);
        personContainer.appendChild(pTagLength);
        personContainer.appendChild(pTagWeight);
    


        personContainer.className = "container__persons";
        headingName.className = "container__persons__name";
        pTagAge.className = "container__persons__age";
        pTagLength.className = "container__persons__length";
        pTagWeight.className = "container__persons__weight";   
    
        headingName.innerHTML = "Namn: "+personsList[i].name;
        pTagAge.innerHTML = "Ålder: "+personsList[i].age+" år";
        pTagLength.innerHTML = "Längd: "+personsList[i].length+" cm";
        pTagWeight.innerHTML = "Vikt: "+personsList[i].weight+" kg";
    }

}

saveBtn.addEventListener("click", newPerson);

updateBtnEl.addEventListener("click", updatePersons);





