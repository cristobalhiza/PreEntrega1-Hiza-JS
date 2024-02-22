// Lista de precios
const entrada = 8;
const camping = 15;
const cabaña = 80;
const quincho = 4;
const tourGuiado = 25;
const rafting = 20;

// Variables
let total = 0;
let noches = 0;
let horasTourGuiado = 0;
let horasQuincho = 0;
let horasRafting = 0;
let servicioActual = "";

if (confirm("Bienvenido a Reserva Natural Kalfu, la entrada al parque tiene un valor de $8")) {
  total += entrada;
  alert("Los servicios disponibles son: camping, cabaña, quincho, tour guiado, rafting");
}
else { servicioActual = "ok"; };


// Recorrer la lista de servicios
while (servicioActual !== "ok") {

  servicioActual = prompt("Ingrese el servicio que desee contratar (o 'Ok' para terminar):", "Ok").trim().toLowerCase();

  if (servicioActual === "camping") {
    noches = parseInt(prompt("¿Cuántas noches desea acampar?"));
    total += noches * camping;
  } else if (servicioActual === "cabaña") {
    noches = parseInt(prompt("¿Cuántas noches desea alojarse en la cabaña?"));
    total += noches * cabaña;
  } else if (servicioActual === "quincho") {
    horasQuincho = parseInt(prompt("¿Cuántas horas desea usar el quincho?"));
    total += horasQuincho * quincho;
  } else if (servicioActual === "tour guiado") {
    horasTourGuiado = parseInt(prompt("¿Cuántas horas desea el tour guiado?"));
    total += horasTourGuiado * tourGuiado;
  } else if (servicioActual === "rafting") {
    horasRafting = parseInt(prompt("¿Cuántas horas desea realizar rafting?"));
    total += horasRafting * rafting;
  } else if (servicioActual !== "ok") {
    alert("Servicio no válido. Intente nuevamente.");
  }
}

// Mostrar el precio total
if (servicioActual = "ok") { alert("El precio total a pagar es: $" + total + ", muchas gracias por su visita") }