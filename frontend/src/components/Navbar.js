import React from 'react'
import logo from '../assets/logo.png';
import SearchIcon from '@material-ui/icons/Search';

export const Navbar = () => {
    return (
        <React.Fragment>
            <div>
            <header>
                <div className="conatainer">
                    <div className="menu">
                        <img className="image" src={logo} alt="img"/>
                        <div className="search">
                            <input type="text" className="input" placeholder="Nunca dejes de buscar"/>
                            <a href="#" className="btn"><SearchIcon className="icon"/></a>                                            
                        </div>                    
                    </div>
                </div>
            </header>
            </div>
            <body>

            </body>
        </React.Fragment>
    )
}
