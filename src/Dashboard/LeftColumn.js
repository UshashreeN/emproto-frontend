import "./TopDashboard.css";
import Logo from "./images/Logo.png";
import Icon1 from "./images/Overview.png";
import Icon2 from "./images/Students.png";
import Icon3 from "./images/UsersList.png";
import Logout from "./images/Logout.png";

function LeftColumn(props) {
  return (
    <div className="left-col">
      {props.children}
      <div className="logo">
        <img src={Logo} alt="Aruna Chethana" />
      </div>
      <div className="overview">
        <img src={Icon1} alt="overview" />
        Overview
      </div>
      <h1 className="details">
        <img src={Icon2} alt="student" />
        Students
      </h1>
      <h1 className="details">
        <img src={Icon3} alt="userslist" />
        Users List
      </h1>
      <div className="logout">
        <img src={Logout} alt="Logout" />
        Logout
      </div>
      
    </div>
  );
}

export default LeftColumn;
