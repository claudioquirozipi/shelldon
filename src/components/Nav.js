import React, { Component } from 'react';
import './Nav.css';


class Nav extends Component {
    render() {
        
        
        return(
            <nav className="nav">
                <div className="nav__logo">Logo</div>
                
                {this.props.user
                    ?
                    <ul className="nav__ul">
                        <li>hola</li>
                    </ul>
                    :
                    <ul className="nav__ul">
                        <li>Login......</li>
                        <li>Logout</li>
                    </ul>
                }
                    
                    
                
                
            </nav>
        );
    }
}
export default Nav;