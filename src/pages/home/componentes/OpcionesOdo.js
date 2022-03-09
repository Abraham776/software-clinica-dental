import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownItem,DropdownMenu, DropdownToggle } from 'reactstrap';
import  {AiOutlineReconciliation}  from 'react-icons/ai';
import './opciones.scss';
import { NavLink} from "react-router-dom";
const OpcionesOdo = () =>{
    const [dropdown, setDropdown]=useState(false);

    const abrir=()=>{
        setDropdown(!dropdown);
    }
    
    return(
        
        <div className="Menu">
            <Dropdown isOpen={dropdown} toggle={abrir} direction="right" >

                <DropdownToggle caret>
                <AiOutlineReconciliation className="me-2"/>Historiales 
                </DropdownToggle>
                <DropdownMenu className="menudemenu">
                    <DropdownItem header>Odontograma</DropdownItem>
                    <DropdownItem className="itemsM"><NavLink   to="/PacienteHistoOdonto" exact className="py-2 w-100 d-inline-block px-2">Odontograma Inicial</NavLink></DropdownItem>
                    <DropdownItem className="itemsM"><NavLink   to="/PacienteHistoOdontoAc" exact className="py-2 w-100 d-inline-block px-2">Odontograma Actual</NavLink></DropdownItem>
                    

                </DropdownMenu>
            </Dropdown>
            


        </div>


    )
};


export default OpcionesOdo;