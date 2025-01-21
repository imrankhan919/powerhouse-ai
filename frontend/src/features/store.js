import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import plan from "./plans/planSlice";

const store = configureStore({
  reducer: {
    auth,
    plan,
  },
});

export default store;
