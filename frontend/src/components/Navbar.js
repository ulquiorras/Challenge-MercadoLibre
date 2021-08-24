import React, {useState} from 'react'
import logo from '../assets/logo.png';
import SearchIcon from '@material-ui/icons/Search';

const inputValue ={
    name:''
}

export const Navbar = () => {
    const [values, setValues] = useState(inputValue)

    function onChange(ev){
        const {name, value} = ev.target;
        /* console.log("hola") */
    }
    return (
        <React.Fragment>
            <div>
            <header>
                <div className="conatainer">
                    <div className="menu">
                        <img className="image" src={logo} alt="img"/>
                        <div className="search">
                            <input type="text" className="input" name="name" placeholder="Nunca dejes de buscar" onChange={onChange} />
                            {/* {console.log(values)} */}
                            <a onClick={event =>  window.location.href=`/items/search/${values}`}  className="btn"><SearchIcon className="icon"/></a>                                            
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
