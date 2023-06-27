import React from 'react';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import Menu from '../Components/Menu';

//page d'accueil
export default function HelpedHome ()
{
    //définir les propriétés pour le topbar
    const title = "Accueil";
    const btn = "Paramètre"

    return (
        <div className='home'>
            <div id="sidebar">
                <SideBar/>
            </div>
            <div id="container-home">
                <div className='container-topbar'>
                    <TopBar title={title} btn={btn}/>
                </div>
                <div className='center'>
                    <Menu/>
                </div>
            </div>
        </div>
    );
}