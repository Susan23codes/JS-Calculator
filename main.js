let buttons = document.querySelectorAll(".button")
let existingDisplay = document.querySelector("#display")

let clearButton = document.getElementById("clear")
clearButton.addEventListener("click", clearScreen);

document.getElementById("equals").addEventListener("click", runMath);

let backSpace = document.getElementById("backspace")
backSpace.addEventListener("click", backUp);

document.addEventListener("keydown", keyPress)


for (let button of buttons) {
    button.addEventListener("click", addToDisplay)
}

function addToDisplay(event) {
    // existingElement.innerText = existingElement.innerText + event.target.innerText;
    let textOnButtonClicked = event.target.innerText
    if (textOnButtonClicked === "." && existingDisplay.innerText.length === 0) {
        console.log("yay!")
        existingDisplay.innerText = "0" + ".";
    } else {
        existingDisplay.innerText = existingDisplay.innerText + textOnButtonClicked;
    }
    event.target.blur()
}
function clearScreen() {
    existingDisplay.innerText = "";
    clearButton.blur()
    // I was getting built-in keyboard accessibility features when inputting from the keyboard and Joey helped me find the way to remove the focus from the keyboard with blur for this project
}

function runMath() {
    try {
        if (existingDisplay.innerText.length !== 0) {
            existingDisplay.innerText = eval(existingDisplay.innerText)
        }
    }
    catch (err) {
        existingDisplay.innerText = "Error"
        // console.log(`Error hit while evaluating expression: ${err}\n For expression: ${expression}`)
        // Joey wrote the above to show me how we as developers can help in explaining errors that occur
    }
}

function backUp() {
    let currentDisplay = existingDisplay.innerText;
    let splitString = currentDisplay.split("");
    splitString.pop();
    let newString = splitString.join("")
    console.log(newString)
    existingDisplay.innerText = newString;
    backSpace.blur()
}

function keyPress(event) {
    const acceptableCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "%"]
    if (acceptableCharacters.includes(event.key)) {
        console.log(event.key)
        existingDisplay.innerText = existingDisplay.innerText + event.key
    } else if (event.key === ".") {
        if (existingDisplay.innerText.length === 0) {
            existingDisplay.innerText = "0" + "."
        } else {
            existingDisplay.innerText = existingDisplay.innerText + "."
        }
    } else if (event.key === "=" || event.key === "Enter") {
        runMath();
    } else if (event.key === "Backspace") {
        backUp();
    }
    else if (event.key === "c") {
        clearScreen();
    }
}
