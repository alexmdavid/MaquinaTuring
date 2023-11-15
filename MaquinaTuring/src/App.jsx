import './App.css'
import Settings from './Components/settings'
import Graph from './Components/Graph'
import History from './Components/history'
import Input from './Components/Input'
import Tape from './Components/Tape'
import { useState } from 'react'

function App() {
  return (
    <>
      <div className="Window">
        <h1 className="tittle">Maquina Turing</h1>
        <div className='WindowMain'>
          <div className='column WindowLeft'>
            <section className='posContent'>
                <Settings />
                <History />
            </section>
          </div>
          <div className="column WindowRight">
            <Graph />
            <Input />
          </div>
        </div>
        <Tape />
      </div>
    </>
  )
}

export default App
