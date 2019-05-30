import React from "react";
import classes from "./Content.module.css";
export default function Content(props) {
  return (
    <div className="wrapper">
      <div className="row">
          <div className="col-xs-12 col-md-3">
            <div className={classes.LeftContainer}>{props.leftContent}</div>
          </div>
          <div className="col-xs-12 col-md-9">
            <div className={classes.RightContainer}>{props.rightContent}</div>
          </div>
        </div>
    </div>
  );
}
