import './App.css';
import Header from './components/Header';
import Hmmm from './components/hmmm';
import WelcomeDialog from './components/WelcomeDialog';
import React from 'react';


const App = () => {
  return (
    <div className='container'>
      <Header title='HELLO MATE'/>
      <Hmmm />
      <WelcomeDialog />
    </div>
  )
}


export default App;

