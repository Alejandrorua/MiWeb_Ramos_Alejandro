function sumar() {
    // Obtenemos los valores de los inputs por su ID
    const num1 = document.getElementById('n1').value;
    const num2 = document.getElementById('n2').value;

    // Validamos que no estén vacíos
    if (num1 === "" || num2 === "") {
        alert("Por favor, ingresa ambos números");
        return;
    }

    // Realizamos la suma convirtiendo el texto a número
    const resultadoSuma = parseFloat(num1) + parseFloat(num2);

    // Mostramos el resultado en el div correspondiente
    document.getElementById('resultado').innerText = `Resultado: ${resultadoSuma}`;
}

function calcularFactorial() {
    const input = document.getElementById('numeroInput').value;
    const n = parseInt(input);

    // Validaciones básicas
    if (input === "") {
        document.getElementById('resultado2').innerText = "Por favor, escribe un número.";
        return;
    }
    if (n < 0) {
        document.getElementById('resultado2').innerText = "No existe el factorial de números negativos.";
        return;
    }
    if (n === 0 || n === 1) {
        document.getElementById('resultado2').innerText = `Resultado: 1`;
        return;
    }

    let factorial = 1;
    // Bucle para multiplicar: 1 * 2 * 3... hasta n
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    document.getElementById('resultado2').innerText = `El factorial de ${n} es: ${factorial}`;
}