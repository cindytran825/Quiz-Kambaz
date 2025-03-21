import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Databases";
export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const location = useLocation();
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        return (
          <Link
            key={`${cid}-${link}`}
            to={`/Kambaz/Courses/${course?._id}/${link}`}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${
              location.pathname.includes(link)
                ? "active"
                : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}

