document.addEventListener("DOMContentLoaded", function () {
  const btnIncrease = document.getElementById("btn-increase");
  const btnDecrease = document.getElementById("btn-decrease");
  const btnContrast = document.getElementById("btn-contrast");

  let currentFontSize = 20; // Tamanho padrão em pixels
  const minFontSize = 16;
  const maxFontSize = 32;

  // Aumentar o tamanho do texto
  btnIncrease.addEventListener("click", function () {
    if (currentFontSize < maxFontSize) {
      currentFontSize += 2;
      document.body.style.fontSize = currentFontSize + "px";
    }
  });

  // Diminuir o tamanho do texto
  btnDecrease.addEventListener("click", function () {
    if (currentFontSize > minFontSize) {
      currentFontSize -= 2;
      document.body.style.fontSize = currentFontSize + "px";
    }
  });

  // Alternar o modo de alto contraste
  btnContrast.addEventListener("click", function () {
    document.body.classList.toggle("high-contrast");
  });
});