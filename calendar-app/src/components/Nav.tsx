import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="main-nav">
      <div className="top-left">
        <Link to="">
          <img
            src="https://res.cloudinary.com/appcloudansh/image/upload/v1683119792/logo_wbov1r.png"
            alt=""
            width={"168px"}
            height={"24px"}
          />
        </Link>
        <div className="nav-input">
          <input
            type="text"
            className="nav-search"
            placeholder="Search clients"
          />
          <i className="fa fa-search"></i>
        </div>
        <div className="income">
          <img
            src="https://res.cloudinary.com/appcloudansh/image/upload/v1683119791/line_hu3ros.png"
            alt=""
            width={"23px"}
          />
          <div className="details-income">
            <span className="month">Apr income</span>
            <div className="value">$100.00</div>
          </div>
        </div>
      </div>
      <div className="top-right">
        <div className="nav-list">
          <button className="nav-item">
            <i className="fa fa-plus"></i>
            <span>Create</span>
          </button>
          <button className="nav-item">
            <i className="fa-regular fa-calendar"></i>
            <span>Requests</span>
          </button>
          <button className="nav-item">
            <i className="fa-solid fa-message"></i>
            <span>Messages</span>
          </button>
        </div>
        <button className="activate-plan">Activate plan</button>
        <button className="profile-btn">AR</button>
      </div>
    </nav>
  );
};

export default Nav;
