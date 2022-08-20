import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';


const Container = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 9px;
  
  height: 80px;
  width: 90px;
  padding: 5px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;

  background-color: ${props => (props.isDragging ? '#FFD300' : "var(--secondary-color)")};
  &:focus {
    outline: 2.2px solid #4C2BEE;
  }
`;
const Code = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 8.5px;
  font-weight: bold;
  color: var(--children-color);

  position: absolute;
  padding: 10px;
  top: 0px;
  left: 0px;
  height: fit-content;
  user-select: none;
`;
const Content = styled.div`
  font-family: "Apercu Pro", sans-serif black;
  font-size: ${(props) => (props.shrink ? "10px" : "12px")};
  font-color: #10162F;
  font-weight: bold;
  line-height: 1.2;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
const Credits = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 8.5px;
  color: var(--children-color);

  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 10px;
  user-select: none;
`;


export default function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Code>{props.task.code}</Code>
          <Content shrink={props.task.shrink ? true : false}>
            {props.task.content}
          </Content>
          <Credits>{props.task.credits}</Credits>
        </Container>
      )}
    </Draggable>
  );
};
