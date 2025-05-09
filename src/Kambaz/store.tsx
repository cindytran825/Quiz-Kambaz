import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./Courses/reducer";
import enrollmentReducer from "./Courses/reducerEnroll";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    coursesReducer,
    enrollmentReducer
  },
});
export default store;