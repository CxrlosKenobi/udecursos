import { Component } from 'react';
import './Timing.css';

// const Calculations = (hours, minutes, seconds) => {
//     let totalSecs = (hours * 3600) + (minutes * 60) + seconds;

//     // 1.25X
//     let x125 = (totalSecs * 100) / 125;
//     let x1Hours = Math.floor(x125 / 3600);
//     let x1Minutes = Math.floor((x125 % 3600) / 60);
//     let x1Seconds = Math.floor(x125 % 60);
//     let result125 = `${x1Hours}h ${x1Minutes}m ${x1Seconds}s`;

//     // 1.5X
//     let x15 = (totalSecs * 100) / 150;
//     let x15Hours = Math.floor(x15 / 3600);

//     let x15Minutes = Math.floor((x15 % 3600) / 60);
//     let x15Seconds = Math.floor(x15 % 60);
//     let result15 = `${x15Hours}h ${x15Minutes}m ${x15Seconds}s`;

//     // 2X
//     let x2 = (totalSecs * 100) / 200;
//     let x2Hours = Math.floor(x2 / 3600);
//     let x2Minutes = Math.floor((x2 % 3600) / 60);
//     let x2Seconds = Math.floor(x2 % 60);
//     let result2 = `${x2Hours}h ${x2Minutes}m ${x2Seconds}s`;

//     return [result125, result15, result2];
// }

class Timing extends Component {
    
    render() {
        return (
            <div id="body-timing">
                <h1>Obtener duración de clase/video según velocidad de reproducción</h1>
                <form className="form-timing">
                    <div className="input-container">
                        <label htmlFor="hora">Horas</label>
                        <input id="hora" name="hour" type="number" 
                                // placeholder="--" min="0" max="100" ref={(input) => { 
                                //     this.hour = input;
                                // }}/>
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="minuto">Minutos</label>
                        <input id="minuto" name="minutes" type="number" 
                                // placeholder="--" max="60" min="0" ref={(input) => {
                                //     this.minutes = input;
                                // }}/>
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="segundo">Segundos</label>
                        <input id="segundo" name="seconds" type="number" 
                                // placeholder="--" max="60" min="0" ref={(input) => {
                                //     this.seconds = input;
                                // }}/>
                        />
                    </div>
                </form>
                <section className="results">
                    <div className="result-container">
                        <h2>1.25X</h2>
                        {/* <p>{Calculations(this.hour.value, this.minutes.value, this.seconds.value)[0]}</p> */}
                    </div>
                    <div className="result-container">
                        <h2>1.5X</h2>
                        {/* <p>{Calculations(this.hour.value, this.minutes.value, this.seconds.value)[1]}</p> */}
                    </div>
                    <div className="result-container">
                        <h2>2X</h2>
                        {/* <p>{Calculations(this.hour.value, this.minutes.value, this.seconds.value)[2]}</p> */}
                    </div>

                </section>
            </div>
        );
    }
}

export default Timing;
