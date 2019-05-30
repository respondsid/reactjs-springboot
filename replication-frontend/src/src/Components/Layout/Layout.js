import React from "react";
import Navbar from "./NavBar";
import { Route } from "react-router-dom";
import Content from "./ContentHOC";
import SideBar from "./SideBar";
import ZerocodeRoutes from "../Routes/ZerocodeRoutes";

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Content leftContent={<SideBar/>} rightContent={<ZerocodeRoutes/>}/>
        </div>
      </div>
    </div>
  );
}
