import '../styles/form1.css';

import FormButton from './Form-button';


// eslint-disable-next-line react/prop-types
const Form1 = function({setStepActive}){
    return(
        <>
        <form action="#" className="step-form">
                <div className="form-title">
                    <h1>Personal info</h1>
                    <h3>Please provide your name, email adress, and phone number.</h3>
                </div>
                <div className="form-part">
                <label htmlFor="" className="input-name">Name</label><br></br>
                <input type="text" className="form-field" name='name' placeholder='e.g. Stephen King'/><br></br>
                </div>
                <div className="form-part">
                <label htmlFor="" className="input-name">Email Adress</label><br></br>
                <input type="text" className="form-field" name='email' placeholder='e.g. stephenking@lorem.com'/><br></br>
                </div>
                <div className="form-part">
                <label htmlFor="" className="input-name">Phone Number</label><br></br>
                <input type="text" className="form-field" name='phone' placeholder='e.g. +1 234 567 890'/><br></br>
                </div>
                <FormButton btnText={'Next Step'} onClick={()=>setStepActive('2')} />
            </form>
        </>
    )
};

export default Form1;