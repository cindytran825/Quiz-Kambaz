import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
 
const AccountNavigation = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
 
  return (
<div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-5">
      {links.map((link, idx) => (
<Link
          key={idx}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item border border-0 ${
            pathname.includes(link)
              ? "active"
              : "text-danger"
          }`}
>
          {link}
</Link>
      ))}
</div>
  );
};
 
export default AccountNavigation;