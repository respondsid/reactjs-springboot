import React from 'react'
import Content from '../Layout/ContentHOC'
import SideBar from './SideBar/ReplicationSideBar'
import MainContent from './MainContents/ReplicationMainContents'
export default function ReplicationNavigation() {
  return (
    <Content leftContent={<SideBar/>} rightContent={<MainContent/>}/>
  );
}
