import React, { Component } from 'react';
import Layout from './Components/Layout/Layout'
import {BrowserRouter as Router} from 'react-router-dom'
import { NavigationProvider } from './Context/NavigationContext';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,fas,faBriefcase } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  

  render() {
    library.add(faHome);
    return (
      <NavigationProvider>
      <Router>
        <Layout />
      </Router>
      </NavigationProvider>
    );
  }
}

export default App;
