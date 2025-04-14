import React, { useState } from "react";
import { Button, ListGroup, Dropdown, DropdownButton, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { LiaClipboardListSolid } from "react-icons/lia";

// Your quiz data
const quizzes = [
  { 
    _id: "A101", 
    title: "Propulsion Assignment", 
    course: "RS101", 
    availableDate: "May 6 at 12:00am", 
    dueDate: "May 13 at 11:59", 
    points: "100", 
    getDueDate: "2024-05-13", 
    getAvailableFrom: "2024-05-06", 
    getAvailableUntil: "2024-05-20",
    published: false,
    numberOfQuestions: 5,
    score: null 
  },
  { 
    _id: "A102", 
    title: "Combustion Analysis", 
    course: "RS101", 
    availableDate: "May 15 at 12:00am", 
    dueDate: "May 26 at 11:59", 
    points: "100", 
    getDueDate: "2024-05-26", 
    getAvailableFrom: "2024-05-15", 
    getAvailableUntil: "2024-05-27",
    published: false,
    numberOfQuestions: 6,
    score: null 
  }
];

export default function QuizzesPage() {
  const [quizzesState, setQuizzesState] = useState(quizzes);

  const handleAddQuiz = () => {
    const newQuiz = {
      _id: new Date().getTime().toString(),
      title: "New Quiz",
      course: "RS101",
      availableDate: "TBD",
      dueDate: "TBD",
      points: "100",
      getDueDate: "2024-12-31",
      getAvailableFrom: "2024-12-01",
      getAvailableUntil: "2024-12-30",
      published: false,
      numberOfQuestions: 0,
      score: null
    };
    setQuizzesState([...quizzesState, newQuiz]);
  };

  const handleDeleteQuiz = (quizId: string) => {
    setQuizzesState(quizzesState.filter(quiz => quiz._id !== quizId));
  };

  const togglePublish = (quizId: string) => {
    setQuizzesState(quizzesState.map(quiz => 
      quiz._id === quizId ? { ...quiz, published: !quiz.published } : quiz
    ));
  };

  return (
    <div>
      {/* Search bar and add quiz button */}
      <div id="wd-quizzes" className="p-2.5 position-relative mb-4 d-flex gap-2 align-items-center">
        <HiMagnifyingGlass className="position-absolute top-50 translate-middle-y ms-3" />
        <FormControl type="search" placeholder="Search..." className="ps-5" />
        <Link to={`/Kambaz/Courses/${"RS101"}/Quizzes/New`} style={{ textDecoration: "none" }}>
          <Button variant="danger" size="lg" className="me-1 d-flex align-items-center gap-1" id="wd-add-module-btn">
            <FaPlus className="fs-6" />
            Quizzes
          </Button>
        </Link>
      </div>

      {/* Grey Bar */}
      <div className="wd-title p-3 ps-2 bg-secondary fs-5">
        <BsGripVertical className="me-2" /> Assignment Quizzes
        <div className="float-end">
          <FaPlus />
        </div>
      </div>

      {/* List of Quizzes */}
      <ListGroup className="rounded-0">
        {quizzesState.map((quiz) => (
          <ListGroup.Item key={quiz._id} className="mb-3 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Link to={`/quiz/${quiz._id}`} className="text-decoration-none">
                  <strong>{quiz.title}</strong>
                </Link>
                <div>
                  <span>Due Date: {quiz.dueDate}</span> | 
                  <span> Points: {quiz.points}</span> | 
                  <span> Questions: {quiz.numberOfQuestions}</span>
                </div>
                <div>
                  {quiz.published ? "Published ✅" : "Unpublished 🚫"}
                </div>
              </div>
              
              {/* Dropdown actions for each quiz */}
              <DropdownButton 
                id="dropdown-basic-button" 
                title={<BsGripVertical />}
                drop="end"
                className="ms-3"
              >
                <Dropdown.Item onClick={() => togglePublish(quiz._id)}>
                  {quiz.published ? "Unpublish" : "Publish"}
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={`/quiz/${quiz._id}`}>Edit</Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleDeleteQuiz(quiz._id)}>
                  Delete
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
