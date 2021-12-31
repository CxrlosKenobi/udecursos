import '../css/Header.css';
import logo from '../assets/logo.png';

import React, { useState } from 'react';
import data from '../data/careers-data';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


export default function Header() {
	const [career, setCareer] = useState({});
	let state = data.carreras;
 	
	function MenuPopupState(props) {

		return (
			<PopupState variant="popover" popupId="demo-popup-menu">
				{(popupState) => (
					<React.Fragment>
						<Button className='Dropdown' variant="contained" {...bindTrigger(popupState)}>
							{props.title}
						</Button>
						<Menu {...bindMenu(popupState)}>
							{state.map((item) => (
								<MenuItem key={item.id} onClick={() => {setCareer(item)}}>
									{item.name}
								</MenuItem>
							))}
						</Menu>
					</React.Fragment>
				)}
			</PopupState>
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
							<div className="presentation">
									<div id='img-container'>
											<a href="/">
													<img src={logo} alt="logo" height="70" width="52"/>
											</a>
									</div>
									<div id="heading-container">
											<h1>UdeCursos</h1>
									</div>
							</div>

							<ul id="NavBar">
									<NavItem go="/Inicio">Inicio</NavItem>
									<NavItem go="/Malla">Malla</NavItem>
									<MenuPopupState title='Carreras'/>
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
											<a href={career.link}
													target="_blank" rel="noopener noreferrer">
													{career.name}
											</a>
									</h3>
									<h3>
											<a href="http://secad.ing.udec.cl/horarios"
													target="_blank" rel="noopener noreferrer">
													UdeC 2021-2
											</a>
									</h3>
							</div>
					</div>

					<div id='accordion'>
						<ul>
							{
								state.map((item) => (
									<li key={item.id} onClick={(() => setCareer(item))} >
										{item.name}
									</li>
								))
							}
						</ul>
					</div>
			</header>
	)
}
