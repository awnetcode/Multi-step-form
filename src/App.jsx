import { useState } from 'react';

import './App.css';
import Sidebar from './components/sidebar';
import MainContent from './components/MainContent';

function App() {
  const [activeStep, setStepActive] = useState('not_found');
  return (
    <>
    <Sidebar setStepActive={setStepActive}/>
    <MainContent activeStep={activeStep}/>
    </>
  )
}

export default App
