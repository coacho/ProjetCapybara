import React, { useState, useEffect } from "react";
import addImg from '../../../assets/img/add.svg';

import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import ConctactList from "../../../components/helping/ContactList";



export default function HelpingContactsListContacts() {


    return (
        <>
            <h2>Lister les contacts du répertoire</h2>
            <ConctactList/>
            <div className="add-event">
                <Link to="/helping/contacts/add">
                    <button><img src={addImg} alt="" /></button>
                </Link>
            </div>
        </>
    )
}