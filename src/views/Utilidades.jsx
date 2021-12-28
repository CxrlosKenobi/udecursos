import '../css/Utilidades.css'
import Timing from '../components/Timing.jsx'

const UtilSelector = () => {
    return (
        <>
            <h1>Tools</h1>
            <ul>
                <li>Timing</li>
                <li id="wip">En progreso ...</li>
            </ul>
        </>
    );
}


const Utilidades = () => {
    return (
        <div id="body-utilidades">
            <section id="body-selector">
                <UtilSelector />
            </section>
            <section id="stage">
                <Timing />
            </section>
        </div>
    );
}

export default Utilidades;