import { Modal, FormControl, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
// import * as db from "../../Databases";
export default function ModuleEditor({ show, handleClose, dialogTitle, moduleName, setModuleName, addModule,}: {
 show: boolean; handleClose: () => void; dialogTitle: string; moduleName: string; setModuleName: (name: string) => void;
 addModule: () => void; }) {
     const { currentUser } = useSelector((state: any) => state.accountReducer);
     // const { enrollments } = db;
     if (currentUser?.role !== "FACULTY") {
          return null; 
        }
 return (
     // {currentUser?.role === "FACULTY" && ()};
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <FormControl value={moduleName}
     onChange={(e) => { setModuleName(e.target.value); }} />
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      addModule();
      handleClose();
     }} > Add Module </Button>
   </Modal.Footer>
  </Modal> 
);}
