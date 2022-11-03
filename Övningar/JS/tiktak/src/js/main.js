class Player {
    constructor(){
        
    }
}

let firstPlayer = [];
let secondPlayer = [];

for(let i=0; i<9; i++){
    firstPlayer.push(false);
    secondPlayer.push(false);
}


let counter = 0;


console.log(firstPlayer);
console.log(secondPlayer);



let divList = [];

let mainContainer = document.getElementById("container");


console.log(divList);


for(let i=0; i<9; i++){
    let square = document.createElement("div");
    mainContainer.appendChild(square);
    square.className = "box";  
    divList.push(square); 
    divList[i].addEventListener("click", () => {
        handleClick((i));
        });
}

//Alla vinkombinationer

let winCombinations = [
    [true, true, true, false, false, false, false, false, false],
    [false, false, true, true, true, true, false, false, false],
    [false, false, true, false, false, false, true, true, true],
    [true, false, false, true, false, false, true, false, false],
    [false, true, true, false, true, false, false, true, false],
    [false, false, true, false, false, true, false, false, true],
    [true, false, true, false, true, false, false, false, true],
    [false, false, true, false, true, false, true, false, false],
]

function handleClick(index) {
    // console.log("Du klickade på nr" ,(index+1));
    
    
        if(counter%2===0){
            firstPlayer[index]=true;
            divList[index].style.backgroundColor = "red";

                for(let a=0; a<winCombinations.length; a++){
                    if(JSON.stringify(firstPlayer)===JSON.stringify(winCombinations[a])){
                        console.log("Player1 van");
                    }
                }

            counter++;
        }
        else {
            secondPlayer[index] = true;
            divList[index].style.backgroundColor = "green";

                for(let a=0; a<winCombinations.length; a++){
                    if(JSON.stringify(secondPlayer)===JSON.stringify(winCombinations[a])){
                        console.log("Player2 van");
                    }
                }

            counter++;
        }
        console.log(counter);
}