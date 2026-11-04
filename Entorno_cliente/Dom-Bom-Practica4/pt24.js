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

    // === BOTONS D’ACCIÓ ===
    document.getElementById("botoCrear").onclick = () => {
      
      sumarPunts("botoCrear", 1);
    };

    document.getElementById("botoAfegir").onclick = () => {
      sumarPunts("botoAfegir", 1);
    };

    document.getElementById("botoPrepend").onclick = () => {
      sumarPunts("botoPrepend", 1);
    };

    document.getElementById("botoAbans").onclick = () => {
      sumarPunts("botoAbans", 1);
    };

    document.getElementById("botoDespres").onclick = () => {
      sumarPunts("botoDespres", 1);
    };

    document.getElementById("botoReemplaçar").onclick = () => {
      sumarPunts("botoReemplaçar", 2);
    };

    document.getElementById("botoEliminar").onclick = () => {
      sumarPunts("botoEliminar", 1);    
    };

    document.getElementById("botoClonar").onclick = () => {
        sumarPunts("botoClonar", 2);
    };

    document.getElementById("botoFragment").onclick = () => {
      sumarPunts("botoFragment", 3);
    };