let userInputEl = document.getElementById("userInput");
let showBtn = document.getElementById("btn");
let nameLenghtEl = document.getElementById("nameLenght");

function userName(){
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

let numbers = [0,1,2,3,4,5,6,7,8,9];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Summan av talen är: " + sum);


let animalListEl = document.getElementById("animalList");

let animals = ["Katt", "Hund", "Fisk", "Zebra"];



    for (let i = 0; i < animals.length; i++) {
        animalListEl.innerHTML += "<li>" + animals[i] + "</li>";
    };

 
//Fibonacci

let fibNumEl = document.getElementById("fibNum");
let fibBtnEl = document.getElementById("fibBtn");
let fibRowEl = document.getElementById("fibRow");

fibBtnEl.addEventListener("click", ()=>{
    
    let fib1 = 1;
    let fib2 = 1;
    let userFibInput = parseInt(fibNumEl.value);
    let i=0;
    let fibSum = 0;
    let fibRow =[fib1, fib2];
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

    let pyrNumEl = document.getElementById("pyrNum");
    let pyrBtnEl = document.getElementById("pyrBtn");

    
    function myPyrFunction(){
        let userPyrInput = parseInt(pyrNumEl.value);
        let space = "";

        for (let i = 0; i < userPyrInput; i++) {
            space = " " + space
            
        }
        for (let i = 0; i < userPyrInput; i ++){
            let row = "";
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