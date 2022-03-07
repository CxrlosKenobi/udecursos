import React from 'react';
//
import { CommitList } from './GitHubAPI';
import malla from '../../assets/malla.png';
import gitBranch from '../../assets/gitBranch.png';
//
import './index.scss';


export function Inicio() {

	return (
		<main id='Inicio'>
			<div id='Main-body'>
				<section id='First-row'>
					<h1>✨ Explora</h1>
				</section>
				<section id="Second-row">
					<div className='aux-title'>
						<img src={gitBranch} className='git-branch-svg' alt='Changelogs Udecursos'/>
						<h1>Últimos cambios</h1>
					</div>
				</section>
				<CommitList />
			</div>
		</main>
	);
};
