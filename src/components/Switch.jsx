import '../styles/switch.css';

const Switch = ()=>{
    return(
        <>
<div className="switch-container">
  <span className='option'>Monthly</span>
  <div className="toggle-switch">
    <input type="checkbox" id="toggle" className="toggle-checkbox"></input>   
    <label htmlFor="toggle" className="toggle-label"> 
        <span className="toggle-handle"></span>
    </label> 
</div>
  <span className='option'>Yearly</span>
</div>
        </>
    )
}

export default Switch;