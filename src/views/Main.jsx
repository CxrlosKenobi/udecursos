import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';
import '../css/Main.css';
import { token } from '../data/octok.json';
import malla from '../assets/malla.png';
import mallaBlur from '../assets/mallaBlur.png';
import gitBranch from '../assets/gitBranch.png';


function CommitList() {
	const [received, setReceived] = useState(false)
	const [changelogs, setChangelogs] = useState(null)

	const [commits, setCommits] = useState([]);
	const octokit = new Octokit({ auth: token })

	useEffect(() => {
		async function fetchAPI() {
			const owner = 'CxrlosKenobi', repo = 'udecursos'

			const response = await octokit.request(
        `GET /repos/{owner}/{repo}/commits`, 
				{ owner, repo, per_page: 5 }
			);
			response.length > 0 
			? (
				setCommits(response) && console.log(response) && setReceived(true)
			) 
			: (
				console.log("Couldn't fetch data from the GitHub API :(") && setReceived(false) && console.log(response)
			)
		}
		fetchAPI()
	}, [])

	useEffect(() => {
		if (received) {
			setChangelogs(
				console.log(commits.data)
			)
		} else {
			setChangelogs(
				<p id='changelogs-error'>Uh oh, debe haber un error de conexión :( <br/>Intentando recuperar datos de la API . . .</p>
			)
		}
	}, [received, commits])

	return (changelogs);
}

export default function Main() {
	const [state, setState] = useState(false)
	const [content, setContent] = useState('')

	useEffect(() => {
		if (!state) {
			setContent(<img src={malla} alt='Malla'/>)
		} else {
			setContent(
				<>
					<img src={mallaBlur} alt='Malla'/>
					<p>
						Mueve los ramos de tu malla al semestre que quieras.
						<br/>¡Visualiza su continuidad, créditos y evita atrasarte! 
					</p>
				</>
			)
		}		
	}, [state])

	return (
		<div id='Main'>
				<section className='spacer'></section>
				<div id='main-body'>
						<div className='first-row'>
								<h1 style={{marginLeft: '5px', userSelect: 'none'}}>✨ Explora</h1>
								<div id='explore-container'>

									<div className='window-box'
										onClick={() => window.location.href = '/Malla'}>
										<section className='img-container' 
											onMouseOver={() => setState(true)}
											onMouseLeave={() => setState(false)}>
											{content}
										</section>
										<section className='box-content'>
											<h3> Malla Interactiva </h3>
										</section>
									</div>

									<div id='explore-2'>
										<div className='window-box' style={{height: '145px', width: '400px'}}>
											<section className='img-container' style={{height: '100%'}}>
												<h3>Cálculadora de Ponderaciones</h3>
												<h4>Utilidades</h4>
											</section>
										</div>

										<div className='window-box' style={{height: '145px', width: '400px'}}>
											<section className='img-container' style={{height: '100%'}}>
												<h3>Creador de Horario UdeC</h3>
											</section>
										</div>
									</div>

								</div>
						</div>
						<div className="second-row">
							<div className='aux-title'>
								<img src={gitBranch} className='git-branch-svg' alt='Changelogs Udecursos'/>
								<h1>Últimos cambios</h1>
							</div>
							<CommitList /> 
						</div>
				</div>
		</div>
	)
}
