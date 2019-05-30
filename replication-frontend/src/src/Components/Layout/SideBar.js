import React, { Fragment } from "react";
import classes from "./SideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCopy, faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <Fragment>
    
    <div className={[classes.sidebarWrapper,"bg-light","border-right"].join(" ")} id="sidebarWrapper">
      <div className={classes.sidebarHeading}>Zero Code</div>
      <div className="list-group list-group-flush">
        <a href="#projectsMenu" className="list-group-item list-group-item-action bg-light dropdown-toggle" data-toggle="collapse"  aria-expanded="false">Projects</a>
        <ul className="collapse list-unstyled" id="projectsMenu">
                    <li>
                        <a href="#" className="list-group-item list-group-item-action bg-light">Home 1</a>
                    </li>
                    <li>
                        <a href="#" className="list-group-item list-group-item-action bg-light">Home 2</a>
                    </li>
                    <li>
                        <a href="#" className="list-group-item list-group-item-action bg-light">Home 3</a>
                    </li>
                </ul>

        <a href="#" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
      </div>
    </div>

 
    </Fragment>
  );
}
