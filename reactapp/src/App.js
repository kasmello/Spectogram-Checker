import './App.css';
import Header from './components/Header';
import Hmmm from './components/hmmm';
import WelcomeDialog from './components/WelcomeDialog';
import States from './components/States';
import React from 'react';
import { useState } from 'react';


const App = () => {
  const [states, setStates] = useState([
    {
      id: 1,
      color: 'red'

    },
    {
      id: 2,
      color: 'yellow'
    }

  ])
  return (
    <div className='container'>
      <Header />
      <Hmmm />
      <WelcomeDialog />
      <States states={states}/>
    </div>
  )
}


export default App;

