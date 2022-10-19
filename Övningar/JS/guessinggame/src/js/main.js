const inputEl = document.getElementById("userInput");
const userAnswerEl = document.getElementById("userAnswer");
let answerEl = document.getElementById("answer");

function hideFunction(){
    inputEl.style.display ="none";
}

function guessingFunction(){
    const inputNumber = Number(inputEl.value);
    const guessNumber = Number(userAnswerEl.value);



    if (inputNumber===guessNumber){
        answerEl.innerHTML="Rätt";
    }
    else if (inputNumber<guessNumber){
        answerEl.innerHTML="För stort";
        
    }
    else {
        answerEl.innerHTML="För lågt";
        
    }
    
}

function clearWrongAnswer(){
    if (userAnswerEl.value !=""){
        userAnswerEl.value = "";
    }
}