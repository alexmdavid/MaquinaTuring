import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';

<<<<<<< HEA
=======
const Tape = forwardRef(({word}, ref) => {

>>>>>>> 4b4d916c79c74313e280b846e8163138b2406d8e
    const tapeRef = useRef(null);

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
            {/* Rest of the divs... */}
        </div>
    )
});

export default Tape