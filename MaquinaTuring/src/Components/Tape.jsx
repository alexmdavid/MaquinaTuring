import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect } from 'react';


const Tape = forwardRef(({ word }, ref) => {

    const tapeRef = useRef(null);
    const [animacionIniciada, setAnimacionIniciada] = useState(false);
    const [moverDerecha, setMoverDerecha] = useState(false);

    useImperativeHandle(ref, () => ({
        miInputRef: tapeRef,
        addCell: (contenido) => {
            const cellsChild = tapeRef.current.querySelector('#centro');

            if (cellsChild && cellsChild.parentNode) {
                if (cellsChild) {
                    const nuevoDiv = document.createElement('div');
                    nuevoDiv.className = 'cells';
                    nuevoDiv.textContent = contenido;

                    cellsChild.parentNode.insertBefore(nuevoDiv, cellsChild);
                }
            }
        },
        deleteCells: () => {
            const cells = tapeRef.current.querySelectorAll('.cells');

            // Itera sobre cada elemento y elimínalo
            cells.forEach((cell) => {
                cell.parentNode.removeChild(cell);
            });
        },
        replaceWithA: () => {
            const cells = tapeRef.current.querySelectorAll('.cells');
      
            for (let index = cells.length - 1; index >= 0; index--) {
              setTimeout(() => {
                cells[index].textContent = cells[index].textContent.replace(/b/g, 'a');
                if (index === 0) {
                  setAnimacionIniciada(true);
                }
              }, 1000 * (cells.length - 1 - index));
            }
          }
    }));


    return (

        <div className='tape'>
            <div className="cell_dinamy mover-derecha mover-izquierda" ref={tapeRef}>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cells1"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div id='centro'></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                {/* Rest of the divs... */}
            </div>
            <div className="index"></div>
        </div>
    )
});

export default Tape