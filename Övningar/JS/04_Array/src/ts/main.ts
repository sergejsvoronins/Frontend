let userInputEl : HTMLInputElement = document.getElementById("userInput") as HTMLInputElement;
let showBtn : HTMLButtonElement= document.getElementById("btn") as HTMLButtonElement;
let nameLenghtEl : HTMLParagraphElement = document.getElementById("nameLenght") as HTMLParagraphElement;

function userName() : void{
    //nameLenghtEl.innerHTML = "Du har " +userInputEl.value.length + " bostäver i ditt namn";
    for (let i = 0; i < userInputEl.value.length; i++) {
        //nameLenghtEl.innerHTML += "<h"+(i+1)+">" + userInputEl.value[i] + "</h"+(i+1)+">";
        if(i===0){
            nameLenghtEl.innerHTML +=userInputEl.value[i];
        }
        else{
            nameLenghtEl.innerHTML +=" " + userInputEl.value[i];
        } 
    }   
}

showBtn.addEventListener("click", userName);

let numbers: number [] = [0,1,2,3,4,5,6,7,8,9];
let sum : number = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Summan av talen är: " + sum);


let animalListEl : HTMLUListElement = document.getElementById("animalList") as HTMLUListElement;

let animals: string [] = ["Katt", "Hund", "Fisk", "Zebra"];



    for (let i = 0; i < animals.length; i++) {
        animalListEl.innerHTML += "<li>" + animals[i] + "</li>";
    };

 
//Fibonacci

let fibNumEl : HTMLInputElement  = document.getElementById("fibNum") as HTMLInputElement;
let fibBtnEl : HTMLButtonElement = document.getElementById("fibBtn") as HTMLButtonElement;
let fibRowEl : HTMLParagraphElement = document.getElementById("fibRow") as HTMLParagraphElement;

fibBtnEl.addEventListener("click", ()=>{
    
    let fib1 : number  = 1;
    let fib2 : number = 1;
    let userFibInput : number = parseInt(fibNumEl.value);
    let i : number =0;
    let fibSum : number = 0;
    let fibRow : number [] =[fib1, fib2];
    while (i<userFibInput-2){
        fibSum=fib1+fib2;
        fibRow.push(fibSum);
        fib1=fib2;
        fib2=fibSum;
        i++;
    }
    console.log("Fibonacci talfjöld är: "+fibRow);
    fibRowEl.innerHTML="Fibonacci talfjöld är: "+fibRow;
})

    //Pyramiden

    let pyrNumEl : HTMLInputElement = document.getElementById("pyrNum") as HTMLInputElement;
    let pyrBtnEl : HTMLButtonElement = document.getElementById("pyrBtn") as HTMLButtonElement;

    
    function myPyrFunction() : void{
        let userPyrInput : number = parseInt(pyrNumEl.value);
        let space : string = "";

        for (let i = 0; i < userPyrInput; i++) {
            space = " " + space
            
        }
        for (let i = 0; i < userPyrInput; i ++){
            let row : string = "";
            for (let a = 0; a < (2*i+1) ; a++){
            row +=i+1;
            }
            space = space.slice(0,-1);
            console.log(space + row);
        }
        space ="";
        for (let i = (userPyrInput-1); i > 0; i --){
            let row = "";
            for (let a = (2*i-1); a > 0 ; a--){
            row +=i;
            }
            space = " " + space;
            console.log(space + row);   
        }
    }
    pyrBtnEl.addEventListener("click", myPyrFunction);