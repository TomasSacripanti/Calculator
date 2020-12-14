let divCalculator = document.querySelector('.calculator');
let textView = document.querySelector('.textview');

class Calculator {
    constructor() {
        this.operators = [];
        this.output;
    }
    rmLast() {
        this.operators.splice(-1, 1);
        this.show();
    }
    clean() {
        this.operators = [];
        this.show();
    }
    show(operators = this.operators) {
        textView.value = '';
        if(typeof operators === 'object') {
            this.operators.forEach((operator) => {
                textView.value += operator;
            })
        } else {
            textView.value = operators;
        }
    }
    calculate() {
        let strValue = this.operators.join('');
        this.output = '';
        this.output = eval(strValue);
        this.show(this.output);
        this.operators = [];
        this.output = this.output.toString();
        for(let i = 0; i < this.output.length; i++) {
            this.operators.push(this.output.charAt(i));
        }
    }
}

let calculator;
document.addEventListener('DOMContentLoaded', () => {
    calculator = new Calculator();
})

divCalculator.addEventListener('click', (e) => {
    e.preventDefault();
    let elmnt = e.target;
    if (elmnt.className === 'textview') {
        
    } else {
        let clickedValue = e.target.value;
        if (clickedValue === '=') {
            calculator.calculate();
        } else if (clickedValue === 'C') {
            calculator.clean();
        } else if (clickedValue === '>') {
            calculator.rmLast()
        } else if (clickedValue === undefined) {

        } else {
            calculator.operators.push(clickedValue);
            calculator.show();
        }
    }
})

