import '../styles/main-content.css';

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Finish from './Finish';

// eslint-disable-next-line react/prop-types
const MainContent = ({activeStep, setStepActive})=>{

    let content;

    switch(activeStep){
        case '1':
            content = <Form1 activeStep={activeStep} setStepActive={setStepActive} />;
            break;
        case '2':
            content = <Form2 setStepActive={setStepActive} />;
            break;
        case '3':
            content = <Form3 setStepActive={setStepActive} />;
            break;
        case '4':
            content = <Form4 setStepActive={setStepActive} />;
            break;
        case '5':
            content = <Finish />;
            break;

    default:
        content = <Form1/>;
    }

    return(
        <>
        <main className="form-area">
        <div className="form-container">
    {content}
        </div>
        </main>    
        </>
    )
}

export default MainContent;