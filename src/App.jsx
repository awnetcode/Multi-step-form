import { useState } from 'react';

import './styles/App.css';
import Sidebar from './components/sidebar';
import MainContent from './components/MainContent';
//import Footer from './components/Footer';

function App() {
  const [activeStep, setStepActive] = useState('not_found');
  return (
    <>
    <div id="container">
    <Sidebar setStepActive={setStepActive}/>
    <MainContent activeStep={activeStep}/>
    {/* <Footer /> */}
    </div>
    </>
  )
}

export default App
