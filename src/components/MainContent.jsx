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
            content = <Form2/>
            break;

    default:
        content = 'Strona na razie jest w budowie, wiec wiesz co masz robić aby działało.'
    }

    return(
        <>
        <main className="form-container">
    {content}
        </main>    
        </>
    )
}

export default MainContent;