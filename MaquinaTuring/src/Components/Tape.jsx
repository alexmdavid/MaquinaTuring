import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const Tape = forwardRef((props, ref) => {

    const tapeRef = useRef(null);

    // Utiliza useImperativeHandle para exponer específicamente la referencia que deseas
    useImperativeHandle(ref, () => ({
        miInputRef: tapeRef,
        agregarDiv: (contenido) => {
            // Agrega un nuevo div a la referencia
            const nuevoDiv = document.createElement('div');
            nuevoDiv.className = 'cells';
            nuevoDiv.textContent = contenido;
            tapeRef.current.appendChild(nuevoDiv);
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