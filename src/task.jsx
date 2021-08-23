import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid #10162F;
  border-radius: 9px;
  
  height: 80px;
  width: 90px;
  padding: 5px;
  margin-bottom: 10px;

  -moz-box-flex: 1;
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${props => (props.isDragging ? '#FFD300' : "white")};

`;
const Code = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 8.5px;
  font-weight: bold;
  font-color: #633FE5;

  display: flex;
  padding: 4px;
  -moz-box-align: center;
  -moz-box-flex: 0;
  flex-grow: 0;
  flex-basis: 100%;
`;
const Content = styled.div`
  font-family: "Apercu Pro", sans-serif black;
  font-size: 12px;
  font-color: #10162F;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  line-height: 1.2;
  align-items: center;
  justify-content: center;
  margin-bottom: 36%;

  `;
const Credits = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 8.5px;
  font-color: #633FE5;

  
  position: absolute;
  margin-top: 60px;
  margin-left: 0px;
  margin-right: -100px;
  margin-bottom: -10px;
  padding: 5px;

`;
export default class Task extends React.Component {
  render() {
    return (
      // Display the credits from the task
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Code>
              {this.props.task.code}
            </Code>

            <Content>
              {this.props.task.content}
            </Content>

            <Credits>
              {this.props.task.credits}
            </Credits>

          </Container>
        )}
      </Draggable>
    );
  }
}
