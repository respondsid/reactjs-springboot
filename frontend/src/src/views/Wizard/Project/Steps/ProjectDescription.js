import React, { useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody } from 'reactstrap';
import ProjectContext from './../../utils/ProjectContext'
 const ProjectDescription= ()=> {
  const projectContext = useContext(ProjectContext);
  return (
    <div>
      <Row>
        <Col md={{ size: 8, offset: 1 }}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="name">Project Name</Label>
                  <Input type="text" name="name" value={projectContext.ProjectData.name} placeholder="Project Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Project Description</Label>
                  <Input type="text" name="description" id="description" value={projectContext.ProjectData.description} placeholder="Project Description" />
                </FormGroup>

                <FormGroup tag="fieldset">
                  <legend>Project Type</legend>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="projectType" value="OPENAPI" /> OpenAPI Spec Config
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="projectType" value="MANUAL"  /> Enter Scenarios and Steps manually
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input type="radio" name="radio1" disabled /> Option three is disabled
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="name">Open API Specification Location</Label>
                  <Input type="text" name="openAPISpec" id="openAPISpec" placeholder="Spec Location" disabled/>
                </FormGroup>

              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectDescription;