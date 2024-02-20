// Lista de precios
const entrada = 8;
const camping = 15;
const cabaña = 100;
const quincho = 2;
const visitaGuiada = 25;
const rafting = 20;

// Variables
let total = 0;
let noches = 0;
let diasVisitaGuiada = 0;
let horasQuincho = 0;
let diasRafting = 0;
let servicioActual = "";

// Recorrer la lista de servicios
while (servicioActual !== "fin") {

  
  servicioActual = prompt("Ingrese el servicio (o 'fin' para terminar):").trim();

  if (servicioActual === "entrada") {
    total += entrada;
  } else if (servicioActual === "camping") {
    noches = parseInt(prompt("¿Cuántas noches desea acampar?"));
    total += noches * camping;
  } else if (servicioActual === "cabaña") {
    noches = parseInt(prompt("¿Cuántas noches desea alojarse en la cabaña?"));
    total += noches * cabaña;
  } else if (servicioActual === "quincho") {
    horasQuincho = parseInt(prompt("¿Cuántas horas desea usar el quincho?"));
    total += horasQuincho * quincho;
  } else if (servicioActual === "visitaGuiada") {
    diasVisitaGuiada = parseInt(prompt("¿Cuántos días desea la visita guiada?"));
    total += diasVisitaGuiada * visitaGuiada;
  } else if (servicioActual === "rafting") {
    diasRafting = parseInt(prompt("¿Cuántos días desea realizar rafting?"));
    total += diasRafting * rafting;
  } else if (servicioActual !== "fin") {
    console.log("Servicio no válido. Intente nuevamente.");
  }
}

// Mostrar el precio total
console.log("El precio total a pagar es: $" + total);
alert("El precio total a pagar es: $" + total);