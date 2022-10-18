
const inputEL = document.getElementById("input");
const btnEl = document.getElementById("myBtn");


btnEl.addEventListener("click", function(){
    let number=0;
    number = inputEL.value;
    myFunction(number);
})

function myFunction(num){
    let controlNum;
    let sum = 0;
    for (let i=0; i<9;i++){
        const digitOfNumStr = String(num)[i];
        const digitOfNumInt = Number(digitOfNumStr);
        let value = digitOfNumInt*(2-i%2);
        if (value > 9){
            let b,c;
            let d=0;
            for (let a=0; a<2; a++){
                b = String(value)[a];
                c = Number(b);
                d=d+c;
            }
            value=d;
        }
        sum=sum+value;
        }
        
        const roundNum = Math.ceil(sum/10)*10;
    

        controlNum = roundNum - sum;

        document.getElementById("answer").innerHTML = controlNum;
}





