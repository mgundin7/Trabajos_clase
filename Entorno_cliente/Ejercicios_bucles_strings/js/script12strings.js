let dni = prompt("Introduce tu DNI:");

let patron = /^[0-9]{8}[A-Z]$/;

if (patron.test(dni)) {
    alert("DNI correcto");
} else {
    alert("DNI falso");
}