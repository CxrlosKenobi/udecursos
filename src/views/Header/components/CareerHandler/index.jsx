import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
//
import { pushProcess, updateProcess } from "../../../../redux/slices/processes";
import { setCareerInfo, stateMalla, cleanApprovedCredits } from "../../../../redux/slices/career";
import { getCareer, getCareerTasks } from "../../../../APIs/Careers";
import data from "../../../../data/careers-data";
import "./index.scss";


const Selector = forwardRef(({ careerName, selectorContext }, ref) => {
  const { selectorState, setSelectorState } = selectorContext;
  const dispatch = useDispatch();
  
  function careerHandler(chosen) {
    dispatch(cleanApprovedCredits());
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
    <motion.section
      ref={ref}
      id="Accordion"
      initial={{
        transform: "translateY(-110%)",
      }}
      animate={{
        transform: selectorState ? "translateY(0)" : "translateY(-110%)",
      }}
      transition={{
        duration: 0.2
      }}
    >
      <ul>
        {carreras.map((option) => (
          <li key={option.code}
              onClick={(() => careerHandler(option))}
              className={option.name === careerName ? "chosen" : ""}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </motion.section>
  );
});
export default Selector;

// TODO: Is not the backend"s responsability to order the semesters and tasks?
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
              className={option.name === careerName ? "chosen" : ""}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
