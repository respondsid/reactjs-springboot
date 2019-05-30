import React,{useState,createContext} from 'react';

export const NavigationContext=createContext();

export const NavigationProvider=(props)=>{
    const [navigation, setNavigation]=useState([
        {
            title:'Projects',
            type:'Group',
            child:[
                {
                    title:'Setup New Project',
                    link:'#'
                },
                {
                    title:'List All Project',
                    link:'#'
                }
            ]
        },
        {
            title:'About',
            link:'#'
        }

    ]);
    return(
        <NavigationContext.Provider value={[navigation,setNavigation]}>
            {props.children}
        </NavigationContext.Provider>
    );
}