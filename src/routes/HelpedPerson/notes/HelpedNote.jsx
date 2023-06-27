import React, { useState, useEffect } from "react";
import {
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import TopBar from '../../../components/helped/TopBar';
import NoteDetails from "../../../components/helped/NoteDetails";

import { useSelector, useDispatch } from "react-redux";


export default function HelpedNote() {


    //définir les propriétés pour le topbar
    const title = "Mes notes";
    const btn = "Retour à l'accueil"
    return ( 
        <div id="container-home">
            <div className='container-topbar'>
                <TopBar title={title} btn={btn}/>
            </div>
            <div className='center'>
                <NoteDetails/>
            </div>
        </div>
    );
}