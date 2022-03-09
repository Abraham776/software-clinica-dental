import React from "react";
import Sidebar from "../componentes/sidebar";
import Boton from "../componentes/BotonP";
import "../home.scss";

const Paciente = () => {

   

    return(
        
        <div className="home-contenido">



          
            <div className="contenido-in">
             
            <Sidebar/>
            
                Paciente
                <Boton text="Ver"/>

            </div>
            


        </div>


    )




};

export default Paciente;