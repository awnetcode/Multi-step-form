import '../styles/sidebar.css';

// eslint-disable-next-line react/prop-types
const Sidebar = ({setStepActive})=>{
    return(
        <>
        <nav className="sidebar-navigation">
            <ul className="sidebar-list">
                <li className="sidebar-link" onClick={()=>setStepActive('1')}>1</li>
                <li className="sidebar-link" onClick={()=>setStepActive('2')}>2</li>
                <li className="sidebar-link" onClick={()=>setStepActive('3')}>3</li>
                <li className="sidebar-link" onClick={()=>setStepActive('4')}>4</li>
            </ul>
        </nav>
        
        </>
    )
}

export default Sidebar;