let n1 = parseInt('19', 10);
let n2 = parseInt('+19', 10);
let n3 = parseInt('-19', 10);
let n4 = parseInt('19 Grad', 10);
let n5 = parseInt('19.1', 10);
let n6 = parseInt('019', 10);
let n7 = parseInt(' 19', 10);

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);

function add(inputStr){
    let plus = inputStr.indexOf("+");
    let firstNum = inputStr.substring(0;(plus-1));
    let secondNum = inputStr.sebstring(plus);
    let sum = parseInt(firstNum,10)+parseInt(secondNum,10)
    return sum;
    }