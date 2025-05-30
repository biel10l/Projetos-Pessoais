let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""

function appendNumber(value) {
    currentInput += value
    display.textContent = currentInput
}

function appendOperator(operator) {
    if(currentInput === "" && operator !== ".") return
    currentInput += operator;
    display.textContent = currentInput
}

function calculate(){
    try {
        let result = eval(currentInput)
        if(!Number.isInteger(result)){
            result = result.toFixed(2)
        }
        currentInput = result;
        display.textContent = currentInput;
    } catch (error){
        display.textContent = "Erro";
        currentInput = "";
    }
}

function ClearDisplay(){
    currentInput = "";
    display.textContent =  currentInput;
}

function handleKeyboardInput(event) {
    const key = event.key;  // Obtém a tecla pressionada

// Função para remover o último caractere
function backspace() {
    currentInput = currentInput.slice(0, -1);  // Remove o último caractere
    display.textContent = currentInput;
}


    if (key >= '0' && key <= '9') {
        // Se for um número, chama appendNumber
        appendNumber(key);
    } else if (key === '%') {
        // Se for o operador de módulo, chama appendOperator
        appendOperator('%');
    } else if (key === '.') {
        // Se for o ponto, chama appendOperator
        appendOperator('.');
    } else if (key === '/') {
        // Se for o operador de divisão, chama appendOperator
        appendOperator('/');
    } else if (key === '*') {
        // Se for o operador de multiplicação, chama appendOperator
        appendOperator('*');
    } else if (key === '-') {
        // Se for o operador de subtração, chama appendOperator
        appendOperator('-');
    } else if (key === '+') {
        // Se for o operador de adição, chama appendOperator
        appendOperator('+');
    } else if (key === 'Enter') {
        // Se for a tecla Enter, chama a função de calcular
        calculate();
    } else if (key === 'Escape') {
        // Se for a tecla Escape, chama a função de limpar o visor
        clearDisplay();
    
    }else if (key === 'Backspace') {
    // Se for a tecla Backspace, chama a função de apagar o último caractere
    backspace();
    }
}

// Adiciona o event listener para capturar as teclas pressionadas
window.addEventListener('keydown', handleKeyboardInput);


