import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import AddAssignmentEditor from "./Assignments/AddEditor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  console.log("cid:", cid);
  const { pathname } = useLocation();
     return (
       <div id="wd-courses">
        {/* className="text-danger" */}
        <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
         <hr />
         <div className="d-flex">
    <div className="d-none d-md-block">

            <CourseNavigation />
            </div>
            <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Assignments/New" element={<AddAssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
              <Route path="Quizzes" element={<Quizzes />} />
            </Routes>
         
          </div></div>
       </div>
   );}






