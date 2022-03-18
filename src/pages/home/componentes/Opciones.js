import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { AiOutlineAudit } from 'react-icons/ai';
import './opciones.scss';
import { NavLink } from "react-router-dom";
const Opciones = () => {
	const [dropdown, setDropdown] = useState(false);

	const abrir = () => {
		setDropdown(!dropdown);
	}

	return (

		 <div className="Menu">
		    <Dropdown isOpen={dropdown} toggle={abrir} direction="right" >

			<DropdownToggle caret>
			<AiOutlineAudit className="me-2"/>Historiales 
			</DropdownToggle>
			<DropdownMenu className="menudemenu">
			    <DropdownItem header>Historiales</DropdownItem>
			    <DropdownItem className="itemsM"><NavLink   to="/PacienteHistoHistoriales1" exact className="py-2 w-100 d-inline-block px-2">Rehabilitacion oral</NavLink></DropdownItem>
			    <DropdownItem className="itemsM"><NavLink   to="/PacienteHistoHistoriales2" exact className="py-2 w-100 d-inline-block px-2">Ortodoncia</NavLink></DropdownItem>
			    <DropdownItem className="itemsM"><NavLink   to="/PacienteHistoHistoriales3" exact className="py-2 w-100 d-inline-block px-2">Odontopediatría</NavLink></DropdownItem>
			    <DropdownItem className="itemsM"><NavLink   to="/PacienteHistoHistoriales4" exact className="py-2 w-100 d-inline-block px-2">Endodoncia</NavLink></DropdownItem>
			    <DropdownItem className="itemsM"><NavLink   to="/PacienteHistoHistoriales5" exact className="py-2 w-100 d-inline-block px-2">Odontologia General</NavLink></DropdownItem>

			</DropdownMenu>
		    </Dropdown>



		</div>


	)
};


export default Opciones;
