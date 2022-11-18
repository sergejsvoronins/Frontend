
class Square {
    constructor (public status: string){}
}

let divList : Square [] = [];
let counter : number = 0;

let mainContainer : HTMLDivElement= document.getElementById("container") as HTMLDivElement;


createHtml()
function createHtml(){
    divList = [];
    counter = 0;
    for(let i=0; i<9; i++){
        let squareDiv : HTMLDivElement = document.createElement("div");
        mainContainer.appendChild(squareDiv);
        squareDiv.className = "box";  
        let square : Square  = new Square ("");
        divList.push(square);
        squareDiv.addEventListener("click", ()=>{
            if (counter>=8){
                alert("Oavgjort");
                startNewGame();   
            }
            else if(counter%2===0){
                squareDiv.innerHTML = "<span>x</span>";
                squareDiv.classList.add("Xbox");
                divList[i].status = "x";
                checkWinCond()
                counter++;
            }
            else {
                squareDiv.innerHTML = "<span>o</span>";
                squareDiv.classList.add("Obox");
                divList[i].status = "o";
                counter++;
                checkWinCond();
            }
        })
    }
}

function checkWinCond (){
        if(divList[0].status ==="x" && divList[1].status==="x" && divList[2].status==="x" ){
            alert("Player one won");
            startNewGame();
    
        }
        else if(divList[3].status==="x" && divList[4].status==="x" && divList[5].status==="x" ){
            alert("Player one won");
            startNewGame();
        }
        else if(divList[6].status==="x" && divList[7].status==="x" && divList[8].status==="x" ){
            alert("Player one won");
            startNewGame();
        }
        else if(divList[0].status==="x" && divList[3].status==="x" && divList[6].status==="x" ){
            alert("Player one won");
            startNewGame();
        }
        else if(divList[1].status==="x" && divList[4].status==="x" && divList[7].status==="x" ){
            alert("Player one won");
            startNewGame();
        }
        else if(divList[2].status==="x" && divList[5].status==="x" && divList[8].status==="x" ){
            alert("Player one won");
            startNewGame();
        }
        else if(divList[0].status==="x" && divList[4].status==="x" && divList[8].status==="x" ){
            alert("Player one won");
            startNewGame();
        }
        else if(divList[2].status==="x" && divList[4].status==="x" && divList[6].status==="x" ){
            alert("Player one won");
            startNewGame();
        }

    

        if(divList[0].status==="o" && divList[1].status==="o" && divList[2].status==="o" ){
            alert("Player 2 won");
            startNewGame();
        }
        else if(divList[3].status==="o" && divList[4].status==="o" && divList[5].status==="o" ){
            alert("Player two won");
            startNewGame();
        }
        else if(divList[6].status==="o" && divList[7].status==="o" && divList[8].status==="o" ){
            alert("Player two won");
            startNewGame();
        }
        else if(divList[0].status==="o" && divList[3].status==="o" && divList[6].status==="o" ){
            alert("Player two won");
            startNewGame();
        }
        else if(divList[1].status==="o" && divList[4].status==="o" && divList[7].status==="o" ){
            alert("Player two won");
            startNewGame();
        }
        else if(divList[2].status==="o" && divList[5].status==="o" && divList[8].status==="o" ){
            alert("Player two won");
            startNewGame();
        }
        else if(divList[0].status==="o" && divList[4].status==="o" && divList[8].status==="o" ){
            alert("Player two won");
            startNewGame();
        }
        else if(divList[2].status==="o" && divList[4].status==="o" && divList[6].status==="o" ){
            alert("Player two won");
            startNewGame();
        }

}
 function startNewGame (){
    if (confirm("Vill du spela igen?")){
        mainContainer.innerHTML = "";
        createHtml();
        console.log(counter);  
    }

 }