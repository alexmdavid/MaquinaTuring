import React, { useRef, forwardRef, useEffect, useState } from 'react';

const Input = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null)
  const characterList = useRef([]);
  const [isWordValid, setIsWordValid] = useState(false);


  useEffect(() => {
    // Accede a la referencia de la cinta (miInputRef) y realiza operaciones si es necesario
    if (ref.current) {
      console.log('Referencia de la cinta:', ref);
      // Puedes realizar otras operaciones aquí
    }
  }, [ref]);

  const [errorMessage, setErrorMessage] = useState('');
  // Utilizar una expresión regular para aceptar solo 'a' y 'b'
  const pattern_word = /^[ab]+$/;

  const handleChange = (event) => {

    const value = event.target.value;
    setIsWordValid(pattern_word.test(value));

    // Mostrar alerta si se ingresó un caracter no permitido
    if (value.trim() === '') {
      setErrorMessage('this field is required');
    } else if(!isWordValid) {
      setErrorMessage('this word is not valid');
    } else {
      setErrorMessage('');
    }

  };

  const handleClick = () => {
    const inputValue = inputRef.current.value;

    // Guardar cada caracter en el arreglo
    const characters = inputValue.split('');
    characterList.current = characters;

    characterList.current.forEach(item => {
      ref.current.agregarDiv(item);
      ref.current.moveRight();
    });
  }




  return (
    <div className="box_phrase">
      <label id="label_phrase"
        style={{ fontWeight: 'bold' }}
        htmlFor="input_phrase">
        Ingresa una palabra:
      </label>
      <br />
      <input
        type="text"
        id="input_phrase"
        placeholder="Write here"
        ref={inputRef}
        onChange={handleChange}
        //onKeyDown={handleClick}
        //disabled={!isWordValid}
      />

      {errorMessage && (<p>{errorMessage}<br/><br/></p>)}

      <button type="submit"
        id="button_phrase"
        onClick={handleClick} 
        disabled={!isWordValid}>
        Verificar
      </button>
    </div>
  );
});

export default Input;
