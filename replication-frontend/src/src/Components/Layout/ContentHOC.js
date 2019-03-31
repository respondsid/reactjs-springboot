import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import classes from './Content.module.css';
export default function Content(props) {
    return  (
        <Container >
            <Row>
                <Col xs={12} md={3}>
                    <div className={classes.LeftContainer}>
                          {props.leftContent} 
                    </div>
                </Col>
                <Col xs={12} md={9}>
                    <div className={classes.RightContainer}>
                           {props.rightContent}
                    </div>
                 </Col>
            </Row>
        </Container>
    );
}
