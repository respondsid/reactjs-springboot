import React from 'react'

const ProjectContext = React.createContext({})

export const ProjectContextProvider = ProjectContext.Provider
export const ProjectContextConsumer = ProjectContext.Consumer
export default ProjectContext;