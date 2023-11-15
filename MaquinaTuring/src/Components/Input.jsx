import React, { useRef, forwardRef, useEffect, useState } from 'react';
import enviarPalabraAlServidor from './SendWords';

const Input = forwardRef(({ updateWord }, ref) => {

  const [lleno, setState] = useState(false);

  // Código del componente Input

  const inputRef = useRef(null)
  const characterList = useRef([]);
  const [isWordValid, setIsWordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const pattern_word = /^[ab]+$/;

  useEffect(() => {
    // Accede a la referencia de la cinta (miInputRef) y realiza operaciones si es necesario
    if (ref.current) {
      console.log('Referencia de la cinta:', ref);
      // Puedes realizar otras operaciones aquí
    }
  }, [ref]);

  const handleChange = (event) => {

    const value = event.target.value;
    setIsWordValid(pattern_word.test(value));

    // Mostrar alerta si se ingresó un caracter no permitido
    if (value.trim() === '') {
      setErrorMessage('this field is required');
    } else if (!isWordValid) {
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

    if (ref.current) {

      if (!lleno) {
        characterList.current.forEach(item => {
          ref.current.addCell(item);
          setState(true);
          console.log(item)
        });
      } else {
        console.log(lleno)
        setState(false);
        ref.current.deleteCells();
        characterList.current.forEach(item => {
          ref.current.addCell(item);
          setState(true);
          console.log(item)
        });
      }

      setTimeout(() => {
        ref.current.replaceWithA();
      }, 2000);
    }

    if (isWordValid) {
      const charArray = inputValue.split('');
      updateWord(charArray);
    }

  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && isWordValid) {
      handleClick();
    }
  }


  return (
    <div className="box_phrase">
      <label id="label_phrase"
        style={{ fontWeight: 'bold' }}
        htmlFor="input_phrase">
        Ingresa una palabra:
      </label>
      {errorMessage && (<p style={{ color: 'red' }}>{errorMessage}</p>)}
      <input
        type="text"
        id="input_phrase"
        placeholder="Write here"
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

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
