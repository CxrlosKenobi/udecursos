import { configureStore } from "@reduxjs/toolkit";
//
import metadataReducer from "./metadataSlice";
import processesReducer from "./processesSlice";
import careerReducer from "./careerSlice";

// Middleware
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const career = getState().career;
    // const metadata = getState().metadata;

    if (typeof window !== "undefined") {
      const udecursos = {
        metadata: { theme: "light" }, // Workaround for persistent theme yet to be implemented
        processes: { queue: [] },
        career: career
      };
      localStorage.setItem("udecursos_data", JSON.stringify(udecursos));
    }

    return result;
  };
};


// Store rehydration
const reHydrateStore = () => {
  if (typeof window === "undefined") return;

  const udecursos = JSON.parse(localStorage.getItem("udecursos_data"));
  if (udecursos) {
    return {
      metadata: udecursos.metadata,
      processes: udecursos.processes,
      career: udecursos.career
    };
  }  
};


// Store configuration
const store = configureStore({
  reducer: {
    metadata: metadataReducer,
    processes: processesReducer,
    career: careerReducer
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
