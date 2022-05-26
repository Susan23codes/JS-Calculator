
let buttons = document.querySelectorAll(".button")
document.getElementById("display").addEventListener("click", clearScreen);

for (let button of buttons) {
    button.addEventListener("click", addToDisplay)
}

function addToDisplay(event) {
    let textOnButtonClicked = event.target.innerText
    let result = document.getElementById("display")
    console.log(event)
    result.value = result.value + textOnButtonClicked;
}
 function clearScreen() {
     
 }

