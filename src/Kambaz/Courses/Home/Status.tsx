import { Button } from "react-bootstrap";
import { BiImport } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { RiBarChart2Fill } from "react-icons/ri";
import { TbSpeakerphone } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";




export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
    
     if (currentUser?.role !== "FACULTY") {
          return null; 
        }
     return (
      <div id="wd-course-status"
         style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
  <div className="w-50 pe-1">
    <Button variant="secondary" size="lg"
            className="w-100 text-nowrap ">
      <MdDoNotDisturbAlt className="me-2 fs-5" />
        Unpublish </Button>
  </div>
  <div className="w-50">
    <Button variant="success" size="lg"
            className="w-100">
      <FaCheckCircle className="me-2 fs-5" />
        Publish </Button>
  </div>
</div><br />
<Button variant="secondary" size="lg"
            className="w-100 mt-1 text-start">
      <BiImport className="me-2 fs-5" />
        Import Existing Content </Button>

    <Button variant="secondary" size="lg"
            className="w-100 mt-1 text-start">
      <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons </Button>
        <Button variant="secondary" size="lg"
            className="w-100 mt-1 text-start">
      <IoMdHome className="me-2 fs-5" />
        Choose Home Page </Button>
        <Button variant="secondary" size="lg"
            className="w-100 mt-1 text-start">
      <RiBarChart2Fill className="me-2 fs-5" />
        View Course Screen </Button>
        <Button variant="secondary" size="lg"
            className="w-100 mt-1 text-start">
      <TbSpeakerphone className="me-2 fs-5" />
        New Announcement </Button>
        <Button variant="secondary" size="lg"
            className="w-100 mt-1 text-start">
      <RiBarChart2Fill className="me-2 fs-5" />
        New Analytics </Button>
        <Button variant="secondary" size="lg"
            className="w-100 mt-1 text-start">
      <FaBell className="me-2 fs-5" />
        View Course Notifications </Button>
    

  </div>
);}
