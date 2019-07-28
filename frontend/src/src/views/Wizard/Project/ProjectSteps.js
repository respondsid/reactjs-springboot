import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import ProjectDescription from './Steps/ProjectDescription';
import OpenSpecConfig from './Steps/OpenSpecConfig';
import ZerocodeSteps from './Steps/ZerocodeSteps';
import Review from './Steps/Review';
import 'react-stepzilla/src/css/main.css';
import ProjectContextProvider from './../utils/ProjectContext';

export default class ProjectSteps extends Component {
 constructor(props) {
     super(props);
     this.updateProjectData=this.updateProjectData.bind(this);
     this.goToStep=this.goToStep.bind(this);
     this.state={
         loading:false,
         projectData:{
             name:"test",
             description:"testDescription",
             projectType:"OPENAPI",
             openAPISpec:"",
             scenarios:[]
         },
         updateProjectData:this.updateProjectData,
         goToStep: this.goToStep
     }
 }

 updateProjectData(){

 }

 goToStep(){
     
 }

  render() {
    const steps = [
      { name: 'Project Description', component: <ProjectDescription /> },
      { name: 'OpenSpec Configuration', component: <OpenSpecConfig /> },
      { name: 'Zerocode Steps', component: <ZerocodeSteps /> },
      { name: 'Review', component: <Review /> },
    ];
    return (
      <ProjectContextProvider value={this.state}>
        <div className="step-progress">
          <StepZilla steps={steps} dontValidate={true} showSteps={true} />
        </div>
      </ProjectContextProvider>
    );
  }
}
