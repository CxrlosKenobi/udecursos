import { configureStore } from "@reduxjs/toolkit";
//
import metadataReducer from "./metadataSlice";
import careerReducer from "./careerSlice";

// Middleware
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const career = getState().career;
    // const metadata = getState().metadata;

    if (typeof window !== "undefined") {
      const udecursos = {
        career: career,
        metadata: { theme: "light" } // Workaround for persistent theme yet to be implemented
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
      career: udecursos.career,
      metadata: udecursos.metadata
    };
  }  
};


// Store configuration
const store = configureStore({
  reducer: {
    career: careerReducer,
    metadata: metadataReducer
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
