import React, { useState, useEffect } from "react";
import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../slices/userAuth/userAuthSlice";

import loginController from "../../controller/login/loginController";



export default function Login() {

    // Store
    const userAuth = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {

        if (userAuth.authenticated) {

            console.log("Stored in userAuth store : ", userAuth);


        } else {

            console.log("No user stored in userAuth store.");
        }

    }, [userAuth])


    // Variables locales du composant
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleEmailChange = (event) => {
        setUserId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        console.log('--- CONNEXION ---');
        console.log(userId, userPassword);

        const formData = {
            userId,
            userPassword,
        };

        try {
            const user = await loginController.authenticateUser(formData);

            console.log('before dispatch');

            console.log(user);
            await dispatch(login({
                userId: user.userId,
                userLabels: user.userLabels,
                userNodeId: user.userNodeId,
                instance: user.instance,
            })); // L'état de l'authentification est contrôlé par le composant HelpingRoot
            console.log('after dispatch');

            setUserId('');
            setUserPassword('');


        }
        catch (err) {
            console.log(err);
        }

    };

    return (
        <>
            <h2>Connexion</h2>
            {
                !userAuth.authenticated ? (

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">
                                Votre identifiant <span className="sublabel">(email)</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={userId}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Votre mot de passe</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={userPassword}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button type="submit">Se connecter</button>
                    </form>

                ) : (

                    <p>Vous êtes connecté.</p>

                )

            }

        </>
    )
}