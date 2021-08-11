import React from 'react'

const Header = (props) =>{
    return <header className="header">
            <div className="logo"> 
                <h1>
                     LOGO
                </h1>
             </div>
            <div className="menu">
                 <ul>
                        {props.children}
                 </ul> 
            </div>
    </header>
}



export default Header