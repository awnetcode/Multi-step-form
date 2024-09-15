import '../styles/form2.css';
import '../styles/form1.css';

import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

import FormButton from './Form-button';

const Form2 = function(){
    return(
        <>
        <form action="#" className="step1">
            <div className="form-title">
                <h1>Select your plan</h1>
                <h3>You have the option of monthly or yearly billing.</h3>
            </div>

            <fieldset className='input-radio'>
  <legend>Select a maintenance drone:</legend>

  <div className='select-option'>
    <input type="radio" id="huey" name="drone" value="Arcade" checked />
    <img src={arcade} alt="icon" />
    <label htmlFor="huey">Arcade</label>
  </div>

  <div className='select-option'>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <img src={advanced} alt="icon" />
    <label htmlFor="dewey">Advanced</label>
  </div>

  <div className='select-option'>
    <input type="radio" id="louie" name="drone" value="louie" />
    <img src={pro} alt="icon" />
    <label htmlFor="louie">Pro</label>
  </div>
</fieldset>
            <div className="step2-part">
            </div>
            <div className="step2-part"></div>
            <div className="step2-part"></div>
            <FormButton/>
        </form>
        </>
    )
}

export default Form2;