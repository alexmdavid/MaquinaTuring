import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const Tape = forwardRef((props, ref) => {

    const tapeRef = useRef(null);
    let contador = useRef(0);

    // Utiliza useImperativeHandle para exponer específicamente la referencia que deseas
    useImperativeHandle(ref, () => ({
        miInputRef: tapeRef,
        agregarDiv: (contenido) => {


            // Encuentra el hijo con la clase 'cells'
            const cellsChild = tapeRef.current.querySelector('.cells');

            if (cellsChild) {
                // Agrega un nuevo div después del hijo con la clase 'cells'
                const nuevoDiv = document.createElement('div');
                nuevoDiv.className = 'cells';
                nuevoDiv.textContent = contenido;
                tapeRef.current.insertBefore(nuevoDiv, cellsChild.nextSibling);
            }


        },
    }));



    return (


        <div className="cell_dinamy" ref={tapeRef}>
            <div className="cells1"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cells"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="cellsB"></div>
            <div className="index"></div>
        </div>
    )
});

export default Tape