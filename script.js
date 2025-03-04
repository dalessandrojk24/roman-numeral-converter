let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function results(){
let numberInput = number.value;
if (numberInput === ""){
    output.textContent = "Please enter a valid number";
    return;
}
if (numberInput <= 0){
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
}
if (numberInput >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
}
let outputDisplay = "";
for (i=0; i < arabic.length; i++){
    while (numberInput >= arabic[i]){
        numberInput = numberInput - arabic[i];
        outputDisplay += roman[i]
    }
}
output.textContent = outputDisplay;
}

convertBtn.addEventListener("click", results);
number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      results();
    }
  });

