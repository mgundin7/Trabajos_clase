let numero = Number(prompt("Introduce un número del 1 al 6"));

let dado = Math.floor(Math.random() * 6) + 1;

if (numero == dado) {
    alert("Has ganado!");
} else {
    alert("Has perdido, el número era " + dado);
}
