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

			try {
				const response = await octokit.request(
					`GET /repos/{owner}/{repo}/commits`, 
					{ owner, repo, per_page: 5 }
				);
				if (response.status === 200)
				{
					setCommits(response)
					setReceived(true)
				} else {
					console.log("Couldn't fetch data from the GitHub API :(")
					setReceived(false)
				}
			} catch(e) {
				console.log(e)
			}
		}
		fetchAPI()
	}, [])
	
	// Aux function
	function parseDate(date) {
		let y = date.split('T')[0].split('-')[0]
		let m = date.split('T')[0].split('-')[1]
		let d = date.split('T')[0].split('-')[1]

		return `${d}/${m}/${y}`
	}

	useEffect(() => {
		if (received) {
			console.log(commits)
			setChangelogs(
				commits.data.map(request => {
					return (
						<div key={request.sha} className="commit">
							<div className='profilepic-container'>
								<img src={request.author.avatar_url} alt='GitHub profile pic' className='profilepic' />
							</div>
							<div className='commit-info'>
								<h2 className='_login' alt={request.commit.author.name}>@{request.author.login}</h2>
							</div>
							<div className='commit-desc'>
								<p className='_desc'>{request.commit.message}</p>
							</div>
							<div className='_date'>
								<h2>{parseDate(request.commit.author.date)}</h2>
							</div>
						</div>
					)
				})
			)
		} else {
			setChangelogs(
			<div id='changelogs-error'>
				<p>Obteniendo datos de la API . . .</p>
			</div>
			)
		}
	}, [received, commits])
	return changelogs
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
						</div>
						<CommitList /> 	
				</div>
		</div>
	)
}
