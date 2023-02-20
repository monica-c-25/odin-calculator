const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", display));

let array = [];
let operator = '';

function display() {
    content = this.textContent;
    document.getElementById("display").innerHTML += content;
    if ( (content === "+") || (content ==="*") || (content === "-") || (content === "/")) {
        return operator += content; 
    } else if (content === "=") {
        return null
    } else {
        return array.push(parseInt(content));
    };
}

const equal = document.getElementById("equal");
equal.addEventListener('click', operate);

function operate(){
    if (operator === '+') {
        add(array);
    } else if (operator === '-') {
        subtract(array);
    } else if (operator === '*') {
        multiply(array);
    } else {
        divide(array);
    } 
}

function add(x) {
    console.log((x.reduce((a,b) => (a + b)))); 
}


function subtract(x) {
    console.log(x.reduce((a,b) => (a - b)));
}

function multiply(x) {
    console.log(x.reduce((a,b) => (a * b)));
}

function divide(x) {
    console.log(x.reduce((a,b) => (a / b)))
}

 











