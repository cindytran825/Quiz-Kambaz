import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {  useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
// {addAssignment}: {addAssignment:()=>void;}
export default function SaveButton2({ updateAssignment}: {updateAssignment:()=>void;} ){
     const { cid, aid } = useParams();
     // const dispatch = useDispatch();
     // const assignments = db.assignments;
     const [, setAssignmentTitle] = useState("");
     const [, setAssignmentDes] = useState("");
     const [, setAssignmentPoints] = useState("");
     const [, setDueDate] = useState("");
     const [, setFrom] = useState("");
     const [, setUntil] = useState("");
     const { assignments } = useSelector((state: any) => state.assignmentReducer);
     const navigate = useNavigate();

    

     const handleUpdate = () => {
          updateAssignment();
          navigate(`/Kambaz/Courses/${cid}/Assignments`); 
     }
     useEffect(() => {
          const assignment = assignments.find((a: any) => a._id === aid);
          if (assignment) {
            setAssignmentTitle(assignment.title);
            setAssignmentDes(assignment.description);
            setAssignmentPoints(assignment.points);
            setDueDate(assignment.dueDate);
            setFrom(assignment.getAvailableFrom);
            setUntil(assignment.getAvailableUntil);
          }
        }, [assignments, aid]);
     return (
     <div > 
   
   <Button className="btn btn-lg btn-danger" id="wd-add-module-btn" 
                             onClick={handleUpdate}>

                                   Save
                              </Button>
     
      </div>
     );}