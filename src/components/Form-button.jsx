/* eslint-disable react/prop-types */

import '../styles/form-button.css'

const FormButton = function({btnText}){
    return(
        <>
        <button type='submit' className='form-btn'>{btnText}</button>
        </>
    )
}

export default FormButton;