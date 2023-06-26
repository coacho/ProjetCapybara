import React, { useState, useEffect } from "react";
import {
    Form,
    useLoaderData,
    redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { get, login, logout } from "../../slices/userAuth/userAuthSlice";

import loginController from "../../controller/login/loginController";
// const authModule = require('../../controller/login/login');


//// import {createBrowserHistory} from "history";
//// const history = createBrowserHistory();

// export async function action() {
//     const contact = await createContact();
//     return { contact };
// }

export default function Login() {

    // Store
    const authUser = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("userAuth store: ", authUser);
    }, [authUser])


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
            
            console.log("utilisateur identifié:", user);
            
            await dispatch(login({
                userId: user.userId,
                userLabels: user.userLabels,
            }));

            setEmail('');
            setPassword('');

        }
        catch(err) {
            console.log(err);
        }

        // Effectuer la validation du formulaire et la gestion de la connexion ici
        // Par exemple, vous pouvez envoyer une requête au serveur pour vérifier les informations d'identification

        // Après une connexion réussie, rediriger l'utilisateur vers une autre page
        // history.push('/dashboard');

    };

    return (
        <>
            <h2>Connexion</h2>
            {
                !authUser.authenticated ? (
                    
                    <form onSubmit={handleSubmit}>
                        {/* <Form method="post" id="contact-form"> */}
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