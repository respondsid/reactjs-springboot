import React, {Component} from 'react';
import ProjectSteps from '../Wizard/Project/ProjectSteps';

export default class Project extends Component {
  constructor() {
    super();
    this.state = { }
  }

  render() {
    return (
      <ProjectSteps/>
    )
  }
}
