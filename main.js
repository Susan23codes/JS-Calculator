
let buttons = document.querySelectorAll(".button")
document.getElementById("clear").addEventListener("click", clearScreen);
document.getElementById("equals").addEventListener("click", runMath);
const result = document.getElementById("display")
document.getElementById("backspace").addEventListener("click", backUp);

for (let button of buttons) {
    button.addEventListener("click", addToDisplay)
}

function addToDisplay(event) {
    let textOnButtonClicked = event.target.innerText
    // console.log(event)
    result.value = result.value + textOnButtonClicked;
}
function clearScreen() {
    result.value = "";
}

 function runMath() {
    try {
        result.value = eval(result.value) 
    }
    catch(err) {
        result.value = "Error"
        // console.log(`Error hit while evaluating expression: ${err}\n For expression: ${expression}`)
    // Joey wrote the above to show me how we as developers can help in explaining errors that occur
    }
 }

 function backUp() {
    let currentDisplay = result.value;
    let splitString = currentDisplay.split("");
    splitString.pop();
    let newString = splitString.join("")
    console.log(newString)
    result.value = newString;
 }
