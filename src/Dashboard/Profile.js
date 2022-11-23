import "./TopDashboard.css";
import Picture from "./images/Picture.png";

function Profile() {
  return (
    <div className="profile">
      <img src={Picture} alt="Pic" />
      <h1 className="UserName">UserName</h1>
      <h5 className="SuperAdmin">SuperAdmin</h5>
    </div>
  );
}
export default Profile;
