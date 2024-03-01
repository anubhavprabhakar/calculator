const userinput = document.querySelector('.input')
const operatorinput = document.querySelector('.inputoperator')
const resultdisplay = document.querySelector('.result')

function setDisplay(text){
    userinput.textContent = text
}

function add(num1=0, num2=0){
    if(!num1) return parseInt(num2)
    if(!num2) return finalresult
    return parseInt(num1) + (parseInt(num2))
}

function subtract(num1=0, num2=0){
    if(!num1){
        return parseInt(-num2)
    }
    return (parseInt(num1) - parseInt(num2))
}

function multiply(num1=1, num2=1){
    if(!num1 || !num2) {
        setDisplay('lol')
        return;
    }
    return parseInt(num1) * parseInt(num2)
}

function divide(num1=0, num2=0){
    if(num2===0){
        setDisplay('lol');
        return;
    }
    return (parseInt(num1) / parseInt(num2))
}

let num1 = null;
let num2 = null;
let operator = null;
let finalresult = null;

function operate(operator, num1=0, num2=0){
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
    return result
}

function validLengthString(string){
    return (string.length <= 8) 
}

function display(event){
    const className = event.target.getAttribute('class')
    if(className === 'digit'){
        num1 = userinput.textContent + event.target.textContent
        if(num1===null||validLengthString(num1)||userinput.textContent==='error'){
            setDisplay(parseFloat(num1))
        }
        else{
            setDisplay('error')
            num1 = null;
        }
    }
    else if(className === 'function'){
        const id = event.target.getAttribute('id')
        if(id==='allclear'){
            setDisplay('')
            num1 = null
            finalresult = null
        }else if(id==='clear'){
            if(num1==userinput.textContent || finalresult==userinput.textContent){
                let toDisplay = popped(userinput.textContent)
                setDisplay(toDisplay)
                num1 = parseFloat(userinput.textContent)
            }
        }else if(id==='equals'){
            if(num1===null||isNaN(num1)||!validLengthString(num1)) {
                setDisplay(finalresult)
                return;
            }
            operator = operatorinput.textContent
            finalresult = operate(operator, finalresult, num1)
            num1 = finalresult
            setDisplay(finalresult)
        }
    }else if(className === 'operator'){
        operatorinput.textContent = event.target.id
    }
}

function popped(string){
    let newString = string.slice(0, string.length-1)
    return newString
}

const calc_buttons = document.querySelector('.buttons');
calc_buttons.addEventListener('click', display)