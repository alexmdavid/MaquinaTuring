

function addCell() {
  // Crea un nuevo div y agrega el estilo de clase (opcional)
  var addDiv = $("<div>").addClass("cells");

  // Agrega el nuevo div al cuerpo del documento
  $(".cells").before(addDiv);

}



function writecells() {

  var cadena = document.getElementById('caracterInput').value;
  document.getElementById('caracterInput').value = "";
  var cells = document.getElementsByClassName('cells');

  // Verifica si la cadena es más larga que el número de celdas
  while (cadena.length > cells.length) {
    addCell();
  }

  // Agrega cada carácter a una celda diferente
  for (var i = 0; i < cadena.length; i++) {
    cells[i].innerText = cadena[i];
  }
  cadena = "";
  move()

}

function move() {
  var container = $(".cell_dinamy");
  var cellWidth = $(".cells").width(); // Ancho de cada celda
  var cellsCount = $(".cells").length; // Cantidad total de celdas
  var pixelsToMove = cellWidth * cellsCount;

  var currentScroll = container.scrollLeft();
  container.animate({ scrollLeft: currentScroll + pixelsToMove }, 7000); // 500 es la duración de la animación en milisegundos
}



