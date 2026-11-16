const nom = document.getElementById("nom");

const repeat = document.getElementById("repeat");

const colores = document.getElementById("colores");

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

const x = document.getElementById("idx");
const y = document.getElementById("idy");

const fitxa1 = document.getElementById("fitxa1");
const fitxa2 = document.getElementById("fitxa2");
const fitxa3 = document.getElementById("fitxa3");

const textoarea = document.getElementById("textoarea")
let parrafo = document.getElementById("contador");

const texto = document.getElementById("texto8");
const numero = document.getElementById("numero8");
//Exercici 1

//OPCION 1
// nom.addEventListener("input",(event)=> {
// if (/[0-9]/.test(event.target.value)) {
//     console.log(event.target);
//     alert("Hay numeros");
// }
// });

// //OPCION 2
// nom.addEventListener("input",()=> {
// if (/[0-9]/.test(nom.value)) {
//     alert("Hay numeros");
// }
// });

//OPCION 3

nom.addEventListener("change", () => {
    if (/[0-9]/.test(nom.value)) {
        alert("Hay numeros");
    }
});

//Exercici 1 -BIS
nom.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (!isNaN(event.key)) {
        event.preventDefault();
    }
});

//EXERCICI 2
repeat.addEventListener("paste", (event) => {
    event.preventDefault();
    alert("No puedes pegar aquí, vago")
});

//Exercici 3
document.addEventListener("DOMContentLoaded", () => {
    colores.addEventListener("mouseover", () => {
        colores.style.backgroundColor = "red";
    });
    colores.addEventListener("mouseout", () => {
        colores.style.backgroundColor = "white";
    });
});

//Exercici 4

function pulsar(event) {
    console.log(event.target);
    alert(event.target.id);
}

boton1.addEventListener("click", pulsar);
boton2.addEventListener("click", pulsar);

//Exercici 5

document.addEventListener("mousemove", (event) => {
    x.value = event.clientX;
    y.value = event.clientY;
});

document.addEventListener("keypress", (event) => {
    if (event.key == 1) {
        fitxa1.className = "visible";
    }
    else if (event.key == 2) {
        fitxa2.className = "visible";
    }
    else if (event.key == 3) {
        fitxa3.className = "visible";
    }
});

textoarea.addEventListener("input", () => {
    let contador = textoarea.value.length;
    parrafo.textContent = "Numero de caracteres: " + contador;
});

[texto, numero].forEach((campo) => {
    campo.addEventListener("focus", () => {
        campo.style.backgroundColor = "lightblue";
        campo.style.fontFamily = "Arial";
        campo.style.fontSize = "18px";
    });

    campo.addEventListener("blur", () => {
        campo.style.backgroundColor = "";
        campo.style.fontFamily = "";
        campo.style.fontSize = "";
    });
});

document.addEventListener("keydown", (event) => {

    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Guardat!");
    }

    if (event.shiftKey && event.key.toLowerCase() === "l") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

});