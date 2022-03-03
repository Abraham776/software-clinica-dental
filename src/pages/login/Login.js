import React from "react";
import Titulo from "./componentes/Titulo";
import Label from "./componentes/Label";
import Input from "./componentes/Input";
import Boton from "./componentes/Boton";
import Logo from "./componentes/Logo";
import "./login.css";




const Login = () => {

    

    return(
        <div className="login-contenido">
            

          <div className="login-cuadro">
            <Logo/>

                <Titulo text='Inicio de sesion'/>
                    <Label text='Usuario'/>
                    <Input type="text" placeholder="Ingrese su usuario"/>
                    <Label text='Contraseña'/>
                    <Input type="password" placeholder="Ingrese su contraseña"/>

            <div className="Submit-boton">
             <Boton text='Iniciar'/>
            </div>
                   <br/>
          </div>
        </div>

    )
    
    
};

export default Login;