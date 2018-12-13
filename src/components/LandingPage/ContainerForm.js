import React, {Component} from 'react';
import './ContainerForm.css';
import firebase from 'firebase';

class ContainerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: "login",
            title: "logeate",
            mesageError: " "
        }
        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleClouse = this.handleClouse.bind(this);
        this.handleViewLogin = this.handleViewLogin.bind(this);
        this.myRender = this.myRender.bind(this)
      }
      handleAuth(e) {
        e.preventDefault();
        const email = e.target.email.value
        const password =e.target.password.value
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(function(error) {
            console.log("hecho", error)
          }
        );
      }
      handleLogin(e) {
        e.preventDefault();
        const email = e.target.email.value
        const password =e.target.password.value
        firebase.auth().signInWithEmailAndPassword(email, password)
          .catch(function(error) {
            console.log("Huvo un error", error)
          }
        );
      }
      handleClouse() {
          this.props.toggle();
      }
      handleViewLogin(event) {
          this.setState({ view: event.target.id})
      }
      myRender() {
          console.log(this.state.view)
        if(this.state.view == "login" || this.state.view =="login2") {
            this.setState(() =>{ this.state.title = "Entrar"})
            return(
                <form className="login__form" onSubmit={this.handleLogin}>
                    <label className="login__label">
                        <input className="login__input" 
                            type="email" 
                            name="email" 
                            required
                            placeholder="Correo corporativo"
                        />
                    </label>
                    <label className="login__label">
                        <input 
                            className="login__input" 
                            type="password"  
                            name="password" 
                            min="6"
                            max="16"
                            required
                        />
                    </label>
                    <h3 className="login__mesageError">* mensaje de error </h3>
                    <button className="login__buttom" >Login</button>
                    {/* <div className="login__buttom">Registrase con
                        <img className="login__imgGoogle" src={require('../../img/google-plus.svg')} />
                    </div> */}
                    <div 
                        className="login__subtitle"
                        id="create"
                        onClick={this.handleViewLogin}
                    >
                        Registrarse
                    </div>
                    <div 
                        className="login__forgetPassword"
                        id="forget"
                        onClick={this.handleViewLogin}
                        >Forget my password
                    </div>
                </form>
            )
        } else if (this.state.view == "forget") {
            this.setState(() =>{ this.state.title = "¿Olvidaste tu contraseña?"})
            return(
                <form className="login__form">
                    <input className="login__input" type="text" name="email" />
                    <button className="login__buttom">Enviar</button>
                    <div 
                        className="login__subtitle" 
                        id="login2"
                        onClick={this.handleViewLogin}
                        >Ya estoy registrado
                    </div>
                </form>
            )
        } else if (this.state.view == "create") {
            this.setState(() =>{ this.state.title = "Crea un usuario"})
            return(
                <form className="login__form" onSubmit={this.handleAuth}>
                    <div className="container__raido">
                        <input type="radio" id="radio1" name="primero"/>
                        <label className="login__labelRadio" for="radio1" >Medio</label>
                        <input type="radio" id="radio2" name="primero" />
                        <label className="login__labelRadio" for="radio2" >Anunciante</label>
                    </div>
                    <input className="login__input" type="text" name="email" required/>
                    <input className="login__input" type="password"  name="password" required/>
                    <input className="login__input" type="password"  name="text" required/>
                    <input className="login__input" type="password"  name="text" required/>
                    <h3 className="login__mesageError">* mensaje de error </h3>
                    <button className="login__buttom" >Crear </button>
                    <div 
                        className="login__subtitle" 
                        id="login"
                        onClick={this.handleViewLogin}
                        >Ya estoy registrado
                    </div>

                </form>
            )
        }
      }
    render() {
        
        return(
            <div className="ContainerForm" style={this.props.loginStyle}>
                <div className="login__clouse" onClick={this.handleClouse}>X</div>
                <h3 className="login__title">{this.state.title}</h3>
                <h3 className="login__mesageError">{this.state.mesageError}</h3>
                {this.myRender()}              
            </div>
        );
    }
}
export default ContainerForm;