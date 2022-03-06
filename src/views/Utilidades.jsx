import React, { useEffect, useState } from 'react';
//
import './Utilidades.css'


export function Utilidades() {
	const [option, setOption] = useState(0)
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
		const [certs, setCerts] = useState(2)
		const [tareas, setTareas] = useState(2)

		return (
			<div className='weight-container'>
				<h2>Ingrese sus notas y su respectivo porcentaje de ponderación</h2>
				<div style={{display: 'flex'}}>

					<section className='w-row'>
						<div className='exam-num'>
							<h3>Certámenes</h3>

							{Array(certs).fill(0).map((_, i) => (
								<div key={i}>
									<p>{i + 1}</p>
								</div>
							))}
							
						</div>

						<div className='weights'>
							<h3>Ponderación</h3>
							{Array(certs).fill(0).map((_, i) => (
								<div className='weight-input' key={i}>
									<input type="text" className="form-control" placeholder="-"/>
									<p>%</p>
								</div>
							))}


							<div style={{display: 'flex'}}>
								<buttton className='plus-button' onClick={
									() => { if ((0 < certs) && (certs < 6)) setCerts(certs + 1) }
								} />
								<button className='minus-button' onClick={
									() => { if (certs > 1) setCerts(certs - 1) }
								} />
							</div>
						</div>

						<div className='grade'>
							<h3>Calificación</h3>
							{Array(certs).fill(0).map((_, i) => (
								<input type="text" className="form-control" placeholder="-" key={i} />
							))}
						</div>
					</section>


					<section className='w-row'>
						<div className='exam-num'>
							<h3>Tareas</h3>
							{Array(tareas).fill(0).map((_, i) => (
								<div key={i}>
									<p>{i + 1}</p>
								</div>
							))}
						</div>

						<div className='weights'>
							<h3>Ponderación</h3>
							{Array(tareas).fill(0).map((_, i) => (
								<div className='weight-input' key={i}>
									<input type="text" className="form-control" placeholder="-"/>
									<p>%</p>
								</div>
							))}
							<div style={{display: 'flex'}}>
								<buttton className='plus-button' onClick={
									() => { if ((0 < tareas) && (tareas < 8)) setTareas(tareas + 1) }
								} />
								<button className='minus-button' onClick={
									() => { if (tareas > 1) setTareas(tareas - 1) }
								} />
							</div>
						</div>

						<div className='grade'>
							<h3>Calificación</h3>
							{Array(tareas).fill(0).map((_, i) => (
								<input type="text" className="form-control" placeholder="-" key={i} />
							))}
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
