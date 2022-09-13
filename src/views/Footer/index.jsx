import "./index.scss"


export default function Footer(){
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="last-update">
          <a href="https://github.com/CxrlosKenobi/udecursos/commits/master" 
            target="_blank" rel="noopener noreferrer">
            Última actualización:<br></br>Septiembre 12, 2022
          </a>
        </div>
        <div className="source-code">
          <a href="https://github.com/CxrlosKenobi/udecursos"
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>   Código fuente
          </a>
        </div>
        <div className="signature">
          <a href="https://github.com/CxrlosKenobi"
            target="_blank" rel="noopener noreferrer">
            <i className="fas fa-code"></i>   with   ❤️   by Kenobi
          </a>
        </div>
      </div>
    </footer>
  );
};
