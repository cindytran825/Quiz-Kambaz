import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Databases";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
     addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        title:assignment.title,
        getAvailableFrom: assignment.getAvailableFrom,
        getAvailableUntil:assignment.getAvailableUntil,
        course: assignment.course, 
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId}) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;