//Ejercicio 1
let nota = prompt();

if (nota < 5) {
    console.log("Has suspendido");
}
else if (nota <= 6.9) {
    console.log("Has aprovado");
}
else if (nota <= 8.9) {
    console.log("Has sacado un notable");
}
else if (nota <= 10) {
    console.log("Has sacado un excelente");
}
else {
    console.log("Introduce un valor numerico");
}
