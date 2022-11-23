import "./TopDashboard.css";
import Search from "./images/Search.png";
import Card from "./Card";
import LeftColumn from "./LeftColumn";
import Profile from "./Profile";
import Calender from "./images/Calender.png";
import BusinessCentre from "./images/BusinessCentre.png";
import DownArrow from "./images/DownArrow.png";
import Group3 from "./images/Group3.png";
import MortarBoard from "./images/MortarBoard.png";
import Office from "./images/Office.png";
import Reading from "./images/Reading.png";

function TopDashboard() {
  return (
    <LeftColumn>
      <div className="top-box">
        <div className="search">
          <img src={Search} alt="Search" />
          Search Here....
        </div>
        <Profile />
      </div>
      <div className="dashboard">
        <div className="Dashboard">Dashboard</div>
        <div className="allBranches">All Branches 2022-2023</div>
        <div className="financial-year">
          <img src={Calender} alt="Calender" />
          Financial Year
          <img src={DownArrow} alt="DownArrrow" />
        </div>
        <div className="all-branches">
          <img src={BusinessCentre} alt="BusinessCentre" />
          All Branches
          <img src={DownArrow} alt="DownArrrow" />
        </div>
        <div style={{ display: "flex" }}>
          <Card
            className="card1"
            image={Reading}
            total="Total Students"
            number="2000"
            alt="Reading"
          />
          <Card
            className="card2"
            image={MortarBoard}
            total="Total teachers"
            number="200"
            alt="MortarBoard"
          />
          <Card
            className="card3"
            image={Office}
            total="Total Branches"
            number="10"
            alt="Office"
          />
          <Card
            className="card4"
            image={Group3}
            total="Total Users"
            number="20"
            alt="Group3"
          />
        </div>
        {/* <img src={Reading} alt="reading" /> */}
      </div>
    </LeftColumn>
  );
}
export default TopDashboard;
