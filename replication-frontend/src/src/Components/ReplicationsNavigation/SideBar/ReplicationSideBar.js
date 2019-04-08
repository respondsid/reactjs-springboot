import React from 'react'
import { Nav,Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'


export default function ReplicationSideBar() {
    
    return (
        <Navbar  bg="light" expand="lg" className="flex-column" >
        <Nav defaultActiveKey="/home"  className="flex-column">
            <NavLink className="nav-link" exact to="/replications-navigation/replications">Replications</NavLink>
            <NavLink className="nav-link" exact to="/replications-navigation/replication">Add Replication</NavLink>
            <NavLink className="nav-link" exact to="/replications-navigation/replication-status">Status</NavLink>
            
        </Nav>
        </Navbar>
  );
}
