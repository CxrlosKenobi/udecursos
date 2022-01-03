import React, { useEffect, useState } from 'react';
import '../css/Utilidades.css'


export default function Utilidades() {
	const [option, setOption] = useState(99)
	const [Stage, setStage] = useState('')
	
	const tools = {
		0: { name: 'Calcular Ponderaciones' },
		1: { name: 'Timing' },
	}

	useEffect(() => {
		switch (option) {
			case '0':
				setStage(<Weight />)
				break
			case '1':
				setStage(<Timing />)
				break
			default:
				setStage(<div>Eliga una de las herramientas disponibles, o crea la tuya!</div>)
		}
	}, [option])


	function Weight() {
		return (
			<>
				<h2>Calculating weight of grades!</h2>
				
			</>
		)
	}
	

	function Timing() {
		return (
			<>
				<h2>Calculating the timing of a faster lecture!</h2>
			</>
		)
	}

	return (
			<div id="body-utilidades">
					<section id="body-selector">
						<h1>Herramientas</h1>
						<ul>
								{Object.keys(tools).map((tool) => {
										return (
											<li key={tool} 
												onClick={() => { setOption(tool) }}
												style={option === tool 
													? {fontWeight: 'bold', textDecoration: 'underline #4c2bee'}
													: {}}
											>
												{tools[tool].name}
											</li>
										)
								})}
								<li id="wip">En progreso ...</li>
						</ul>
					</section>
					<section id="stage">{Stage}</section>
			</div>
	);
}
