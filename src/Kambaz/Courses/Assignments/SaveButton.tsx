// import { useState } from "react";
import { Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// {addAssignment}: {addAssignment:()=>void;}
export default function SaveButton({addAssignment}: {addAssignment:()=>void; } ){
     const { cid } = useParams();
     // const dispatch = useDispatch();
     // const assignments = db.assignments;
     // const [assignmentTitle] = useState("");
     // const [assignmentDes] = useState("");
     // const [assignmentPoints] = useState("");
     // const [dueDate] = useState("");
     // const [from] = useState("");
     // const [until] = useState("");
     // const { assignments } = useSelector((state: any) => state.assignmentReducer);
     const navigate = useNavigate();
     const handleSave = () => {
          // if (assignments) {
          //      updateAssignment();
          //           // dispatch(addAssignment(newAssignment));
          //         } else {
          //           addAssignment();
          //         }
          addAssignment();
          navigate(`/Kambaz/Courses/${cid}/Assignments`); 
     }
     return (
     <div > 
   
   <Button className="btn btn-lg btn-danger" id="wd-add-module-btn" 
                             onClick={handleSave}>

                                   Save
                              </Button>
     
      </div>
     );}