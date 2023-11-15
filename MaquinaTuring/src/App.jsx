import './App.css'
import Settings from './Components/settings'
import Graph from './Components/Graph'
import React, { useRef } from 'react';
import History from './Components/History';
import Input from './Components/Input';
import Tape from './Components/Tape';
import { useState } from 'react';

function App() {
  // Create a ref to the Tape component
  const tapeRef = useRef(null);


  return (
    <>
      <div className="Window">
        <h1 className="tittle">Maquina Turing</h1>
        <div className='WindowMain'>
          <div className='column WindowLeft'>
            <section className='posContent'>
              {/* You can pass the tapeRef as a prop to components that need it */}
              {/* Example: <Settings tapeRef={tapeRef} /> */}
              <Settings />
              <History />
            </section>
          </div>
          <div className="column WindowRight">
            <Graph />
            
            {/* Pasa tapeRef como prop al componente Input */}
            <Input ref={tapeRef} />
          </div>
        </div>
        {/* Pasa tapeRef como prop al componente Tape */}
        <Tape ref={tapeRef} />
      </div>
    </>
  );
}

export default App;
