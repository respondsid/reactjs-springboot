import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './NavBar'
import {Route} from 'react-router-dom';
import ReplicationNavigation from './../ReplicationsNavigation/ReplicationNavigation'

export default function Layout() {
    return (
        <Container>
            <Row>
                <Col><Navbar /></Col>
            </Row>
            <Row>
                <Col>
                    <Route path="/replications-navigation"  component={ReplicationNavigation}></Route>
                    <Route path="/configurations" exact></Route>
                </Col>
            </Row>
        </Container>

    );
}
