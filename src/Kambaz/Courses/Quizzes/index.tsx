import { Button, FormControl, ListGroup } from "react-bootstrap";
import { BsCheckCircleFill, BsGripVertical, BsRocketTakeoff } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import DeleteButton from "../Assignments/DeleteButton";
import { BiCheckCircle } from "react-icons/bi";

export default function Quizzes() {
  const { cid, aid } = useParams();
     const [assignmentTitle, setAssignmentTitle] = useState("");
     const [assignmentDes, setAssignmentDes] = useState("");
     const [assignmentPoints, setAssignmentPoints] = useState("");
     const [dueDate, setDueDate] = useState("");
     const [from, setFrom] = useState("");
     const [until, setUntil] = useState("");
     const { assignments } = useSelector((state: any) => state.assignmentReducer);
     useEffect(() => {
      const assignment = assignments.find((a: any) => a.course === cid);
      if (assignment) {
        setAssignmentTitle(assignment.title);
        setAssignmentDes(assignment.description);
        setAssignmentPoints(assignment.points);
        setDueDate(assignment.dueDate);
        setFrom(assignment.getAvailableFrom);
        setUntil(assignment.getAvailableUntil);
      }
    }, [assignments, cid]);

    // console.log("addAssignment:", addAssignment);
  
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Updated Assignments:", assignments);
  }, [assignments]);

//   const handleAddAssignment = () => {
//     const newAssignment = {
//       _id: uuidv4(), 
//       title: assignmentTitle,
//       course: cid,
//       description: assignmentDes,
//       points: assignmentPoints, 
//       dueDate: dueDate, 
//       getAvailableFrom: from, 
//       getAvailableUntil: until,
//       assignment: aid,
//     };
//     if (assignments) {
//            dispatch(updateAssignment(newAssignment));
//          } else {
//            dispatch(addAssignment(newAssignment)); 
//          }
   
//   };

  return (
    
    <div >
       {/* <SaveButton
          addAssignment={handleAddAssignment} 
        /> */}

      <div id="wd-assignments" className="p-2.5 position-relative mb-4 d-flex gap-2 align-items-center">
        <HiMagnifyingGlass
          className="position-absolute top-50 translate-middle-y ms-3"
        />
        <FormControl
          type="search"
          placeholder="Search for Quiz"
          className="ps-5"
        />
      <Link to={`/Kambaz/Courses/${cid}/Quiz/New`}style={{ textDecoration: "none" }}>
        <Button variant="danger" size="lg" className="me-1 d-flex align-items-center gap-1" id="wd-add-module-btn">
          <FaPlus className="fs-6" />
          Quiz
        </Button>
      </Link>

      <Button variant="btn btn-secondary btn-lg" size="lg" className="me-1 d-flex align-items-center" id="wd-module-btn">
      <IoEllipsisVertical className="fs-3" />
        </Button>

      
      

      </div>
      <hr/>
      <br/>
      <ListGroup className="rounded-0" id="wd-modules">
        {/* <ListGroup.Item className="wd-module p-0 mb-5 fs-9 border-gray fs-5"> */}
          <div className="wd-title p-3 ps-2 bg-secondary fs-5"> <BsGripVertical className="me-2" /> Assignment Quizzes
            <div className="float-end">
              <FaPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          
          {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li key={assignment._id} className="wd-module list-group-item mb-0 fs-6 border-gray">
              {/* <BsGripVertical className="fs-3 position-relative bring-down-first" /> */}
              <BsRocketTakeoff className="me-2 text-success fs-2 position-relative bring-down" />
              <div className="position-absolute make-assignment-move translate-middle w-75">

                  <Link  
                    className="wd-assignment-link text-black link-underline link-underline-opacity-0" 
                    to={`/Kambaz/Courses/${cid}/Quiz/`}
                  >
                    <br />
                    <b>Quiz Title</b>
                  </Link>
                        
                <p>
                  <text className="text">Closed</text> | 
                  <b> Due </b> {assignment.dueDate} | 
                  {/* <b> Not Available until </b> {assignment.getAvailableUntil} |  */}
                  
                  {assignment.points} pts | 10 Questions
                  {/* <DeleteButton assignmentTitle={""} deleteAssignment={function (assignmentTitle: string): void {
                              throw new Error("Function not implemented.");
                          } }/> */}
                          <div className="float-end "> <IoEllipsisVertical className="fs-4 float-end " />
                          <BsCheckCircleFill className="fs-4  me-3 text-success"/>
                          </div>
      

                </p>
                   
              </div>


              <br /><br /><br/>
            </li>
          ))
        }
      
      </ListGroup>
      
    </div>
  );
}