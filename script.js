const userinput = document.querySelector('.input')
const operatorinput = document.querySelector('.inputoperator')
const resultdisplay = document.querySelector('.result')

function setDisplay(text){
    console.log(text)
    if(text==='.'){
        userinput.textContent
    }
    if(text===''||text===null){
        setDisplay('0')
    }else{
        userinput.textContent = parseFloat(text)
    }
}

function add(num1, num2){
    console.log(num1, num2)
    return parseFloat(num1) + parseFloat(num2)
}

function subtract(num1, num2){
    return parseFloat(num1) - parseFloat(num2)
}

function multiply(num1, num2){
    return parseFloat(num1) * parseFloat(num2)
}

function divide(num1, num2){
    if(num2===0){
        setDisplay('lol');
        return;
    }
    return parseFloat(num1) / parseFloat(num2)
}

let inputnum = null;
let operator = null;
let finalresult = null;

function operate(operator, num1, num2){
    let result = null;
    switch(operator){
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2)
            break;
        case 'divide':
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

function allClear(){
    setDisplay('')
    inputnum = null
    finalresult = null
}

function clear(){
    if(inputnum==userinput.textContent || finalresult==userinput.textContent){
        let toDisplay = popped(userinput.textContent)
        setDisplay(toDisplay)
        inputnum = userinput.textContent
    }else{
        setDisplay('')
        inputnum=null;
    }
}

function calculate(event){
    const className = event.target.getAttribute('class')
    if(className === 'digit'){
        inputnum = userinput.textContent + event.target.textContent
        if(userinput.textContent==='error'){
            inputnum = event.target.textContent
            setDisplay(inputnum)
        }else if(validLengthString(inputnum)){
            setDisplay(inputnum)
        }else{
            setDisplay('error')
            inputnum = null;
        }
    }
    else if(className === 'function'){
        const id = event.target.getAttribute('id')
        if(id==='allclear'){
            allClear()
        }else if(id==='clear'){
            clear()
        }else if(id==='equals'){
            if(inputnum===null||isNaN(inputnum)||!validLengthString(inputnum)) {
                setDisplay('error')
                return;
            }
            finalresult = operate(operator, finalresult, inputnum)
            inputnum = finalresult
            setDisplay(finalresult)
        }
    }else if(className === 'operator'){
        operatorinput.textContent = event.target.textContent
        operator = event.target.id
    }
}

function popped(string){
    let newString = string.slice(0, string.length-1)
    return newString
}

setDisplay('0')
const calc_buttons = document.querySelector('.buttons');
calc_buttons.addEventListener('click', calculate)