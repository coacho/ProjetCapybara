import React, { useState, useEffect } from "react";
import {
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import TopBar from '../../../components/helped/TopBar';
import NotesList from '../../../components/helped/NotesList';

import { useSelector, useDispatch } from "react-redux";



export default function HelpedNotes() {


    //définir les propriétés pour le topbar
    const title = "Notes";
    const btn = "Retour à l'accueil"
    return ( 
        <div className='Home'>
            <div className='TopBar'>
                <TopBar title={title} btn={btn}/>
            </div>
            <div className='Center'>
                <NotesList/>
            </div>
        </div>
    );
}