import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';
import logo from './logo.png';
import './App.css';

const Container = styled.div`
  display: flex;
`;

const H2 = styled.h2`
  font-family: "Apercu Pro", sans-serif black;
  font-size: 1.5em;
  font-weight: bold;
  color: #10162F;

`;
const H3 = styled.h3`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 12px;
  font-weight: bold;
  color: #10162F;

`;

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <header className="Header">
          <div className="HeaderContent">
  
            <div className="LeftHeader">
              <a>
                <img src={logo} alt="logo" height="70" width="52"/>
              </a>
              <h1>
                <H2>UdeCursos</H2>
              </h1>
            </div>
    
            <div className="RightHeader">
              <h3>
                <a 
                  href="http://www.inf.udec.cl/"
                  target="_blank" rel="noopener noreferrer"
                >
                  <H3>Ingeniería Civil Informática</H3>
                </a>
              </h3>
              <h3>
                <a 
                  href="http://secad.ing.udec.cl/horarios"
                  target="_blank" rel="noopener noreferrer"
                >
                  <H3>UdeC 2021-2</H3>
                </a>
              </h3>
            </div>

          </div>
        </header>
        <div className="App-body">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Container>
              {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(
                  taskId => this.state.tasks[taskId],
                );

                return <Column key={column.id} column={column} tasks={tasks} />;
               })}
            </Container>
          </DragDropContext>
          <br>
          </br>
        </div>

        <footer className="Footer">
          <div className="FooterContent">

            <div className="FooterLeft">
              <a class="F-L">Última actualización:</a>
              <a class="F-L2">Agosto 23, 2021</a>
            </div>

            <div className="FooterCenter">
              {/* Github */}
              <a href="https://github.com/CxrlosKenobi/udecursos-app" 
                target="_blank" rel="noopener noreferrer">
               <i class="fab fa-github"></i>   Código fuente
              </a>
            </div>
            
            <div className="FooterRight">
              {/* Developed */}
              <a>
                <i class="fas fa-code"></i>   with   ❤️   by Kenobi
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
