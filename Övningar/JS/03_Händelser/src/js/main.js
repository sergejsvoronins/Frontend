window.onload = function(){
    console.log("Hej Sigge");
} 

const btnEl = document.getElementById("btn");
const scoreEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
score = 0;

btnEl.addEventListener("click", function(){
    score++;
    updateLocalStorage();
    scoreEl.innerHTML=score;
})
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
  }








const numBtnEl = document.getElementById("numBtn");
const inputOneEl = document.getElementById("inputOne");
const inputTwoEl = document.getElementById("inputTwo");
const outputEl = document.getElementById("output");


numBtnEl.addEventListener("click", function(){
    let numOne = parseInt(inputOneEl.value);
    let numTwo = parseInt(inputTwoEl.value);
    let sum = numOne+numTwo;
    
    outputEl.innerHTML=sum.toString();
})

const inputCheckEl = document.getElementById("inputNumCheck");
const checkBtnEl = document.getElementById("checkBtn");
const checkOutputEl = document.getElementById("checkOutput");



checkBtnEl.addEventListener("click", ()=>{
    let userNum = parseInt(inputCheckEl.value);
    console.log(userNum);
    if (userNum < 100){
        checkOutputEl.innerHTML="Det var ett litet tal";
    }
    else {
        checkOutputEl.innerHTML="Det var ett stort tal";
    }

})
function mouseEnter(){
    checkBtnEl.style.backgroundColor="red";
    checkBtnEl.style.border="none";
}
function mouseLeave(){
    checkBtnEl.style.backgroundColor="orange";
    checkBtnEl.style.border="none";
}
checkBtnEl.addEventListener("mouseenter", mouseEnter);
checkBtnEl.addEventListener("mouseleave", mouseLeave);


