import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';


const Tape = forwardRef(({ word }, ref) => {

    const tapeRef = useRef(null);

    useImperativeHandle(ref, () => ({
        miInputRef: tapeRef,
        agregarDiv: (contenido) => {
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
        }        
    }));

    



    return (

        <div className='tape'>
            <div className="cell_dinamy" ref={tapeRef}>
                <div className="cells1"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div className="cellsB"></div>
                <div  id='centro'></div>
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