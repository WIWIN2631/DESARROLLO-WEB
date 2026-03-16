// Obtener referencias a los elementos del DOM
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calcularButton = document.querySelector('button[type="submit"]');
const sumaP = document.getElementById('suma');
const restaP = document.getElementById('resta');
const multiplicacionP = document.getElementById('multiplicacion');
const divisionP = document.getElementById('division');

// Función para realizar los cálculos
function calcular() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // Verificar si los valores son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos en ambos campos.');
        return;
    }

    // Calcular operaciones
    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    let division = 'No se puede dividir por cero';
    if (num2 !== 0) {
        division = num1 / num2;
    }

    // Mostrar resultados
    sumaP.textContent = `Suma: ${suma}`;
    restaP.textContent = `Resta: ${resta}`;
    multiplicacionP.textContent = `Multiplicación: ${multiplicacion}`;
    divisionP.textContent = `División: ${division}`;
}

// Agregar evento al botón
calcularButton.addEventListener('click', calcular);
