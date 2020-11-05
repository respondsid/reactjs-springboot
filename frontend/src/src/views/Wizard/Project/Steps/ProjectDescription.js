import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody } from 'reactstrap';
import { ProjectContext } from './../../utils/ProjectContext';
export default class ProjectDescriptionStep extends Component {
  static contextType = ProjectContext;
  
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    return true;
   }

  isValidated(){
    this.context.updateProjectData(this.state);
    return true;

  }
  render() {
    return (
      <div>
        <Row>
          <Col md={{ size: 8, offset: 1 }}>
            <Card>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="name">Project Name</Label>
                    <Input
                      type="text"
                      name="name"
                      defaultValue={this.context.projectData.name}
                      placeholder="Project Name"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Project Description</Label>
                    <Input
                      type="text"
                      name="description"
                      id="description"
                      defaultValue={this.context.projectData.description}
                      placeholder="Project Description"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>

                  <FormGroup tag="fieldset">
                    <legend>Project Type</legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="projectType"
                          value="OPENAPI"
                          checked={this.state.projectType === "OPENAPI"}
                          onChange={this.handleInputChange}
                        />
                        OpenAPI Spec Config
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="projectType" value="MANUAL" 
                         checked={this.state.projectType === "MANUAL"}
                        onChange={this.handleInputChange}/> Enter Scenarios and Steps manually
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Open API Specification Location</Label>
                    <Input type="text" name="openAPISpec" id="openAPISpec" onChange={this.handleInputChange} defaultValue={this.context.projectData.openAPISpec}  placeholder="Spec Location" disabled={this.state.projectType==="MANUAL"} />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
