import React, { useState, useEffect } from "react";
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import '../../../assets/css-helping/contact-helping.css';

export default function HelpingContacts() {


    return (
        <>
            <h2>Répertoire</h2>
            <nav className="btn-group">
                <ul>
                    <li>
                        <Link to="/helping/contacts/list">
                            <button className="btn-helping">Lister les contacts du répertoire</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/helping/contacts/add">
                            <button className="btn-helping">Ajouter un contact au répertoire</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/helping/contacts/invite">
                            <button className="btn-helping">Inviter un utilisateur Capybara dans l'instance</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}