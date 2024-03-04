const userinput = document.querySelector('.input')
const operatorinput = document.querySelector('.inputoperator')
const resultdisplay = document.querySelector('.result')

function setDisplay(text){
    console.log('setDisplay(text):', text)
    if(text==='.'){
        userinput.textContent
    }
    if(text==0||text===''||text===null){
        userinput.textContent = '0'
    }else{
        userinput.textContent = text
    }
}

function add(num1, num2){
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
    console.log('operate:',operator, num1, num2)
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
            result = parseFloat(num1);
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
    operator = null
}

function clear(){
    if(userinput.textContent==='Infinity'){
        setDisplay('')
        finalresult=null
    }
    if(inputnum==userinput.textContent || finalresult==userinput.textContent){
        let toDisplay = popped(userinput.textContent)
        setDisplay(toDisplay)
        inputnum = userinput.textContent
    }else{
        setDisplay('')
        inputnum=null;
    }
    if(finalresult==='error' || isNaN(finalresult)){
        finalresult=null;
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
            if(finalresult===null){
                finalresult=inputnum
                console.log('fin:null - ',finalresult, inputnum)
            }

            finalresult = operate(operator, finalresult, inputnum)
            
            if(finalresult.toFixed(2)!=finalresult){
                finalresult=finalresult.toFixed(2)
            }
            setDisplay(finalresult)
            inputnum=null
            operator=null
        }
    }else if(className === 'operator'){
        if(finalresult===null){
            finalresult=inputnum
            console.log('fin:null - ',finalresult, inputnum)
        }
        operatorinput.textContent = event.target.textContent
        operator = event.target.id
        setDisplay('0')
    }
}

function popped(string){
    let newString = string.slice(0, string.length-1)
    return newString
}

setDisplay('0')
const calc_buttons = document.querySelector('.buttons');
calc_buttons.addEventListener('click', calculate)