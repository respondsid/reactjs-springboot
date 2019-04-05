import React from 'react'
import { Nav,Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export default function ReplicationSideBar() {
    
    return (
        <Navbar  bg="light" expand="lg" className="flex-column" >
        <Nav defaultActiveKey="/home"  className="flex-column">
            <NavLink exact to="/replications">Replications</NavLink>
            <NavLink exact to="/replication">Add Replication</NavLink>
            <NavLink exact to="/replication-status">Status</NavLink>
        </Nav>
        </Navbar>
  );
}
