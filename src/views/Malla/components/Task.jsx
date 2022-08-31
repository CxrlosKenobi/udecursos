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
  user-select: none;

  background-color: ${props => (props.isDragging ? 'var(--highlight-color2)' : "var(--secondary-color)")};
  // border-color: ${props => (props.isDragging ? 'gray' : "var(--border-color)")};
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
`;
const Content = styled.div`
  font-family: "Apercu Pro", sans-serif black;
  font-size: ${(props) => (props.shrink) ? "10px" : "12px"};
  font-color: #10162F;
  font-weight: bold;
  line-height: 1.2;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Credits = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 8.5px;
  color: var(--children-color);

  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 10px;
`;


export default function Task({ index, content }) {
  return (
    <Draggable draggableId={content.code} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Code>{content.code}</Code>
          <Content shrink={content.properties.shrink}>
            {content.name}
          </Content>
          <Credits>{content.credits}</Credits>
        </Container>
      )}
    </Draggable>
  );
};
