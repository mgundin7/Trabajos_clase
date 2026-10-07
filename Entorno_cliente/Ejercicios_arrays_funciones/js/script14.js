let matriu = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Mostrar todos los valores en una sola línea
let valors = "";

for (let i = 0; i < matriu.length; i++) {
    for (let j = 0; j < matriu[i].length; j++) {
        valors += matriu[i][j] + " ";
    }
}

console.log(valors);

// Calcular la suma total
let suma = 0;

for (let i = 0; i < matriu.length; i++) {
    for (let j = 0; j < matriu[i].length; j++) {
        suma += matriu[i][j];
    }
}

console.log("Suma total:", suma);