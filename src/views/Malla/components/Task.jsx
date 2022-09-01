import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
//
import { passTask } from '../../../redux/careerSlice';
import _passed from "../../../assets/passed.png";


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
const ShadeLayer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  border-radius: 9px;
  background: ${props => (props.reqs.length > 0) ? "rgba(0, 0, 0, 0.45)" : "none"};
`;

const Passed = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: ${props => (props.passed) ? "1" : "0"};
  transition: opacity 130ms linear;
`;

export default function Task({ index, content }) {
  const dispatch = useDispatch();
  const [passed, setPassed] = useState(content.properties.done || false);

  function onClick() {
    setPassed(!passed);
    dispatch(passTask({
      col: content.col,
      index: index,
      passed: !passed,
    }));
  };
  
  return (
    <Draggable draggableId={content.code} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Passed
            src={_passed}
            alt="passed"
            passed={passed}
            onClick={onClick}
          />
          <ShadeLayer reqs={content.prerequisites} />
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
