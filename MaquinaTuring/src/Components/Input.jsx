import React, { useRef,forwardRef, useEffect,useState } from 'react';

const Input = forwardRef((props, ref)=> {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null)
  const characterList = useRef([]);


  useEffect(() => {
    // Accede a la referencia de la cinta (miInputRef) y realiza operaciones si es necesario
    if (ref.current) {
      console.log('Referencia de la cinta:', ref);
      // Puedes realizar otras operaciones aquí
    }
  }, [ref]);

  const handleChange = (event) => {
    const newValue = event.target.value;

    // Utilizar una expresión regular para aceptar solo 'a' y 'b'
    const filteredValue = newValue.replace(/[^ab]/g, '');

    // Mostrar alerta si se ingresó un caracter no permitido
    if (newValue !== filteredValue) {
      alert('Solo se permiten los caracteres "a" y "b".');
    }

    setInputValue(filteredValue);
  };

  function handleClick(){
    const inputValue = inputRef.current.value;

    // Guardar cada caracter en el arreglo
    const characters = inputValue.split('');
    characterList.current = characters;

    characterList.current.forEach(item => {
      ref.current.agregarDiv(item);
    });
  }


  


  return (
    <div className="box_phrase">
      <form>
        <label id="label_phrase" style={{ fontWeight: 'bold' }} htmlFor="input_phrase">
          Ingresa una palabra:
        </label>
        <br />
        <input
          type="text"
          id="input_phrase"
          placeholder="Write here"
          ref={inputRef}
          onChange={handleChange}
        />
        <button type="submit" id="button_phrase" onClick={handleClick} >
          Verificar
        </button>
      </form>
    </div>
  );
});

export default Input;
