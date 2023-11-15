import React, { useEffect, useRef } from 'react';

const Graph = ({word}) => {
  const canvasRef = useRef(null);
  const contentWidth = 1000; // Ancho del contenido dentro del canvas
  const contentHeight = 500; // Alto del contenido dentro del canvas
  const zoomFactor = 1.5; // Factor de zoom inicial

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let scale = zoomFactor;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Aplicar transformaciones al contexto solo para el zoom
      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      // lógica de dibujo actual

      // funciones para dibujos ****************************************
      //Arrows Function
      function drawArrow(startX, startY, endX, endY) {
        // Línea principal de la flecha
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      //arrow heap
      function arrowHead(endX, endY) {
        // Punta de la flecha
        ctx.beginPath();
        ctx.moveTo(endX - 10, endY - 5);
        ctx.lineTo(endX, 0);
        ctx.lineTo(endX - 10, endY + 5);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      //curve arrow function
      function drawCurvedArrow(fromNode) {
        var startAngle = Math.PI / 7;
        var endAngle = Math.PI - Math.PI / 7;
        var anticlockwise = true;

        ctx.beginPath();
        ctx.arc(fromNode.x, fromNode.y - fromNode.r, fromNode.r, startAngle, endAngle, anticlockwise);
        ctx.stroke();
      }

      //state funcion
      function drawState(x, y, r, start, end, ah) {
        ctx.beginPath();
        ctx.arc(x, y, r, start, end, ah);
        ctx.closePath();
        ctx.stroke();
      }

      // instancia de estados y arista ***********************************************
      var nodes = [
        { id: 0, label: "q1", x: 150, y: 200, r: 30 },
        { id: 1, label: "q2", x: 300, y: 200, r: 30 },
        { id: 2, label: "q3", x: 450, y: 200, r: 30 }
      ];

      var edges = [
        // Aristas de p a p
        { from: 0, to: 0, labels: ["a, a / R", "b, a / R"] },
        // Aristas de p a q
        { from: 0, to: 1, labels: ["λ, λ / L"] },
        // Aristas de q a q
        { from: 1, to: 1, labels: ["a, a / L"] },
        // Arista de q a r
        { from: 1, to: 2, labels: ["λ, λ / R"] },
      ];


      // dibujo de estados y su nombre ***************************************************
      nodes.forEach(function (node) {
        drawState(node.x, node.y, node.r, 0, 2 * Math.PI, false);
        ctx.fillStyle = "black"; // Color del texto
        ctx.font = "bold 18px Arial";
        ctx.fillText(node.label, node.x - 10, node.y + 4);
      });


      // dibujo de lineas de arista ***************************************************
      edges.forEach(function (edge) {

        var fromNode = nodes.find(node => node.id === edge.from);
        var toNode = nodes.find(node => node.id === edge.to);

        // draw arrows
        if (edge.from !== edge.to) {

          var startXFrom = fromNode.x + fromNode.r;
          var startYFrom = fromNode.y;

          var endXTo = toNode.x - toNode.r;
          var endYTo = toNode.y;

          drawArrow(startXFrom, startYFrom, endXTo, endYTo);
          //arrowHead(endX, endY);
        } else {
          drawCurvedArrow(fromNode);
        }
      });

      // etiquetas de la arista *****************************************************************+
      edges.forEach(function (edge) {
        // draw label
        ctx.fillStyle = "black"; // Color del texto
        ctx.font = "bold 14px Arial";

        var fromNode = nodes.find(node => node.id === edge.from);
        var toNode = nodes.find(node => node.id === edge.to);

        var midX = (fromNode.x + toNode.x) / 2;
        var midY = (fromNode.y + toNode.y) / 2;

        edge.labels.forEach(function (label, index) {
          var labelX = midX - ctx.measureText(label).width / 2;
          var labelY = midY - (index + 0.5) * 20;
          if (edge.from === edge.to) {
            ctx.fillText(label, labelX, labelY - fromNode.r * 2);
          } else {
            ctx.fillText(label, labelX, labelY);
          }
        });
      });

      // Restaurar transformación
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    };

    // Dibujar inicialmente
    draw();

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      const prevScale = scale;
      scale = Math.min(Math.max(0.1, scale + delta), 4);

      // Ajustar offsetX y offsetY para mantener el zoom en el centro
      const offsetX = (canvas.width / scale - contentWidth) / 2;
      const offsetY = (canvas.height / scale - contentHeight) / 2;

      // Aplicar transformaciones al contexto solo para el zoom
      ctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);

      // Dibujar con la nueva escala
      draw();
    };

    // Event listeners para el zoom
    canvas.addEventListener('wheel', handleWheel);

    return () => {
      canvas.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div>
      <h2 id="tittle_automaton">Grafo Del Autómata</h2>
      <canvas id="box_automaton" width={contentWidth} height={contentHeight} ref={canvasRef}></canvas>
    </div>
  );
}

export default Graph;