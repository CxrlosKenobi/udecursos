import { forwardRef } from "react";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
//
import { pushProcess, updateProcess } from '../../../redux/processesSlice';
import { setCareerInfo, stateMalla } from '../../../redux/careerSlice';
import { getCareer, getCareerTasks } from '../../../APIs/Careers';
import data from '../../../data/careers-data';
import "./CareerHandler.scss";


const Selector = forwardRef(({ careerName, selectorContext }, ref) => {
  const { selectorState, setSelectorState } = selectorContext;
  const dispatch = useDispatch();
  
  function careerHandler(chosen) {
    dispatch(setCareerInfo(chosen));
    setSelectorState(false);

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
    <StyledAccordion ref={ref} id='Accordion' selectorState={selectorState}>
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
});
export default Selector;


export async function mallaBuilder(code) {
  const career = await getCareer(code);
  const _tasks = await getCareerTasks(code);

  let orderedSemesters = Object.values(career.semesters).sort((a, b) => {
    return a.id.localeCompare(b.id);
  });
  career.semesters = orderedSemesters;

  function tasksFilter(semester, tasks) {
    let orderedTasks = semester.tasksCodes.map((code) => {
      return tasks.find((task) => task.code === code);
    });

    return orderedTasks;
  }
  
  let malla = { semesters: {} };
  Object.values(career.semesters).map((semester) => {
    const builtSemester = {
      ...semester,
      tasks: tasksFilter(semester, _tasks)
    };

    delete builtSemester.tasksCodes;
    return malla.semesters[semester.id] = builtSemester;
  });
  
  return malla;
};

//

const carreras = data.carreras;
export function SubmenuList({ careerName, careerHandler }) {
  return (
    <section id="Career-list-wrapper">
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
  transform: ${({ selectorState }) => selectorState ? 'translateY(0)' : 'translateY(-110%)'};
  transition: transform 200ms ease-in-out;
  z-index: -1;

  @media only screen and (max-width: 846px) {
    display: none;
  }
`;
