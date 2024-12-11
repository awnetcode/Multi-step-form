import '../styles/form1.css';
import '../styles/form3.css';

import FormButton from './Form-button';

const Form3 = () =>{
    return(
        <>
            <form action="#" className="step-form">
            <div className="form-title">
                <h1>Pick add-ons</h1>
                <h3>Add-ons help enchance your gaming experience</h3>
            </div>
            <div className="add-on"> 
                <div className="add-on-option">
                   <input type="checkbox" id="" className=""></input>
                   <div className='add-on-info'>
                       <h3>Online service</h3>
                       <h4>Access to multiplayer games</h4>
                   </div>
                </div>
                <span className="add-on-price">+$1/mo</span>
            </div>  
            <div className="add-on"> 
                <div className="add-on-option">
                   <input type="checkbox" id="" className=""></input>
                   <div className='add-on-info'>
                       <h3>Larger storage</h3>
                       <h4>Extra 1TB of cloud save</h4>
                   </div>
                </div>
                <span className="add-on-price">+$2/mo</span>
            </div> 
            <div className="add-on"> 
                <div className="add-on-option">
                   <input type="checkbox" id="" className=""></input>
                   <div className='add-on-info'>
                       <h3>Customizable profile</h3>
                       <h4>Custom theme on your profile</h4>
                   </div>
                </div>
                <span className="add-on-price">+$2/mo</span>
            </div>         
            </form>
            <FormButton btnText={'Next Step'}/>
        </>
    )
}

export default Form3;