window.onload = function(){
    console.log("Hej Sigge");
} 

const btnEl: HTMLButtonElement = document.getElementById("btn") as HTMLButtonElement;
const scoreEl: HTMLSpanElement = document.getElementById("score") as HTMLSpanElement;






let scoreLS: string | null = localStorage.getItem("score");
let score: number = 0;
if (scoreLS===null){
    score = 0;
}
else {
    score = parseInt(scoreLS);
}

scoreEl.innerHTML = score.toString();
btnEl.addEventListener("click", ()=>{
    score++;
    updateLocalStorage();
    scoreEl.innerHTML = score.toString();
})
function updateLocalStorage() : void {
    localStorage.setItem("score", JSON.stringify(score));
}




    
    
    








