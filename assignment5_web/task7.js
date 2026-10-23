const numb1 = document.getElementById('numb1')
const oper = document.getElementById('oper')
const numb2 = document.getElementById('numb2')
const btn1 = document.getElementById('btn1')
const res = document.getElementById('res')

function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}

btn1.addEventListener('click', function () {
    const a = Number(numb1.value);
    const b = Number(numb2.value);
    const operator = oper.value;

    if (operator === '/' && b === 0) {
        res.textContent = "Cannot divide by zero";
        return;
    }
    res.textContent = `Result: ${calculate(a, b, operator)}`

})