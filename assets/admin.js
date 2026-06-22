const API = "http://localhost:3000";

// LISTAR ITENS
async function listarItens() {
  const res = await fetch(`${API}/itens`);
  const itens = await res.json();

  const tabela = document.getElementById("tabela");
  tabela.innerHTML = "";

  itens.forEach(item => {
    tabela.innerHTML += `
      <tr>
        <td>${item.id}</td>
        <td>${item.titulo}</td>
        <td>
          <button onclick="editarItem(${item.id})">Editar</button>
          <button onclick="deletarItem(${item.id})">Excluir</button>
        </td>
      </tr>
    `;
  });
}

// ADICIONAR ITEM
async function adicionarItem() {
  const item = {
    titulo: document.getElementById("titulo").value,
    descricao: document.getElementById("descricao").value,
    imagem: document.getElementById("imagem").value,
    destaque: false
  };

  await fetch(`${API}/itens`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(item)
  });

  listarItens();
}

// DELETAR
async function deletarItem(id) {
  await fetch(`${API}/itens/${id}`, {
    method: "DELETE"
  });

  listarItens();
}

// EDITAR (simples)
async function editarItem(id) {
  const novoTitulo = prompt("Novo título:");

  await fetch(`${API}/itens/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ titulo: novoTitulo })
  });

  listarItens();
}