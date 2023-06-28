import React, { useState, useEffect } from "react";
import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { get, login, logout } from "../../slices/userAuth/userAuthSlice";


export default function Logout() {

    // Store
    const userAuth = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect( () => {

        async function logoutUser() {

            await dispatch(logout());
            navigate('/');
        }
        logoutUser();

    }, [])

    return (
        <>
            <h2>Déconnexion</h2>
            {
                userAuth.authenticated ? (
                    
                    <p>Déconnexion...</p>

                )  : (

                    <p>Aucun utilisateur n'est connecté</p>
                    
                )
            
            }
            
        </>
    )
}