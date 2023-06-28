import React from 'react';
import {
    Link
} from "react-router-dom";
import TopBar from '../../../components/helped/TopBar';

//page d'accueil
export default function HelpedSettings ()
{
    //définir les propriétés pour le topbar
    const title = "Paramètres";
    const btn = "Retour à l'accueil"

    return (
        <div id='container-home'>
            <div className='container-topbar'>
                <TopBar title={title} btn={btn}/>
            </div>
            <nav>
                <ul>
                    <Link to="/logout">Se déconnecter</Link>
                </ul>
            </nav>
        </div>
    );
}