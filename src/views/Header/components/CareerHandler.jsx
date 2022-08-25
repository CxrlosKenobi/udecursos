import { useDispatch } from 'react-redux';
import styled from 'styled-components';
//
import { pushProcess, updateProcess } from '../../../redux/processesSlice';
import { setCareerInfo, stateMalla } from '../../../redux/careerSlice';
import { getCareer, getCareerTasks } from '../../../APIs/MongoDB';
import data from '../../../data/careers-data';
import "./CareerHandler.scss";

export default function Selector({ careerName, accordionContext }) {
  const { accordionState, setAccordionState } = accordionContext;
  const dispatch = useDispatch();
  
  function careerHandler(chosen) {
    dispatch(setCareerInfo(chosen));
    setAccordionState(false);

    dispatch(pushProcess({ id: "malla" }));
    mallaBuilder(chosen.code).then((malla) => {
      dispatch(stateMalla(malla));
      dispatch(updateProcess({ id: "malla", status: "success" }));
    }).catch((err) => {
      console.error("Error on building malla: ", err);
      dispatch(updateProcess({ id: "malla", status: "error" }));
    });
    
  };

  return (
    <StyledAccordion id='Accordion' accordionState={accordionState}>
      <ul>
        {carreras.map((option) => (
          <li key={option.code}
              onClick={(() => careerHandler(option))}
              className={option.name === careerName ? 'chosen' : ''}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </StyledAccordion>
  );
};

async function mallaBuilder(code) {
  const career = await getCareer(code);
  const _tasks = await getCareerTasks(code);

  let malla = { semesters: {} };
  Object.values(career.semesters).map((semester) => {
    const builtSemester = {
      ...semester,
      tasks: _tasks.filter((task) => semester.tasksCodes.includes(task.code))
    };

    delete builtSemester.tasksCodes;
    return malla.semesters[semester.id] = builtSemester;
  });
  
  return malla;
};

//

const carreras = data.carreras;
export function SubmenuList({ careerName, handleCareer }) {
  return (
    <section id="Career-list-wrapper">
      <ul>
        {carreras.map((option) => (
          <li key={option.code}
              onClick={(() => handleCareer(option))}
              className={option.name === careerName ? 'chosen' : ''}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

const StyledAccordion = styled.section`
  background-color: #FFF;
  border-radius: 5px;
  height: fit-content;
  width: 95%;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #10162f;
  position: relative;
  top: 0;
  transform: ${({ accordionState }) => accordionState ? 'translateY(0)' : 'translateY(-110%)'};
  transition: transform 200ms ease-in-out;
  z-index: -1;

  @media only screen and (max-width: 846px) {
    display: none;
  }
`;
