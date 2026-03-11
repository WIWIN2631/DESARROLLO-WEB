document.querySelector('button').addEventListener('click', CalcularIMC);

function CalcularIMC() {

    const peso = parseFloat(document.getElementById('pesoImc').value);
    const altura = parseFloat(document.getElementById('alturaImc').value);

    const resultadoImc = peso / (altura * altura);
    
    // alert('resultado es: '+ resultadoImc);
    //operaciones logicas y condicionales

    let categoria = '';

    if (resultadoImc < 18.5) { // evaluar 0 - 18.4
        categoria = 'Bajo peso';
    } else if (resultadoImc < 25) { // evaluar 18.5 - 24.9
        categoria = 'Peso normal';
    } else if (resultadoImc < 30) { // evaluar 25 - 29.9
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidad'; // evaluar 30 o más
    }

    document.getElementById('valorIMC').textContent = resultadoImc.toFixed(2);
    document.getElementById('categoriaIMC').textContent = categoria;
    document.getElementById('resultadoImc').style.display = 'block';


    /*

    si imc es menor a 18.5, entonces categoria es bajo peso
    sino si imc es menor a 25, entonces categoria es peso normal
    sino si imc es menor a 30, entonces categoria es sobrepeso
    sino categoria es obesidad

    */ 

}
