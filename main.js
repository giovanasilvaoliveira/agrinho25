let tamanhoFonte = 16;

function aumentarFonte() {
  if (tamanhoFonte < 30) {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  }
}

function diminuirFonte() {
  if (tamanhoFonte > 12) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  }
}

function toggleGaleria() {
  const galeria = document.getElementById("galeria");
  galeria.style.display = galeria.style.display === "none" ? "block" : "none";
}