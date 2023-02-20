function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

function operate(operator,a,b){
    if (operator === "+") {
        return add(a,b)
    } else if (operator === "-") {
        return subtract(a,b)
    } else if (operator === "*") {
        return multiply(a,b)
    } else {
        return divide(a,b)
    } 
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", display));

function display() {
    content = this.textContent;
    if (typeof (parseInt(content) === "NaN")) {
        document.getElementById("display").innerHTML += content;
        return content;
    } else {
        document.getElementById("display").innerHTML += parseInt(content);
        return parseInt(content);
    }
    //populate(display());
}









