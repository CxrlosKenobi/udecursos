import './index.scss'


export default function Footer(){
  return (
    <footer>
      <div className="content">
        <div className="column-1">
          <a href='https://github.com/CxrlosKenobi/udecursos/commits/master' 
            target="_blank" rel="noopener noreferrer" className="last-update">
            Última actualización:<br></br>Febrero 7, 2022
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
};
