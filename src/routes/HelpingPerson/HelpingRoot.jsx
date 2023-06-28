import {
    Outlet,
    Link,
    useLoaderData,
    Form,
    useNavigate,
} from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


export default function HelpingRoot() {

    const userAuth = useSelector((state) => state.userAuth);
    const navigate = useNavigate();

    //! DEBUT : Commenter pour ne pas avoir à se connecter lors des tests
    // useEffect(() => {
        
    //     if (userAuth.authenticated) 
    //     {
    //         console.log(`${userAuth.userId} est connecté`);
    //         if (userAuth.userLabels.includes('HelpedPerson'))
    //         {
    //             navigate('/helped/home');
    //         }
    //         else {
    //             navigate('/helping/home');
    //         }
    //     } 
    //     else {
    //         console.log(`Aucun utilisateur n'est connecté`);
    //         navigate('/login');
    //     }

    // }, [])
    //! FIN : Commenter pour ne pas avoir à se connecter lors des tests
    
    return (

        //! DEBUT : Commenter pour ne pas avoir à se connecter lors des tests
        // userAuth.authenticate &&
        //! FIN : Commenter pour ne pas avoir à se connecter lors des tests
            <div className="container-home-helping">
                <div id="sidebar">
                    <h1>Capybara</h1>
                    <nav>
                        <Link to="/helping/home"><h1>Accueil</h1></Link>
                        <Link to="/helping/calendar">Calendrier</Link>
                        <Link to="/helping/contacts">Répertoire</Link>
                        <Link to="/helping/reminders">Rappels</Link>
                        <Link to="/logout">Se déconnecter</Link>
                    </nav>
                </div>
                <div id="outlet">
                    <Outlet />
                </div>
            </div>
    )
}