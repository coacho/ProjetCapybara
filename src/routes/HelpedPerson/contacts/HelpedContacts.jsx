import React, { useState, useEffect } from "react";
import {
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import TopBar from '../../../components/helped/TopBar';
import ContactsList from '../../../components/helped/ContactsList';

import { useSelector, useDispatch } from "react-redux";



export default function HelpedContacts() {


    //définir les propriétés pour le topbar
    const title = "Mes proches";
    const btn = "Retour à l'accueil"
    return ( 
        <div className='Home'>
            <div className='TopBar'>
                <TopBar title={title} btn={btn}/>
            </div>
            <div className='Center'>
                <ContactsList/>
            </div>
        </div>
    );
}