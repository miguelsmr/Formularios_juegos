// ===== 1. DATOS: ARRAY DE VIDEOJUEGOS =====
const videojuegos = [
  { nombre: "The Legend of Zelda: Tears of the Kingdom", compania: "Nintendo", plataforma: "Nintendo Switch", valoracion: 9.6, precio: 69.99 },
  { nombre: "Elden Ring", compania: "FromSoftware", plataforma: "Multiplataforma", valoracion: 9.5, precio: 59.99 },
  { nombre: "God of War Ragnarök", compania: "Santa Monica Studio", plataforma: "PlayStation 5", valoracion: 9.4, precio: 79.99 },
  { nombre: "Forza Horizon 5", compania: "Playground Games", plataforma: "Xbox Series X", valoracion: 9.2, precio: 69.99 },
  { nombre: "Minecraft", compania: "Mojang", plataforma: "PC", valoracion: 9.0, precio: 29.99 }
];

// ===== 2. FUNCIÓN QUE PINTA LA TABLA =====
function pintarTabla() {
  const tbody = document.getElementById("cuerpoTabla");
  tbody.innerHTML = ""; // vaciamos la tabla para no duplicar filas

  videojuegos.forEach(function (juego) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${juego.nombre}</td>
      <td>${juego.compania}</td>
      <td>${juego.plataforma}</td>
      <td>${juego.valoracion}</td>
      <td>${juego.precio.toFixed(2)} €</td>
    `;
    tbody.appendChild(fila);
  });
}

// Pintamos la tabla nada más cargar la página
pintarTabla();

// ===== 3. FORMULARIO: AÑADIR JUEGOS =====
const btnAnadir = document.getElementById("btnAnadir");
const formJuego = document.getElementById("formJuego");
const mensaje = document.getElementById("mensaje");

btnAnadir.addEventListener("click", function () {

  // Recogemos los valores de los campos
  const nombre = document.getElementById("nombre").value.trim();
  const compania = document.getElementById("compania").value.trim();
  const plataforma = document.getElementById("plataforma").value;
  const valoracionTexto = document.getElementById("valoracion").value;
  const precioTexto = document.getElementById("precio").value;

  // Validación: si algún campo está vacío, avisamos y no añadimos
  if (nombre === "" || compania === "" || plataforma === "" ||
      valoracionTexto === "" || precioTexto === "") {
    mensaje.textContent = "⚠️ Rellena todos los campos antes de añadir el juego.";
    mensaje.style.color = "red";
    return;
  }

  // Convertimos texto a número
  const valoracion = parseFloat(valoracionTexto);
  const precio = parseFloat(precioTexto);

  // Creamos el objeto con la misma forma que los del array
  const nuevoJuego = {
    nombre: nombre,
    compania: compania,
    plataforma: plataforma,
    valoracion: valoracion,
    precio: precio
  };

  // Lo añadimos al array y volvemos a pintar la tabla
  videojuegos.push(nuevoJuego);
  pintarTabla();

  // Limpiamos el formulario
  formJuego.reset();
  document.getElementById("nombre").focus();

  // Mensaje de éxito
  mensaje.textContent = "✅ " + nombre + " añadido correctamente.";
  mensaje.style.color = "green";
});
