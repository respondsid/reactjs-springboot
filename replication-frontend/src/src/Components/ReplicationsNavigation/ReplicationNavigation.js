import React from 'react'
import Content from '../Layout/ContentHOC'
import ReplicationSideBar from './SideBar/ReplicationSideBar'
import ReplicationRoutes from './ReplicationsRoutes/ReplicationRoutes';
export default function ReplicationNavigation() {
  return (
    <Content leftContent={<ReplicationSideBar/>} rightContent={<ReplicationRoutes/>}/>
  );
}
