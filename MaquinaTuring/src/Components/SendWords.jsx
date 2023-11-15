import axios from 'axios';

const enviarPalabraAlServidor = async (palabra) => {
  try {
    const response = await axios.post('http://localhost:5000/agregar_palabra', { palabra });
    console.log(response.data);
    // Puedes realizar acciones adicionales después de enviar la palabra
  } catch (error) {
    console.error('Error al enviar la palabra al servidor:', error);
  }
};

export default enviarPalabraAlServidor;
