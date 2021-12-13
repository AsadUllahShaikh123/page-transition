import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../../style.css'
function Header() {
    let navigate = useNavigate();
    return (
       <div className="header">
           <div className="title" onClick={()=> navigate('/')}>
               Animal
           </div>
           <div className="middle"></div>
           <div >
               <ul className="links">
                   <li onClick={()=> navigate('/')}>Home</li>
                   <li onClick={()=> navigate('/about')}>About</li> 
                   <li onClick={()=> navigate('/contact')}>Contact</li>
               </ul>
           </div>
       </div>
    )
}

export default Header;
