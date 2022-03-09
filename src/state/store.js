import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


// Middleware
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const career = getState().cart.career;

    if (typeof window !== "undefined") {
      localStorage.setItem("career", JSON.stringify(career));
    }

    return result;
  };
};


// Store rehydration
const reHydrateStore = () => {
  if (typeof window === "undefined") return;
  
  const career = JSON.parse(localStorage.getItem("career"));
  if (career !== null) {
    return {
      cart: {
        career: career,
      }
    };
  }
};


// Store configuration
const store = configureStore({
  reducer: { cart: cartReducer, },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
