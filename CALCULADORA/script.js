function appendToDisplay(value) {
    const display = document.getElementById('display');
    // Evita agregar múltiples puntos decimales
    if (value === '.' && display.value.includes('.')) {
        return;
    }
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteLastDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Elimina el último carácter
}