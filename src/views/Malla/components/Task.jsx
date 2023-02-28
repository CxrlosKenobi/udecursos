import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
//
import { careerSelector } from '../../../redux/slices/career';
import { passTask } from '../../../redux/slices/career';
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
  border-radius: 8px;
  background: ${props => (props.passedReqs) ? "none" : "var(--shade-layer-color)"};
  transition: background 0.5s ease-in-out;
`;
const Passed = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: ${(props) => (props.passed) ? "1" : "0"};
  transition: opacity 130ms linear;
`;

export default function Task({ index, content }) {
  const dispatch = useDispatch();
  const career = useSelector(careerSelector);
  // const semesters = useSelector(semestersSelector);
  // const aprovedCredits = useSelector(creditsSelector);
  const [passedReqs, setPassedReqs] = useState(false);

  function taskFinder(code) { // NOTE: Yup, pending to optimize
    let _task;
    Object.values(career.malla.semesters).forEach((semester) => {
      semester.tasks.forEach((task) => {
        if (task.code === code) {
          _task = task;
        }
      });
    });
    if (!_task) {
      console.warn(`There is no such task with code ${code}`)
      return null;
    } else return _task;
  };

  function onClick() {
    dispatch(passTask({
      col: content.col,
      index: index,
      passed: !content.properties.done,
      credits: Number(content.credits),
    }));
  };

  useEffect(() => {
    let status = false;

    if (content.prerequisites.length > 0) {
      let passedReqs = 0;
      content.prerequisites.forEach((prerequisite) => {
        const prereq = taskFinder(prerequisite);
        if (!prereq) {
          passedReqs ++;
          return;
        }
        if (prereq.properties.done) passedReqs++;
      });
      status = (passedReqs === content.prerequisites.length);


    // Pending case to solve is when the task has both, prerequisites and approved credits (i.e. 580412)
    } else if (content.properties.required_credits !== undefined) {
      try {
        if (content.properties.required_credits[career.info.code] !== undefined) {
          if (career.approved_credits >= content.properties.required_credits[career.info.code])
            status = true;
          else
            status = false;

        } else status = true;

      } catch (error) {
        console.warn(error);
      }
    } else {
      status = true;
    }

    setPassedReqs(status);

  }, [career.malla.semesters]); // eslint-disable-line react-hooks/exhaustive-deps

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
            passed={content.properties.done}
            onClick={onClick}
          />
          <ShadeLayer passedReqs={passedReqs} />
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
