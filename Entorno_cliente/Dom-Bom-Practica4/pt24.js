const zona = document.getElementById("zona");
const punts = document.getElementById("puntuacio");
const barra = document.getElementById("progress-bar");
const missatge = document.getElementById("missatge");
let puntuacio = 0;
const totalAccions = 9;
const fets = {};

function sumarPunts(id, valor) {
  if (!fets[id]) {
    fets[id] = true;
    puntuacio += valor;
    punts.textContent = puntuacio;
    document.getElementById(id).disabled = true;
    actualitzarBarra();
    if (Object.keys(fets).length === totalAccions) {
      missatge.textContent = "🏆 Enhorabona! Has completat totes les accions del DOM!";
      zona.style.background = "#eaffea";
    }
  }
}

function actualitzarBarra() {
  const percentatge = Math.round((Object.keys(fets).length / totalAccions) * 100);
  barra.style.width = percentatge + "%";
  barra.textContent = percentatge + "%";
  if (percentatge < 50) barra.style.background = "linear-gradient(90deg, #81c784, #66bb6a)";
  else if (percentatge < 80) barra.style.background = "linear-gradient(90deg, #4caf50, #2e7d32)";
  else barra.style.background = "linear-gradient(90deg, #388e3c, #1b5e20)";
}

// Funció auxiliar: crea un <div class="element"> amb el text que li passem
function crearElement(text) {
  const nou = document.createElement("div");
  nou.className = "element";
  nou.textContent = text;
  return nou;
}

// === BOTONS D’ACCIÓ ===

// 1. Crear un element nou i posar-lo dins la zona
document.getElementById("botoCrear").onclick = () => {
  const nou = crearElement("Nou element creat");
  zona.appendChild(nou);
  sumarPunts("botoCrear", 1);
};

// 2. Afegir al final de la zona amb append()
document.getElementById("botoAfegir").onclick = () => {
  const nou = crearElement("Afegit amb append");
  zona.append(nou);
  sumarPunts("botoAfegir", 1);
};

// 3. Afegir al principi de la zona amb prepend()
document.getElementById("botoPrepend").onclick = () => {
  const nou = crearElement("Afegit amb prepend");
  zona.prepend(nou);
  sumarPunts("botoPrepend", 1);
};

// 4. Inserir abans del primer element amb before()
document.getElementById("botoAbans").onclick = () => {
  const primer = zona.firstElementChild;
  if (primer == null) return;
  const nou = crearElement("Abans del primer");
  primer.before(nou);
  sumarPunts("botoAbans", 1);
};

// 5. Inserir després de l'últim element amb after()
document.getElementById("botoDespres").onclick = () => {
  const ultim = zona.lastElementChild;
  if (ultim == null) return;
  const nou = crearElement("Després de l’últim");
  ultim.after(nou);
  sumarPunts("botoDespres", 1);
};

// 6. Reemplaçar el primer element amb replaceWith()
document.getElementById("botoReemplaçar").onclick = () => {
  const primer = zona.firstElementChild;
  if (primer == null) return;
  const nou = crearElement("Element reemplaçat");
  primer.replaceWith(nou);
  sumarPunts("botoReemplaçar", 2);
};

// 7. Eliminar l'últim element amb remove()
document.getElementById("botoEliminar").onclick = () => {
  const ultim = zona.lastElementChild;
  if (ultim == null) return;
  ultim.remove();
  sumarPunts("botoEliminar", 1);
};

// 8. Clonar el primer element amb cloneNode(true) i afegir-lo al final
document.getElementById("botoClonar").onclick = () => {
  const primer = zona.firstElementChild;
  if (primer == null) return;
  const clon = primer.cloneNode(true);
  clon.textContent = primer.textContent + " (clon)";
  zona.appendChild(clon);
  sumarPunts("botoClonar", 2);
};

// 9. Afegir 3 elements de cop amb un DocumentFragment
document.getElementById("botoFragment").onclick = () => {
  const fragment = document.createDocumentFragment();
  for (var i = 1; i <= 3; i++) {
    fragment.appendChild(crearElement("Fragment " + i));
  }
  zona.appendChild(fragment); // només es toca el DOM una vegada
  sumarPunts("botoFragment", 3);
};
