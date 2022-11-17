let inputName : HTMLInputElement = document.getElementById("inputName") as HTMLInputElement;
let inputAge : HTMLInputElement = document.getElementById("inputAge") as HTMLInputElement;
let inputLength : HTMLInputElement = document.getElementById("inputLength") as HTMLInputElement;
let inputWeight : HTMLInputElement = document.getElementById("inputWeight") as HTMLInputElement;
let saveBtn : HTMLButtonElement = document.getElementById("saveBtn") as HTMLButtonElement;
let updateBtnEl : HTMLButtonElement = document.getElementById("updateBtn") as HTMLButtonElement;

class Person {
    constructor(public name: string, public age: string, public length: string, public weight:string){
    }  
}

let container : HTMLDivElement = document.getElementById("container") as HTMLDivElement;
container.className = "container";
let me : Person = new Person("Sigge", "38", "178", "74");

let personsList : Person [] = [];

function newPerson() : void {
    let newPersName = inputName.value;
    let newPersAge = inputAge.value;
    let newPersLength = inputLength.value;
    let newPersWeight = inputWeight.value;
    let newPers : Person = new Person(newPersName, newPersAge, newPersLength, newPersWeight);
    personsList.push(newPers);
}

function updatePersons () : void { 
    container.innerHTML = "";
    for (let i=0; i<personsList.length; i++){
        
        let personContainer : HTMLDivElement = document.createElement("div") as HTMLDivElement;
        let headingName : HTMLHeadingElement = document.createElement("h2") as HTMLHeadingElement;
        let pTagAge : HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        let pTagLength : HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        let pTagWeight : HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
    
    
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





