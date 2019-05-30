import React, { Component } from 'react';
import javaFeature from '../../assets/images/java.svg';
import kafkaFeature from '../../assets/images/apacheKafka.svg';
import openAPIFeature from '../../assets/images/openAPI.svg';
import swaggerFeature from '../../assets/images/swagger.svg';
import { Card, CardBody, Row, Col } from 'reactstrap';

class Dashboard extends Component {
  render() {
    const heroStyles = {
      padding: '50px 0 70px'
    };

    return (
      <div>
        <Row>
          <Col md={6}>
            <div className="home-hero" style={heroStyles}>
              <h1>Welcome to Zerocode</h1>
              <p className="text-muted">
                Speed up your rest api testing
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                <img
                  src={javaFeature}
                  style={{ width: 70, height: 70 }}
                  alt="Java Based Testing Framework"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">Java Rest API testing</h2>
                  <p className="text-muted">
                    Contract testing made easy!!!
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                <img
                  src={kafkaFeature}
                  style={{ width: 90, height: 70 }}
                  alt="Apache Kafka"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">Apache Kafka</h2>
                  <p className="text-muted">
                    Apache Kafka declarative contract testing
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                <img
                  src={openAPIFeature}
                  style={{ width: 70, height: 70 }}
                  alt="OpenAPI"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">Open API</h2>
                  <p className="text-muted">
                    Generate test steps for the api by providing openAPI Spec
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                <img
                  src={swaggerFeature}
                  style={{ width: 70, height: 70 }}
                  alt="Swagger"
                  aria-hidden={true}
                />
                <div className="m-l">
                  <h2 className="h4">Swagger</h2>
                  <p className="text-muted">
                  Generate test steps for the api by providing swagger spec
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
