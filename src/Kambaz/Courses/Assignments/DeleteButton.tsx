import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ModalDelete from "./ModalDelete";
export default function DeleteButton({
     assignmentTitle,
     deleteAssignment,
   }: {
     assignmentTitle: string;
     deleteAssignment: (assignmentTitle: string) => void;
   }) {
     const [showModal, setShowModal] = useState(false);
   
     return (
       <div className="float-end">
         <FaTrash
           className="text-danger me-2 mb-1"
           onClick={() => setShowModal(true)}
         />
       
         <ModalDelete
           show={showModal}
           handleClose={() => setShowModal(false)}
           confirmDelete={() => {
             deleteAssignment(assignmentTitle);
             setShowModal(false);
           }}
           assignmentTitle={assignmentTitle}
         /> 
       </div>
     );
   }
   