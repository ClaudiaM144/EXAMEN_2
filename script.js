const lista = [
  { username: "admin", password: "admin.123", nivel: 1 },
  { username: "supervisor", password: "super.123", nivel: 2 },
  { username: "captura", password: "cap.123", nivel: 3 }
];

if (!localStorage.getItem("datos")) {
  localStorage.setItem("datos", JSON.stringify(lista));
}

const usuarios = JSON.parse(localStorage.getItem("datos"));

function validar() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const validUser = usuarios.find(
    user => user.username === username && user.password === password
  );

  if (!validUser) {
    alert("Usuario y/o contraseña incorrectos!");
    return;
  }

  switch (validUser.nivel) {
    case 1:
      window.location.href = "admin.html";
      break;
    case 2:
      window.location.href = "supervisor.html";
      break;
    case 3:
      window.location.href = "captura_datos.html"; 
      break;
    default:
      alert("Nivel de usuario no válido.");
  }
}
