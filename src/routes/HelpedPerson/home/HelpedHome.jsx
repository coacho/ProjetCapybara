import React from 'react';
import TopBar from '../../../components/helped/TopBar';
import Menu from '../../../components/helped/Menu';

//page d'accueil
export default function HelpedHome ()
{
    //définir les propriétés pour le topbar
    const title = "Accueil";
    const btn = "Paramètres"

    return (
        <div id='container-home'>
            <div className='container-topbar'>
                <TopBar title={title} btn={btn}/>
            </div>
            <div className='center'>
                <Menu/>
            </div>
        </div>
    );
}