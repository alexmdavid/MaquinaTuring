import './App.css';
import Settings from './Components/settings';
import Graph from './Components/Graph';
import React, { useRef, useState } from 'react';
import History from './Components/History';
import Input from './Components/Input';
import Tape from './Components/Tape';

function App() {
  const tapeRef = useRef(null);
  const [word, setWord] = useState([]);

  // Function to update the word in App
  const updateWord = (newWord) => {
    setWord(newWord);
  };

  return (
    <>
      <div className="Window">
        <h1 className="tittle">Turing Machine</h1>
        <div className='WindowMain'>
          <div className='column WindowLeft'>
            <section className='posContent'>
              <Settings />
              <History />
            </section>
          </div>
          <div className="column WindowRight">
            {/* Pass the function to update the word to Input */}
            <Input updateWord={updateWord} ref={tapeRef}/>
            {/* Pass the word to Graph */}
            <Graph word={word} />
          </div>
        </div>
        {/* Pass tapeRef as a prop to the Tape component */}
        <Tape word={word} ref={tapeRef} />
      </div>
    </>
  );
}

export default App;
