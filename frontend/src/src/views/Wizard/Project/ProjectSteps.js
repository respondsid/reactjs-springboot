import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import ProjectDescription from './Steps/ProjectDescription';
import OpenSpecConfig from './Steps/OpenSpecConfig';
import ZerocodeSteps from './Steps/ZerocodeSteps';
import Review from './Steps/Review';
import 'react-stepzilla/src/css/main.css';
import { ProjectContext } from '../utils/ProjectContext';
import ProjectDescriptionStep from './Steps/ProjectDescription';


export default class ProjectSteps extends Component {
 constructor(props) {
     super(props);
     this.updateProjectData=projectData=>this.setState((prevState)=>{ const mergedProjectDate={...prevState.projectData,...projectData}
                                                                      return ({...prevState,projectData:mergedProjectDate});});
     this.state={
         loading:false,
         projectData:{
             name:"test12",
             description:"testDescription",
             projectType:"OPENAPI",
             openAPISpec:"",
             scenarios:[]
         }

     }
 }



  render() {
    const steps = [
      { name: 'Project Description', component: <ProjectDescriptionStep/> },
      { name: 'OpenSpec Configuration', component: <OpenSpecConfig /> },
      { name: 'Zerocode Steps', component: <ZerocodeSteps/> },
      { name: 'Review', component: <Review /> }
    ];
    return (
      <ProjectContext.Provider value={{projectData:this.state.projectData, updateProjectData:this.updateProjectData}}>
        <div className="step-progress">
        <StepZilla steps={steps}  showSteps={true} />
        </div>
      </ProjectContext.Provider>
    );
  }
}
