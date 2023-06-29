import React, { useState, useEffect } from "react";
import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import registerController from "../../controller/register/registerController";
// import { login, logout } from "../../slices/userAuth/userAuthSlice";

// import {registerController} from "../../controller/register/registerController";



export default function RegisterAccount() {

    // Store
    const userAuth = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // useEffect(() => {

    //     if(userAuth.authenticated) {

    //         console.log("Storing in userAuth store : ", userAuth);


    //     } else {

    //         console.log("No user stored in userAuth store.");
    //     }

    // }, [userAuth])


    // Variables locales du composant
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [userLabel, setUserLabel] = useState('HelpingPerson');
    const [avatarFile, setAvatarFile] = useState('');

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };
    const handleUserPasswordChange = (event) => {
        setUserPassword(event.target.value);
    };
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleBirthDateChange = (event) => {
        setBirthDate(event.target.value);
    };
    const handleUserLabelChange = (event) => {
        setUserLabel(event.target.value);
    };
    const handleAvatarFileChange = (event) => {
        // console.log(event.target.files[0]);
        const file = event.target.files[0];
        setAvatarFile(file);
        console.log(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        const formData = {
            userId,
            userPassword,
            firstName,
            lastName,
            birthDate,
        };
        const newAvatarFile = avatarFile;

        console.log("--- CREATION D'UN COMPTE ---", formData, newAvatarFile);

        // let newUser;

        try {

            if (userLabel === "HelpingPerson") {
                let {newUser, avatarResponseText} = await registerController.registerHelpingPersonAccount(formData, newAvatarFile);
                
                console.log(newUser);

                if(typeof(newUser.nodeId) == "number") {
                    navigate('/');
                }
            }


        } catch (err) {

            console.error(err);
        }

        setUserId('');
        setUserPassword('');
        setFirstName('');
        setLastName('');
        setBirthDate('');
        setUserLabel('');
        setAvatarFile('');

        
    }

    return (
        <>
            <h2>Créer un compte</h2>
            {
                !userAuth.authenticated ? (

                    <form onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="userLabel">
                                Compte pour un :
                            </label>
                            <select name="userLabel" id="userLabel" onChange={handleUserLabelChange} value={userLabel}>
                                <option value="HelpingPerson">Aidant</option>
                                <option value="HelpedPerson" disabled>Aidé</option>
                                <option value="MedicalPro" disabled>Médecin</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="email">
                                Votre email
                            </label>
                            <input
                                type="text"
                                name="userId"
                                id="userId"
                                value={userId}
                                onChange={handleUserIdChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Votre mot de passe</label>
                            <input
                                type="password"
                                name="userPassword"
                                id="userPassword"
                                value={userPassword}
                                onChange={handleUserPasswordChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="firstName">
                                Votre prénom
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">
                                Votre nom
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={lastName}
                                onChange={handleLastNameChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="birthDate">
                                Votre date de naissance (optionnel)
                            </label>
                            <input
                                type="date"
                                name="birthDate"
                                id="birthDate"
                                value={birthDate}
                                onChange={handleBirthDateChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="avatarFile">
                                Une photo de vous
                            </label>
                            <input
                                type="file"
                                name="avatarFile"
                                id="avatarFile"
                                onChange={handleAvatarFileChange}
                            />
                        </div>
                        <button type="submit">Créer mon compte</button>
                    </form>

                ) : (

                    <p>Vous êtes déjà connecté.</p>

                )

            }

        </>
    )
}