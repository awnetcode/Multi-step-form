import '../styles/form2.css';
import '../styles/form1.css';

import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

import FormButton from './Form-button';
import Switch from './Switch';

const Form2 = function(){
    return(
        <>
        <form action="#" className="step1">
            <div className="form-title">
                <h1>Select your plan</h1>
                <h3>You have the option of monthly or yearly billing.</h3>
            </div>
<fieldset className='input-radio'>
  <div className='select-option'>
    <input type="radio" id="arcade" name="drone" value="Arcade"/>
    <label htmlFor="arcade">
    <img src={arcade} alt="icon" />
    <div className="option-info">
      <span className="option-name">Arcade</span>
      <span className="option-price">$9/mo</span>
      <span className="discount-info"></span>
    </div>
    </label>
  </div>
  <div className='select-option'>
  <input type="radio" id="advanced" name="drone" value="advanced" />
    <label htmlFor="advanced">
    <img src={advanced} alt="icon" />
    <div className="option-info">
      <span className="option-name">Advanced</span>
      <span className="option-price">$12/mo</span>
      <span className="discount-info"></span>
    </div>
    </label>
  </div>
  <div className='select-option'>
    <input type="radio" id="pro" name="drone" value="pro"/>
    <label htmlFor="pro">
    <img src={pro} alt="icon" />
    <div className="option-info">
      <span className="option-name">Pro</span>
      <span className="option-price">$15/mo</span>
      <span className="discount-info"></span>
    </div>
    </label>
  </div>
<Switch />
</fieldset>
            <FormButton/>
</form>
        </>
    )
}

export default Form2;