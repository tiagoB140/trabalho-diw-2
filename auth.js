const API = "http://localhost:3000";

// LOGIN
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

  sessionStorage.setItem("usuario", JSON.stringify(user));
  window.location.href = "index.html";
}

// PEGAR USUÁRIO LOGADO
function getUsuarioLogado() {
  return JSON.parse(sessionStorage.getItem("usuario"));
}

// LOGOUT
function logout() {
  sessionStorage.removeItem("usuario");
  window.location.href = "index.html";
}

// VERIFICAR SE É ADMIN
function isAdmin() {
  const user = getUsuarioLogado();
  return user && user.admin === true;
}