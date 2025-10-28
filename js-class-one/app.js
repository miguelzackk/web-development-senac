document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("#botao-magico");
  const mensagem = document.querySelector("#mensagem-principal");

  botao.addEventListener("click", () => {
    mensagem.textContent = "ação executada! 👍";

    botao.style.backgroundColor = "green";
    botao.textContent = "feito";
  });
});
