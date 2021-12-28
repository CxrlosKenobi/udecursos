import '../css/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="content">
                <div className="column-1">
                    <a href='https://github.com/CxrlosKenobi/udecursos/commits/master' 
                        target="_blank" rel="noopener noreferrer" className="last-update">
                        Última actualización:<br></br>Diciembre 28, 2021
                    </a>
                </div>
                <div className="column-2">
                    <a href="https://github.com/CxrlosKenobi/udecursos"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>   Código fuente
                    </a>
                </div>
                <div className="column-3">
                    <a href='https://github.com/CxrlosKenobi'>
                        <i className="fas fa-code"></i>   with   ❤️   by Kenobi
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
