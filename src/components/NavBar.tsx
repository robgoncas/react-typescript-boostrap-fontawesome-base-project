import React, { useState } from 'react';
import {Link} from 'react-router-dom';

interface IProps{}
interface IState{
}


let NavBar:React.FC = () => {

    let[state, setState] = useState<IState>({
        count: 0
    });
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">React Routing</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <Link to={'/'} className="nav-link">User List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} className="nav-link">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>

            </nav>
        </React.Fragment>

    )
}

export default NavBar;