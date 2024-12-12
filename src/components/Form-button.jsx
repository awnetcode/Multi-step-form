/* eslint-disable react/prop-types */

import '../styles/form-button.css'

const FormButton = function({btnText, onClick}){
    return(
        <>
        <button type='button' onClick={onClick} className='form-btn'>{btnText}</button>
        </>
    )
}

export default FormButton;