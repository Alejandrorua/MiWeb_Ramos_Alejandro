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