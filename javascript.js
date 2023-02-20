const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", display));

let array = [];
let operator = '';

function display() {
    content = this.textContent;
    if (content === "AC") {
        document.getElementById("display").innerHTML = "";
        array = [];
        operator = '';
    }else if (content === "=") {
        if (document.getElementById("display").innerHTML.length < 3){
            } else {
                document.getElementById("display").innerHTML += content;
                return null
            }
    }else if ( (content === "+") || (content ==="*") || (content === "-") || (content === "/")) {
        document.getElementById("display").innerHTML += content;
        return operator += content; 
    } else {
        document.getElementById("display").innerHTML += content;
        return array.push(parseInt(content));
    };
}

const equal = document.getElementById("equal");
equal.addEventListener('click', operate);

function operate(){
    if (document.getElementById("display").innerHTML.length < 3) {
    } else if (operator === '+') {
        add(array);
    } else if (operator === '-') {
        subtract(array);
    } else if (operator === '*') {
        multiply(array);
    } else if (operator === '/') {
        divide(array);
    } 
}

function add(x) {
    total = (x.reduce((a,b) => (a + b)));
    document.getElementById("display").innerHTML += total
}


function subtract(x) {
    total = (x.reduce((a,b) => (a - b)));
    document.getElementById("display").innerHTML += total
}

function multiply(x) {
    total = (x.reduce((a,b) => (a * b)));
    document.getElementById("display").innerHTML += total
}

function divide(x) {
    const arr = x;
    if (arr.at(1) === 0) {
        alert("Do not divide by 0!");
        document.getElementById("display").innerHTML = "";
        array = [];
        operator = '';
    } else {
        total = (x.reduce((a,b) => (a / b)));
        document.getElementById("display").innerHTML += total
    }
}

 











