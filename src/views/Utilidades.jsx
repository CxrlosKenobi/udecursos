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
			<div className='weight-container'>
				<h2>Ingresa tus notas y su respectivo porcentaje de ponderación</h2>
				<div style={{display: 'flex'}}>
					<section className='w-row'>
						<div className='exam-num'>
							<h3>Certámenes</h3>
							<p>1</p>
						</div>

						<div className='weights'>
							<h3>Ponderación</h3>
							<div className='weight-input'>
								<input type="text" className="form-control" placeholder="-"/>
								<p>%</p>
							</div>
						</div>

						<div className='grade'>
							<h3>Calificación</h3>
							<input type="text" className="form-control" placeholder="-"/>
						</div>
					</section>


					<section className='w-row'>
						<div className='exam-num'>
							<h3>Tareas</h3>
							<p>1</p>
						</div>

						<div className='weights'>
							<h3>Ponderación</h3>
							<div className='weight-input'>
								<input type="text" className="form-control" placeholder="-"/>
								<p>%</p>
							</div>
						</div>

						<div className='grade'>
							<h3>Calificación</h3>
							<input type="text" className="form-control" placeholder="-"/>
						</div>
					</section>
				</div>

				<div className='final-grade'>
					<h3>Calificación Final: </h3>
					<p>None</p>
				</div>

			</div>
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
