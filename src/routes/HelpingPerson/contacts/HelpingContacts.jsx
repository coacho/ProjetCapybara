import React, { useState, useEffect } from "react";
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";



export default function HelpingContacts() {


    return (
        <>
            <h2>Répertoire</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/helping/contacts/list">
                            <button>Lister les contacts du répertoire</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/helping/contacts/add">
                            <button>Ajouter un contact au répertoire</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/helping/contacts/invite">
                            <button>Inviter un utilisateur Capybara dans l'instance</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}