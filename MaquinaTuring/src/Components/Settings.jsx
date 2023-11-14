import React, { useState } from 'react';

function Settings() {
  // Declaración de estados para el idioma seleccionado y el tiempo de ejecución
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [runTime, setRunTime] = useState(1);

  // Función para manejar cambios en la selección de idioma
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  // Función para manejar cambios en el tiempo de ejecución
  const handleRunTimeChange = (event) => {
    setRunTime(event.target.value);
  };

  return (
    <div className="hero">
      {/* Select para elegir el idioma */}
      <select id="languageSelector" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="pt">Português</option>
      </select>

      {/* Input para introducir el tiempo de ejecución */}
      <input
        type="number"
        id="input_run_time"
        value={runTime}
        onChange={handleRunTimeChange}
      />
    </div>
  );
}

export default Settings;