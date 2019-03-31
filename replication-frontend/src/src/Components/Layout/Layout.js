import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './NavBar'
import ReplicationNav from './../Replication/ReplicationNavigation'
export default function Layout() {
    return (
        <Container>
            <Row>
                <Col><Navbar /></Col>
            </Row>
            <Row>
                <Col><ReplicationNav/></Col>
            </Row>
        </Container>

    );
}
