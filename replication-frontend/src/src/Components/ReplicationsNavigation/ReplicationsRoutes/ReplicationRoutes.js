import React from 'react'
import {Route} from 'react-router-dom'
import Replications from './../Content/Replications/Replications';
import Replication from './../Content/Replication/Replication';
import ReplicationStatus from './../Content/ReplicationStatus/ReplicationStatus';
function ReplicationRoutes() {
  return (
    <div>
          <Route path="/replications-navigation/replications" exact component={Replications}></Route>
          <Route path="/replications-navigation/replication" exact component={Replication}></Route>
          <Route path="/replications-navigation/replication-status" exact component={ReplicationStatus}></Route>
    </div>
  )
}

export default ReplicationRoutes
