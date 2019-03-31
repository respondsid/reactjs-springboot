import React from 'react'
import { Nav,Navbar} from 'react-bootstrap';

export default function ReplicationSideBar() {
    
    return (
        <Navbar  bg="light" expand="lg" className="flex-column" >
        <Nav defaultActiveKey="/home"  className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav>
        </Navbar>
  );
}
