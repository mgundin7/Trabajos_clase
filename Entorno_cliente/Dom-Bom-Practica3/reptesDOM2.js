let punts = 0;
let fets = new Set(); // Guardem exercicis ja completats

function resaltaDOM(elem) {
      elem.classList.add('resaltaDOM');
}

function resalta(elem) {
      elem.classList.add('highlight');
  //Es perquè ressalti només un moment
  setTimeout(() => elem.classList.remove('highlight'), 1500);
}
function mostra(elem) {
      elem.classList.add('mostra');
}
function borde(elem) {
      elem.classList.add('borde');
}
function destaca(elem){
    elem.classList.add('highlight')
}
function exerciciFet(num) {
  if (fets.has(num)) {
    feedback(`⚠️ L'exercici ${num} ja estava fet!`, false);
    return true;
  }
  fets.add(num);
  return false;
}

//Cada exercici val 2 punts, que s'han d'anar acumulant
function sumarPunts(){
    const puntos = document.getElementById("punts");
    puntos.textContent = Number(puntos.textContent) + 2;
    resalta(puntos)
    //Fes servir l'activitat anterior per veure com cada augment de punts estigui highlighted durant un temps
    actualitzarNivell();
}

function actualitzarNivell() {
  const nivells = [
    {min: 0, text: "Nivell 1: Explorador DOM"},
    {min: 6, text: "Nivell 2: Caçador de Selectors"},
    {min: 14, text: "Nivell 3: Mestre del DOM 🧙‍♂️"},
  ];
  for (let i = nivells.length - 1; i >= 0; i--) {
    //Actualitza el nivell segons els punts
  }
}

function feedback(msg, correct=true){
  let fb = document.getElementById("feedback");
  fb.innerHTML += `<p class="${correct?'correct':'wrong'}">${msg}</p>`;
}

//A cada funció: si l'exercici ja està fet, no facis res més
function ex1() {

    if (exerciciFet(1)) return;

    const textos = document.getElementsByClassName("text");

    for (let i = 0; i < textos.length; i++) {
        destaca(textos[i]);
    }

  feedback("✅ Exercici 1 completat!");
  sumarPunts();
  console.log(ex1.toString());
}

function ex2() {

    if (exerciciFet(2)) return;

    const exemple = document.getElementById("zona-exemple");

    destaca(exemple);

  feedback("✅ Exercici 2 completat!");
  sumarPunts();
  console.log(ex2.toString());
}

function ex3() {

    if (exerciciFet(3)) return;

    const especial = document.getElementsByName("especial")[0];

    borde(especial);

  feedback("✅ Exercici 3 completat!");
  sumarPunts();
  console.log(ex3.toString());
}

function ex4() {

  if (exerciciFet(4)) return;

    const important = document.querySelector(".important");
    let coincideix = false;
    let trobada = false;

    if (important) {
        coincideix = important.matches(".important");
        pare = important.closest(".bloc");

        if (pare) {
            trobada = true;
        }
    }
  feedback("✅ " + coincideix + " | trobada: " + trobada);
  sumarPunts();
  console.log(ex4.toString());
}

function ex5() {
  if (exerciciFet(5)) return;
  const bloque = document.querySelector(".bloc");
  const contiene = bloque.contains(document.querySelector('[name="especial"]'));

  feedback("✅ contains: " + contiene);
  sumarPunts();
  console.log(ex5.toString());
}

function ex6() {
    if (exerciciFet(6)) return;

    const textos = document.querySelectorAll(".text");

    textos.forEach(texto => {
        if (texto.matches(":last-child")) {
            mostra(texto);
        }
    });

    feedback("✅ Exercici 6 completat!");
  sumarPunts();
  console.log(ex6.toString());
}

function ex7() {
  if (exerciciFet(7)) return;

  const bloque = document.querySelector(".bloc");
  let lista = bloque.querySelector("ul");

  if (!lista) {
    lista = document.createElement("ul");
    bloque.appendChild(lista);
  }

  const elemento = document.createElement("li");
  elemento.textContent = "Nou paràgraf afegit dinàmicament!";
  lista.appendChild(elemento);

  feedback("✅ Paràgraf afegit!");
  sumarPunts();
  console.log(ex7.toString());
}

function ex8() {
  if (exerciciFet(8)) return;

  const paragrafs = document.querySelectorAll(".bloc p");

  paragrafs.forEach(paragraf => {
    if (paragraf.textContent.includes("DOM")) {
      resaltaDOM(paragraf);
    }
  });

  feedback("✅ Filtrat avançat aplicat!");
  sumarPunts();
  console.log(ex8.toString());
}

function netejarEstils() {
  document.querySelectorAll("*").forEach(e => {
    e.classList.remove("highlight");
    e.style.border = "";
    if(e.style.background.includes("light")) e.style.background = "";
    e.style.fontWeight = "";
  });
  feedback("🧹 Estils restablerts!", true);
}