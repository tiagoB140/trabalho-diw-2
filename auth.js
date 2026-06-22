const API = "http://localhost:3000";

// ===================== LOGIN =====================
async function loginUsuario(login, senha) {
  const res = await fetch(`${API}/usuarios`);
  const usuarios = await res.json();

  const user = usuarios.find(u =>
    u.login === login && u.senha === senha
  );

  if (!user) {
    alert("Login inválido");
    return;
  }

  // 🔥 garante campo favoritos sempre existir
  if (!user.favoritos) {
    user.favoritos = [];
  }

  sessionStorage.setItem("usuario", JSON.stringify(user));
  window.location.href = "index.html";
}

// ===================== USUÁRIO LOGADO =====================
function getUsuarioLogado() {
  return JSON.parse(sessionStorage.getItem("usuario"));
}

// ===================== LOGOUT =====================
function logout() {
  sessionStorage.removeItem("usuario");
  window.location.href = "index.html";
}

// ===================== ADMIN =====================
function isAdmin() {
  const user = getUsuarioLogado();
  return user && user.admin === true;
}

// ===================== FAVORITOS (NOVO) =====================

// adicionar ou remover favorito
async function toggleFavorito(idItem) {

  let user = getUsuarioLogado();

  if (!user) {
    alert("Faça login primeiro");
    return;
  }

  if (!user.favoritos) {
    user.favoritos = [];
  }

  if (user.favoritos.includes(idItem)) {
    user.favoritos = user.favoritos.filter(id => id !== idItem);
  } else {
    user.favoritos.push(idItem);
  }

  // atualizar no JSONServer
  await fetch(`${API}/usuarios/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  // atualizar sessão
  sessionStorage.setItem("usuario", JSON.stringify(user));
}