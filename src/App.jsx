import { useState } from 'react';

import './styles/App.css';
import Sidebar from './components/sidebar';
import MainContent from './components/MainContent';
//import Footer from './components/Footer';

function App() {
  const [activeStep, setStepActive] = useState('1');
  return (
    <>
    <div id="container">
    <Sidebar setStepActive={setStepActive}/>
    <MainContent activeStep={activeStep} setStepActive={setStepActive}/>
    {/* <Footer /> */}
    </div>
    </>
  )
}

export default App
