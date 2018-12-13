import React, {Component} from 'react';
import './Nav.css';

//Componentes
import ContainerForm from './ContainerForm';

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            loginStyle: {
                click: true,
                display: "none"
            }

        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle() {
        
        if(this.state.loginStyle.click){
            this.setState({
                loginStyle: {click: false, display: "flex"}
            })
        } else {
            this.setState({
                loginStyle: {click: true, display: "none"}
            })
        }
        
    }
    render() {
        return(
            <nav className="landing__nav">
                <div>Sheldon</div>
                <ul className="nav__ul">
                    <li onClick={this.handleToggle}>Login</li>
                    <ContainerForm loginStyle={this.state.loginStyle} toggle={this.handleToggle}/>
                </ul>
            
            </nav>
        );
    }
}
export default Nav;