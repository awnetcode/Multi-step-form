import '../styles/main-content.css';

import Form1 from './form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

// eslint-disable-next-line react/prop-types
const MainContent = ({activeStep})=>{

    let content;

    switch(activeStep){
        case '1':
            content = <Form1/>;
            break;
        case '2':
            content = <Form2/>;
            break;
        case '3':
            content = <Form3/>;
            break;
        case '4':
            content = <Form4/>;
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