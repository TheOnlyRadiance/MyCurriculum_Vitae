const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    btnTema.textContent = "Modo Claro";
  } else {
    btnTema.textContent = "Modo Oscuro";
  }
});