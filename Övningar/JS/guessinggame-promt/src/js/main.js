let answerEl = document.getElementById("answer");



function guessingFunction(){
    let inputOne = prompt("Ange ett nummer mellan 0 och 9");
    let inputNum = Number(inputOne);


    while(inputNum < 0 || inputNum > 9){
        let wrongInput = prompt("Du har angett fel nummer. Försök igen!");
        inputNum = Number(wrongInput);
    }
    confirm("Är u redo att gissa?");

    let inputTwo = prompt("Gissa numret");
    let guessNum = Number(inputTwo);
    
    while((inputNum!==guessNum)){


        
        let a = prompt("Gissa vidare");
        guessNum =Number(a);
        answerEl.innerHTML = "Fel";
        
    }
    answerEl.innerHTML="Du har gissat rätt";
}
    

    

  