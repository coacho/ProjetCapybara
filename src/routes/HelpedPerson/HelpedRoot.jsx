import {
    Outlet,
    Link,
    useLoaderData,
    Form,
    useNavigate,
} from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../../components/helped/SideBar";
import '../../assets/css/home.css';



export default function HelpedRoot() {

    const userAuth = useSelector((state) => state.userAuth);
    const navigate = useNavigate();

    console.log(userAuth);

    //! DEBUT : Commenter pour ne pas avoir à se connecter lors des tests
    useEffect(() => {
        
        if (userAuth.authenticated) 
        {
            console.log(`${userAuth.userId} est connecté`);
            if (userAuth.userLabels.includes('HelpedPerson'))
            {
                navigate('/helped/home');
            }
            else {
                navigate('/helping/home');
            }
        } 
        else {
            console.log(`Aucun utilisateur n'est connecté`);
            navigate('/login');
        }

    }, []) 
    //! FIN : Commenter pour ne pas avoir à se connecter lors des tests

    return (
        //! DEBUT : Commenter pour ne pas avoir à se connecter lors des tests
        userAuth.authenticated && 
        //! FIN : Commenter pour ne pas avoir à se connecter lors des tests
            <div className="container">
                <div className="home">
                    <div id="sidebar-helped">
                        <SideBar />
                    </div>
                    <Outlet />
                </div>
            </div>

    );

}

