import React, { useState, useEffect } from "react";
import {
    Form,
    useLoaderData,
    redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { get, login, logout } from "../../slices/userAuth/userAuthSlice";

// import loginController from "../../controller/login/loginController";


export default function Logout() {

    // Store
    const authUser = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("userAuth store: ", authUser);
    // }, [authUser])

    const logout = () => {
        console.log('--- DECONNEXION ---');

        try {
            // const user = await loginController.authenticateUser(formData);
            
            console.log("Déconnexion:", user);
            
            //~
            //~ await dispatch(logout());


        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <h2>Déconnexion</h2>
            {
                authUser.authenticated ? (
                    
                    <p>Déconnexion...</p>

                )  : (

                    <p>Aucun utilisateur n'est connecté</p>
                    
                )
            
            }
            
            {/* </Form> */}
        </>
    )
}