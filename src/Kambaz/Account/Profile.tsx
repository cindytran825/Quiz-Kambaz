// import { Link } from "react-router-dom";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
//       <input defaultValue="123"   placeholder="password" type="password"
//              className="wd-password" /><br/>
//       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
//       <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
//       <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
//       <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
//       <select defaultValue="FACULTY" id="wd-role">
//         <option value="USER">User</option>       <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
//       </select><br/>
//       <Link to="/Kambaz/Account/Signin" >Sign out</Link>
//     </div>
// );}

import {  Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div id="wd-signup-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
      <Form.Control defaultValue={profile.username} id="wd-name"
        className="mb-2" onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
      <Form.Control defaultValue={profile.password} id="wd-password" type="name"
        className="mb-2" onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>

      <Form.Control defaultValue={profile.firstName} id="wd-name" type="name"
        className="mb-2" onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
      <Form.Control defaultValue={profile.lastName} id="wd-name" type="lastname"
        className="mb-2" onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>

        <Form.Control defaultValue={profile.dob} className="mb-2" onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date" id="wd-available-from" />
        <Form.Control id="wd-name" defaultValue={profile.email} type="email"
        className="mb-2" onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>

        
<select value={profile.role || "USER"} onChange={(e) => setProfile({ ...profile, role: e.target.value })}
       className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>

      <Link id="wd-signin-btn"
        to="/Kambaz/Account/Profile" 
        className="btn btn-primary w-100 mb-2">
        Sign in </Link>
        <Button onClick={signout} className="w-100 mb-2 btn-danger" id="wd-signout-btn">
            Sign out
          </Button>
          </div>
          )}
    </div>);
}
