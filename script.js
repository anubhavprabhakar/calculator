function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    if(num2!==0) return num1 / num2
    else return 'Cannot divide by zero.'
}

let num1 = null;
let num2 = null;
let operator = null;
let result = null;

function operate(operator, num1, num2){
    let result = null;
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2)
            break;
        case '/':
            result = divide(num1, num2)
            break;
        default:
            break;
    }
    console.log('result: ', result)
}

const userinput = document.querySelector('.input')

function validLengthString(string){
    return (string.length <= 7)
}

function display(event){
    const className = event.target.getAttribute('class')
    if(className === 'digit'){
        num1 = userinput.textContent + event.target.id
        if(validLengthString(num1)){
            userinput.textContent = num1
        }
        else{
            userinput.textContent = 'ERR. Only 7 digits accepted'
        }
    }
    else if(className === 'function'){
        const id = event.target.getAttribute('id')
        if(id==='clear'){
            if(validLengthString(userinput.textContent)){
                userinput.textContent = pop(userinput.textContent)
            }else{
                userinput.textContent = ''
            }
        }
    }
}

function pop(string){
    let newString = string.slice(0, string.length-1)
    return newString
}

const calc_buttons = document.querySelector('.buttons');
calc_buttons.addEventListener('click', display)