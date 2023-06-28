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
        <div id='container-home'>
            <div className='container-topbar'>
                <TopBar title={title} btn={btn}/>
            </div>
            <div className='center'>
                <NotesList/>
            </div>
        </div>
    );
}