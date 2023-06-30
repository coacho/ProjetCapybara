import React, { useState, useEffect } from "react";
import {
    // Form,
    useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import TopBar from '../../../components/helped/TopBar';
import ContactsList from '../../../components/helped/ContactsList';

import { useSelector, useDispatch } from "react-redux";
import contactsController from "../../../controller/contacts/contactsController";



export default function HelpedContacts() {

    // Composant qui affiche la liste des proches
    const userAuth = useSelector((state) => state.userAuth);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(userAuth);
        contactsController.getAllContacts(userAuth.userId, userAuth.instance.instanceID)
            .then(contactsData => {
                setContacts(contactsData)
            });
    }, [])
    
    // Définir les propriétés pour le topbar
    const title = "Mes proches";
    const btn = "Retour à l'accueil"
    return ( 
        <div id='container-home'>
            <div className='container-topbar'>
                <TopBar title={title} btn={btn}/>
            </div>
            <div className='center'>
                {/* <ContactsList /> */}
                <ContactsList contacts={contacts}/>
            </div>
        </div>
    );
}