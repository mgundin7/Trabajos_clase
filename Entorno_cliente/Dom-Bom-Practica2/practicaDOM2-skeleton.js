// ========== FUNCIONS D'UTILITAT ==========

// Ressalta visualment un element
function resalta(elem) {
  elem.classList.add('highlight');
  //Es perquè ressalti només un moment
  setTimeout(() => elem.classList.remove('highlight'), 1500);
}

// Mostra informació a la consola de manera ordenada
function info(titol, valor) {
  console.log(`--- ${titol} ---`);
  console.log(valor);
}

function log(msg) {
  const out = document.getElementById("log");
  out.textContent += msg + "\n";
  out.scrollTop = out.scrollHeight;
}

function netejaLog() {
  document.getElementById("log").textContent = "";
}

// ========== 1️⃣ RESSALTAR PRIMER I ÚLTIM FILL DE PRINCIPAL ==========

document.getElementById("botoResalta").addEventListener("click", () => {
    const principal = document.getElementById("principal");

    resalta(principal.firstElementChild);
    resalta(principal.lastElementChild);
    
    info("Primer fill de principal", principal.firstElementChild);
    info("Últim fill de principal", principal.lastElementChild);
})


// ========== 2️⃣ MOSTRAR GERMA ANTERIOR I SEGUENT DE LA SECCIO 2 ==========

document.getElementById("botoGermans").addEventListener("click", () => {
    const seccio = document.getElementById("article2");

    resalta(seccio.previousElementSibling);
    resalta(seccio.nextElementSibling);

    info("Germà anterior", seccio.previousElementSibling);
    info("Germà següent", seccio.nextElementSibling);
});


// ========== 3️⃣ MOSTRAR JERARQUIA DE PARES, ESCRIU PER CONSOLA EL TAGNAME DE LA JERARQUIA DELS PARES ==========

document.getElementById("botoPares").addEventListener("click", () => {
    let articulo = document.getElementById("article2");
    let nivell = 1;

    while (articulo = articulo.parentElement) {
        resalta(articulo);
        console.log("NIVELL " + nivell + ": " + articulo.tagName);
        nivell++;
    }

});


// ========== 4️⃣ TREBALLAR AMB TAULES ==========

document.getElementById("botoTaula").addEventListener("click", () => {
    const taula = document.getElementById("taulaDades");
    
    for (let i = 1; i < taula.rows.length; i++) {
        let edat = taula.rows[i].cells[1];

        edat.textContent = Number(edat.textContent) + 1;

        resalta(edat);
}
});


// ========== 5️⃣ CREAR I AFEGIR ELEMENTS DINÀMICAMENT ==========

document.getElementById("botoAfegeix").addEventListener("click", () => {
    const article = document.createElement("article");
    let articles = document.querySelectorAll("#principal article").length;
    let numero = articles + 1;

    article.className = "article" + numero;
    article.id = "article" + numero;

    const h2 = document.createElement("h2");
    h2.textContent = "Nova secció (" + numero + ")";

    const p = document.createElement("p");
    p.textContent = "Afegida dinàmicament amb JavaScript";

    article.appendChild(h2);
    article.appendChild(p);

    document.getElementById("principal").appendChild(article);

    info("Article creat", article);
});


// ====== 7️⃣ TIPUS DE NODES ======
document.getElementById("botoNodes").addEventListener("click", () => {
    const body = document.body;

    for (let node of body.childNodes) {
        log("Node: " + node.nodeName + " - Tipus: " + node.nodeType);
    }
});