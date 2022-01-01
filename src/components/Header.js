	import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import logo from '../assets/logo.png';
import data from '../data/careers-data';


export default function Header() {
	const [career, setCareer] = useState({id: 99, name: '(Elige una carrera del menu)', link: ''});
	let careerData = data.carreras;
	
	const [state, setState] = useState(false);
	const [accordion, setAccordion] = useState(null);

	useEffect(() => {
		if (career.id === 99) {
			document.querySelector('#career').style.color = '#707070';
		}
	}, [career])

	useEffect(() => {
		if (state) {
			 setAccordion(
				<div id='accordion'>
					<ul>
						{careerData.map((option) => (
							<li key={option.id} 
									style={option.name === career.name ? {
										fontWeight: 'bold', textDecoration: 'underline #4c2bee'} : {}}
									onClick={(() => {
										setCareer(option);
										document.querySelector('#RightHeader a').style.color = '#10162F';
										setTimeout(() => setState(false), 300);
									})} >
								{option.name}
							</li>
						))}
					</ul>
				</div>
			); 
		} 
		else {
			setAccordion(<div></div>)
		}
	}, [state, careerData, career]);
	

	function AccordionMenu(props) {
		return (
			<li className='aux-li' onClick={() => state ? setState(false) : (setState(true))}>
				{props.children}
			</li>
		);
	}

	function NavItem(props) {
		return (
				<li>
						<a href={props.go}>
								{props.children}
						</a>
				</li>
		);
	}


	return (
			<header className="Header">
				<div className="HeaderContent">
							<div className="presentation" onClick={() => window.location.href = '/Inicio'}>
									<div id='img-container'>
												<img src={logo} alt="Logo" height="70" width="52"/>
									</div>
									<div id="heading-container">
											<h1>UdeCursos</h1>
									</div>
							</div>

							<ul id="NavBar">
									<NavItem go="/Inicio">Inicio</NavItem>
									<NavItem go="/Malla">Malla</NavItem>
									<AccordionMenu>Carreras</AccordionMenu>
									<NavItem go="/Utilidades">Utilidades</NavItem>
							</ul>

							{/* Mobile view */}
							<nav id="navigation">
									<div id="menu-toggle">
											<input type="checkbox" />
											<span></span>
											<span></span>
											<span></span>
											<ul id="menu">
													<li><a href="/Inicio">Inicio</a></li>
													<li><a href="/Malla">Malla</a></li>
													<li><a href="/Utilidades">Utilidades</a></li>
											</ul>
									</div>
							</nav>

							<div id="RightHeader">
									<h3>
											{career.id !== 99 ? (
												<a id='career' href={career.link}
													arget="_blank" rel="nostateer noreferrer">
													{career.name}
												</a>
											) : 
											(<p id='career' onClick={() => state ? setState(false) : (setState(true))}>
												{career.name}
											</p>)}
									</h3>
									<h3>
											<a href="http://secad.ing.udec.cl/horarios"
													target="_blank" rel="nostateer noreferrer">
													UdeC 2021-2
											</a>
									</h3>
							</div>
					</div>
					{accordion}
			</header>
	)
}
