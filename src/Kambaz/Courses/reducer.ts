import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Databases";
import { v4 as uuidv4 } from "uuid";
const initialState = {
     courses: courses,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      const newCourse: any = {
        _id: uuidv4(),
        name: course.name,
        image: course.image,

      };
      state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (m: any) => m._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((m: any) =>
        m._id === course._id ? course : m
      ) as any;
    },
  },
});
export const { addCourse, deleteCourse, updateCourse } =
coursesSlice.actions;
export default coursesSlice.reducer;