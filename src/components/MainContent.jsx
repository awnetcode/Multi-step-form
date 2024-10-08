import '../styles/main-content.css';

import Form1 from './form1';
import Form2 from './Form2';

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

    default:
        content = <Form1/>;
    }

    return(
        <>
        <main className="form-area">
    {content}
        </main>    
        </>
    )
}

export default MainContent;