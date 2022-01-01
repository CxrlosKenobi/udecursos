import '../css/Utilidades.css'
import Timing from '../components/Timing.jsx'


export default function Utilidades() {
		return (
				<div id="body-utilidades">
						<section id="body-selector">
							<h1>Herramientas</h1>
							<ul>
									<li>Timing</li>
									<li id="wip">En progreso ...</li>
							</ul>
						</section>
						<section id="stage">
								<Timing />
						</section>
				</div>
		);
}
