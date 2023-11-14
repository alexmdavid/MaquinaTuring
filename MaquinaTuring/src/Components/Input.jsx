import React, { useState } from 'react';

function Input() {
  const [inputValue, setInputValue] = useState('');

  // Función para manejar cambios en el input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Función para validar la palabra
  const validateWord = () => {
    // Aquí puedes realizar la lógica para validar la palabra ingresada
    // Por ejemplo, imprimir la palabra en la consola por ahora
    console.log('Palabra ingresada:', inputValue);
    // También puedes añadir aquí la lógica necesaria para manejar la validación de la palabra
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario (recargar la página)
    validateWord();
  };

  return (
    <div className="box_regular_phrase">
      <form onSubmit={handleSubmit}>
        <label style={{ fontWeight: 'bold' }} htmlFor="input_regular_phrase">
          Ingresa una palabra:
        </label>
        <br />
        <input
          type="text"
          id="input_regular_phrase"
          placeholder="Write here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" id="button_regular_phrase">
          Verificar
        </button>
      </form>
    </div>
  );
}

export default Input;
