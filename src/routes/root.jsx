import {
    Outlet,
    Link,
    useLoaderData,
    Form,
    useNavigate,
} from "react-router-dom";
// import { getContacts, createContact } from "../contacts";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get, login, logout } from "../slices/userAuth/userAuthSlice";

// export async function loader() {
//     const contacts = await getContacts();
//     return { contacts };
// }

// export async function action() {
//     const contact = await createContact();
//     return { contact };
// }

export async function testExpressAPI() {

    // test variables d'environnement
    const API_SERVER_URI = import.meta.env.VITE_APP_API_SERVER_URI;
    

    // test: neo4j_get
    let req = API_SERVER_URI + '/';
    let res = await fetch(req, {mode: 'cors'});
    let result = await res.text();
    console.log('test connexion API Server', result);

    req = API_SERVER_URI + '/neo4j_get';
    res = await fetch(req, {mode: 'cors'});
    result = await res.json();
    console.log("neo4j_get", result);
    
    

}

export default function Root() {

    // const { contacts } = useLoaderData();

    const userAuth = useSelector((state) => state.userAuth);
    const navigate = useNavigate();
    

    useEffect(() => {
        testExpressAPI();
    }, []);

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

    // }, [userAuth.authenticated])
    //! FIN : Commenter pour ne pas avoir à se connecter lors des tests



    return (
        <>
            <div id="sidebar">
            {
                !userAuth.authenticated 
                &&  <>
                        <h1>Capybara</h1>
                        <nav>
                            <Link to="register">Créer un compte</Link>
                            <Link to="login">Se connecter</Link>
                        </nav>
                    </>
            }
            </div>
                
            <div id="detail">
                <Outlet />
            </div>
        </>
    );

}

