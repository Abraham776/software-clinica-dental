//	Sánchez Plazola José Abraham
//	27/02/2022
//  Componentes y driver de la función Odontograma del software
import React, { useEffect, useReducer, useRef } from 'react';
import './Tooth.css';
import useContextMenu from 'contextmenu';
import 'contextmenu/ContextMenu.css';

//Componente diente encargado de cada diente individual en el odontograma
function Tooth({ number, positionX, positionY, onChange, initialState = {
	Cavities: {
		center: 0,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	Extract: 0,
	Crown: 0,
	Filter: 0,
	Fracture: 0
} }) {

	//Reducer para modificar los valores del estado del diente en el JSON
	function reducer(toothState, action) {
		switch (action.type) {
			case 'crown':
				return { ...toothState, Crown: action.value };
			case 'extract':
				return { ...toothState, Extract: action.value };
			case 'filter':
				return { ...toothState, Filter: action.value };
			case 'fracture':
				return { ...toothState, Fracture: action.value };
			case 'carie':
				return { ...toothState, Cavities: setCavities(toothState, action.zone, action.value) };
			case 'clear':
				return initialState;
			default:
				throw new Error();
		}
	}

	//Funciones para cada modificación del diente
	const crown = (val) => ({ type: "crown", value: val });
	const extract = (val) => ({ type: "extract", value: val });
	const filter = (val) => ({ type: "filter", value: val });
	const fracture = (val) => ({ type: "fracture", value: val });
	const carie = (z, val) => ({ type: "carie", value: val, zone: z });
	const clear = () => ({ type: "clear" });

	//hooks para el reducer y el menu contextual de la app
	const [toothState, dispatch] = useReducer(reducer, initialState);
	const [contextMenu, useCM] = useContextMenu({ submenuSymbol: '>' });
	const firstUpdate = useRef(true);

	//Llamado a la función de Odontogram handleToothUpdate
	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		onChange(number, toothState);
	}, [toothState, onChange, number]);

	// Done SubMenu
	const doneSubMenu = (place, value) => {
		return {
			'Caries': () => {
				dispatch(carie(place, value));
			},
			'Todas Caries': () => dispatch(carie('all', value)),
			'Ausente': () => dispatch(extract(value)),
			'Corona': () => dispatch(crown(value)),
			'Filtrado': () => dispatch(filter(value)),
			'Fracturado': () => dispatch(fracture(value)),
		}
	}

	// Todo SubMenu
	const todoSubMenu = (place, value) => {
		return {
			'Caries': () => {
				dispatch(carie(place, value)); 
			},
			'Todas Caries': () => dispatch(carie('all', value)),
			'Ausente': () => dispatch(extract(value)),
			'Corona': () => dispatch(crown(value)),
			'Filtrado': () => dispatch(filter(value)),
			'Fracturado': () => dispatch(fracture(value)),
		}
	}

	// Main ContextMenu
	const menuConfig = (place) => {
		return {
			'Hecho': doneSubMenu(place, 1),
			'Para hacer': todoSubMenu(place, 2),
			'JSX line': <hr></hr>,
			'Borrar todo': () => dispatch(clear()),
		}
	};

	// Función para decodificar el "por hacer" y "hecho" del json
	let getClassNamesByZone = (zone) => {
		if (toothState.Cavities) {
			if (toothState.Cavities[zone] === 1) {
				return 'to-do';
			} else if (toothState.Cavities[zone] === 2) {
				return 'done';
			}
		}

		return '';
	}

	// Posición del diente
	const translate = `translate(${positionX},${positionY})`;

	//Renderizado del diente
	return (
		<svg className="tooth">
			<g transform={translate}>
				<polygon
					points="0,0 20,0 15,5 5,5"
					onContextMenu={useCM(menuConfig('top'))}
					className={getClassNamesByZone('top')}
				/>
				<polygon
					points="5,15 15,15 20,20 0,20"
					onContextMenu={useCM(menuConfig('bottom'))}
					className={getClassNamesByZone('bottom')}
				/>
				<polygon
					points="15,5 20,0 20,20 15,15"
					onContextMenu={useCM(menuConfig('left'))}
					className={getClassNamesByZone('left')}
				/>
				<polygon
					points="0,0 5,5 5,15 0,20"
					onContextMenu={useCM(menuConfig('right'))}
					className={getClassNamesByZone('right')}
				/>
				<polygon
					points="5,5 15,5 15,15 5,15"
					onContextMenu={useCM(menuConfig('center'))}
					className={getClassNamesByZone('center')}
				/>
				{drawToothActions()}
				<text
					x="6"
					y="30"
					stroke="navy"
					fill="navy"
					strokeWidth="0.1"
					className="tooth">
					{number}
				</text>
			</g>
			{contextMenu}
		</svg>
	)

	//Función para colocar las caries en cada zona del diente
	function setCavities(prevState, zone, value) {
		if (prevState && prevState.Cavities) {
			if (zone === "all") {
				prevState.Cavities =
				{
					center: value,
					top: value,
					bottom: value,
					left: value,
					right: value
				}
			} else {
				prevState.Cavities[zone] = value;
			}

			return prevState.Cavities;
		}
	}

	//Función para dibujar los estados especiales del diente
	function drawToothActions() {
		let otherFigures = null;
		if (toothState.Extract > 0) {
			otherFigures = <g stroke={toothState.Extract === 1 ? "#08b4ff" : "#2a2b28"}>
				<line x1="0" y1="0" x2="20" y2="20" strokeWidth="1.5" />
				<line x1="0" y1="20" x2="20" y2="0" strokeWidth="1.5" />
			</g>
		}

		if (toothState.Fracture > 0) {
			otherFigures = <g stroke={toothState.Fracture === 1 ? "#08b4ff" : "#2a2b28"}>
				<line x1="0" y1="10" x2="20" y2="10" strokeWidth="1.5"></line>
			</g>
		}

		if (toothState.Filter > 0) {
			otherFigures = <g stroke={toothState.Filter === 1 ? "#08b4ff" : "#2a2b28"}>
				<line x1="0" y1="20" x2="20" y2="0" strokeWidth="1.5" />
			</g>
		}

		if (toothState.Crown > 0) {
			otherFigures = <circle
				cx="10"
				cy="10"
				r="9"
				fill="none"
				stroke={toothState.Crown === 1 ? "#08b4ff" : "#2a2b28"}
				strokeWidth="1.5"
			/>;
		}

		return otherFigures;
	}
}

export default Tooth;