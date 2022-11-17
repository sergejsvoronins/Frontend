


let divList = [];
let counter = 0;

let mainContainer = document.getElementById("container");
//Alla vinkombinationer
let winCombinations = [
    [true, true, true, false, false, false, false, false, false],
    [false, false, false, true, true, true, false, false, false],
    [false, false, true, false, false, false, true, true, true],
    [true, false, false, true, false, false, true, false, false],
    [false, true, false, false, true, false, false, true, false],
    [false, false, true, false, false, true, false, false, true],
    [true, false, false, false, true, false, false, false, true],
    [false, false, true, false, true, false, true, false, false],
]
// console.log(firstPlayer);
// console.log(secondPlayer);
// console.log(divList);

let firstPlayer = [];
let secondPlayer = [];
for(let i=0; i<9; i++){
    firstPlayer.push(false);
    secondPlayer.push(false);
}
function checkResult (player, name){
    for(let a = 0; a<winCombinations.length; a++){
        if(JSON.stringify(player)===JSON.stringify(winCombinations[a])){
            alert(name + " van");  
            
            
        }
        
    }

}


    

    
    for(let i=0; i<9; i++){
        let square = document.createElement("div");
        mainContainer.appendChild(square);
        square.className = "box";  
        divList.push(square); 
        divList[i].addEventListener("click", () => {
            handleClick((i));
            });
    }
    
    
    
    function handleClick(index) {
            if(counter%2===0){
                divList[index].innerHTML = "<span>x</span>";
                divList[index].classList.add("Xbox");
                firstPlayer[index]=true;
                checkResult(firstPlayer, "Grattis! Första spelare");
                if (counter===8){

                    alert("Oavgjort");
                }
    
                counter++;
            }
            else {
                divList[index].innerHTML = "<span>o</span>";
                divList[index].classList.add("Obox");
                secondPlayer[index] = true;
                checkResult(secondPlayer, "Grattis! Andra spelare");
                if (counter===8){

                    alert("Oavgjort");
                }
    
                counter++;
            }
    }



// if(confirm("Vill du spela TikTak?")){
//     startTikTak();

// };

