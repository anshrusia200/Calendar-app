import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  // interface optionArray {
  //   name: string;
  //   icon: string;
  //   link: string;
  //   active: boolean;
  // }
  const [options, setOptions] = useState([
    {
      name: "Calendar",
      icon: "fa-solid fa-calendar-day",
      link: "/",
      active: true,
    },
    {
      name: "Clients",
      icon: "fa-solid fa-user-group",
      link: "/clients",
      active: false,
    },
    {
      name: "All Meetings",
      icon: "fa-solid fa-calendar-day",
      link: "/allMeetings",
      active: false,
    },
    {
      name: "Billing",
      icon: "fa-regular fa-credit-card",
      link: "#",
      active: false,
    },
    {
      name: "Insurance",
      icon: "fa-solid fa-shield",
      link: "#",
      active: false,
    },
    {
      name: "Analysis",
      icon: "fa-solid fa-square-poll-vertical",
      link: "#",
      active: false,
    },
    {
      name: "Account Activity",
      icon: "fa-solid fa-list",
      link: "#",
      active: false,
    },
    {
      name: "Reminders",
      icon: "fa-sharp fa-solid fa-bell",
      link: "#",
      active: false,
    },
    {
      name: "Settings",
      icon: "fa-sharp fa-solid fa-gear",
      link: "#",
      active: false,
    },
  ]);

  const handleClick = (name: string) => {
    console.log(name);
    const newState = options.map((option) => {
      if (option.active === true) {
        return { ...option, active: false };
      }
      if (option.name === name) {
        return { ...option, active: true };
      } else {
        return option;
      }
    });
    setOptions(newState);
  };

  return (
    <div className="sideBar">
      <div className="sideBarTop">
        {options.map((option) => {
          return (
            <div
              onClick={() => {
                handleClick(option.name);
              }}
            >
              <Link
                className={option.active ? "sideItem activeItem" : "sideItem"}
                to={option.link}
              >
                <div className="option-icon">
                  <i className={option.icon}></i>
                </div>
                <span>{option.name}</span>
              </Link>
            </div>
          );
        })}
        <div className="divider"></div>
        <div className="sideItem recent-btn">
          <i className="fa-regular fa-eye"></i>
          <span>Recently Viewed</span>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
      <div className="sideBarBottom">
        <div className="download-app">
          <i
            className="fa-solid fa-mobile-screen-button"
            style={{ color: "#000", fontSize: "20px" }}
          ></i>
          <span>Download free app</span>
        </div>
        <div className="privacy-toggle ">
          <i className="fa-solid fa-unlock"></i>
          <span>Privacy off</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
