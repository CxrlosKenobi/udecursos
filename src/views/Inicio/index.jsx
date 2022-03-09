import React from 'react';
//
import { CommitList } from './GitHubAPI';
import { SectionsGrid } from './Grid';
import gitBranch from '../../assets/gitBranch.png';
//
import './index.scss';


export function Inicio() {
	return (
		<main id='Inicio'>
			<div id='Main-body'>
				<section id='First-row'>
					<h1>✨ Explora</h1>
					<SectionsGrid />
				</section>
				<section id="Second-row">
					<div className='aux-title'>
						<img src={gitBranch} className='git-branch-svg' alt='Changelogs Udecursos'/>
						<h1>Últimos cambios</h1>
					</div>
					<CommitList />
				</section>
			</div>
		</main>
	);
};
