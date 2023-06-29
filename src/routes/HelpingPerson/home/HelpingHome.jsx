import React from 'react';
// import SideBar from '../Components/SideBar';
// import TopBar from '../Components/TopBar';
// import Menu from '../Components/Menu';
import { useSelector } from 'react-redux';

//page d'accueil
export default function HelpingHome ()
{

    const userAuth = useSelector((state) => state.userAuth);

    //définir les propriétés pour le topbar
    const title = "Accueil";
    const btn = "Paramère"

    return (
        !userAuth.instance
            &&  
                <p>
                    Vous ne faites partie d'aucune instance Capybara.
                    <br/><br/>Contactez la personne qui gère une instance Capybara pour qu'elle vous y invite.

                </p>
                
    );
}