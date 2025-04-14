import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the shape of a quiz object
interface Quiz {
  _id: string;
  title: string;
  course: string;
  availableDate: string;
  dueDate: string;
  points: string;
  getDueDate: string;
  getAvailableFrom: string;
  getAvailableUntil: string;
  published: boolean;
  numberOfQuestions: number;
  score: number | null;
}

// Define the state shape, quizzes is an array of Quiz objects
interface QuizzesState {
  quizzes: Quiz[];
}

const initialState: QuizzesState = {
  quizzes: [], // Initialize quizzes as an empty array
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action: PayloadAction<Quiz>) => {
      const newQuiz: Quiz = {
        _id: uuidv4(),
        ...action.payload, // Spread the payload to include the quiz fields
      };
      state.quizzes.push(newQuiz);
    },
    deleteQuiz: (state, action: PayloadAction<string>) => {
      state.quizzes = state.quizzes.filter((quiz) => quiz._id !== action.payload);
    },
    updateQuiz: (state, action: PayloadAction<Quiz>) => {
      state.quizzes = state.quizzes.map((quiz) =>
        quiz._id === action.payload._id ? action.payload : quiz
      );
    },
  },
});

export const { addQuiz, deleteQuiz, updateQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
