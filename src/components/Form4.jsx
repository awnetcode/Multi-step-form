import '../styles/form1.css';

import FormButton from './Form-button';

// eslint-disable-next-line react/prop-types
const Form4 = ({setStepActive}) =>{
    return(
        <>
        <form action="#" className="step-form">
            <div className="form-title">
                <h1>Finishing up</h1>
                <h3>Double-check everything looks OK before confirming</h3>
            </div>
                <div className="options">
                    <div className="option"></div>
                    <div className="option"></div>
                    <div className="option"></div>
                </div>
        </form>
<FormButton btnText={'Confirm'} onClick={()=>setStepActive('5')}/>
        </>
    )
}

export default Form4;