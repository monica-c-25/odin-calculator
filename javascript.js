const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", display));

let num = '';
let numTwo = '';
let operator = '';
let equals = '';

function display() {
    content = this.textContent;
    if (content === "AC") {
        document.getElementById("display").innerHTML = "";
        num = '';
        numTwo = '';
        operator = '';
    }else if (content === "=") {
        if ( (num === '') || (numTwo === '') || (operator === '')) {
            } else {
                document.getElementById("display").innerHTML += content;
                equals += content;
                compute(num, numTwo, operator);
            }
    }else if ( (content === "+") || (content ==="*") || (content === "-") || (content === "/")) {
        if (num === '' ) {
        } else if (operator === '') {
            document.getElementById("display").innerHTML += content;
            return operator += content; 
        } else {
            compute(num, numTwo, operator);
            document.getElementById("display").innerHTML += content;
            return operator += content;
        } 
    } else {
        if (operator.length === 0) {
            document.getElementById("display").innerHTML += content;
            return num += content;
        } else {
            if (equals.length === 0) {
                document.getElementById("display").innerHTML += content;
                numTwo += content;
            } 
        }
    };
}


function compute(num, numTwo, operator) {
    array = [parseInt(num), parseInt(numTwo)];
    operate (array, operator);
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
    } else if (operator === '/') {
        divide(array);
    } 
}

function add(x) {
    total = (x.reduce((a,b) => (a + b)));
    document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += total;
    num = '';
    num += total.toString();
    numTwo = '';
    operator = '';
    equals = '';
}


function subtract(x) {
    total = (x.reduce((a,b) => (a - b)));
    document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += total;
    num = '';
    num += total.toString();
    numTwo = '';
    operator = '';
    equals = '';
}

function multiply(x) {
    total = (x.reduce((a,b) => (a * b)));
    document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += total;
    num = '';
    num += total.toString();
    numTwo = '';
    operator = '';
    equals = '';
}

function divide(x) {
    const arr = x;
    if (arr.at(1) === 0) {
        alert("Do not divide by 0!");
        document.getElementById("display").innerHTML = "";
        num = '';
        numTwo = '';
        operator = '';
        equals = '';
    } else {
        total =(x.reduce((a,b) => (a / b)));
        round = Math.round(100 * total)/100;
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML += round;
        num = '';
        num += total.toString();
        numTwo = '';
        operator = '';
        equals = '';
    }
}












