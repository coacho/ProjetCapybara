import React, { useState, useEffect } from "react";
import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { get, login, logout } from "../../slices/userAuth/userAuthSlice";

import loginController from "../../controller/login/loginController";



export default function Login() {

    // Store
    const userAuth = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {

        if(userAuth.authenticated) {

            console.log("Storing in userAuth store : ", userAuth);

            
        } else {

            console.log("No user stored in userAuth store.");
        }

    }, [userAuth])


    // Variables locales du composant
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        console.log('--- CONNEXION ---');
        console.log(email, password);

        const formData = {
            email,
            password,
        };

        try {
            const user = await loginController.authenticateUser(formData);
            
            
            await dispatch(login({
                userId: user.userId,
                userLabels: user.userLabels,
            })); // L'état de l'authentification est contrôlé par le composant HelpingRoot
            
            setEmail('');
            setPassword('');
            

        }
        catch(err) {
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
                                value={email}
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
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button type="submit">Se connecter</button>
                    </form>

                )  : (

                    <p>Vous êtes connecté.</p>
                    
                )
            
            }
            
            {/* </Form> */}
        </>
    )
}