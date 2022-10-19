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
        if (guessNum>inputNum){
            let a = prompt("För stort. Gissa vidare");
            guessNum =Number(a);
        }
        else {
        let b = prompt("För lågt. Gissa vidare");
        guessNum =Number(b);    
        }  
    }
    answerEl.innerHTML="Du har gissat rätt";
}
    

    

  