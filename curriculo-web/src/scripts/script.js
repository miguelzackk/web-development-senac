document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("cursosToggle");
  const listaCursos = document.getElementById("listaCursos");

  toggleButton.addEventListener("click", function () {
    listaCursos.classList.toggle("hidden");

    if (listaCursos.classList.contains("hidden")) {
      toggleButton.textContent = "Mostrar Cursos (24)";
    } else {
      toggleButton.textContent = "Ocultar Cursos";
    }
  });

  const themeButton = document.getElementById("themeToggle");

  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
