let numero = prompt("Ingresar Número del 1 al 10 \n Para Terminar poner Salir");
let tabla = "Tabla de Multiplicar";
while (numero != "SALIR" && numero != "salir" && numero != "Salir") {
  if (numero > 0 && numero < 11) {
    tabla = "Tabla de Multiplicar del Nro " + numero + "\n";
    for (let i = 1; i < 11; i++) {
      tabla = tabla + numero + " * " + i + " = " + numero * i + "\n";
    }
    alert(tabla);
  } else {
    alert("Solo se Acepta números entre 1 y 10");
  }
  numero = prompt("Ingresar Número del 1 al 10 \n Para Terminar poner SALIR");
}
alert("Gracias por Jugar con Nosotros a JavaScript");