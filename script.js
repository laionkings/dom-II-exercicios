const botao = document.querySelector("#botao");
botao.addEventListener("click", adicionaItem);

function adicionaItem() {
  // Seleciona o container onde o item será adicionado
  const container = document.querySelector("#container");

  // Cria um novo elemento <div> para o item
  const item = document.createElement("div");

  // Adiciona o texto ao item
  item.innerText = "Novo Item";

  // Define a classe do item
  item.classList.add("item");

  // Adiciona o ouvinte de evento de clique ao item
  item.addEventListener("click", removeItem);

  // Adiciona o item ao container
  container.appendChild(item);
}

function removeItem(event) {
  // Pega o elemento clicado
  const item = event.target;

  // Remove o elemento clicado do container
  item.parentNode.removeChild(item);
}

const item = document.createElement("div");
item.innerText = "Novo Item";
item.addEventListener("click", removeItem);
