import React, { useState, useEffect } from "react";
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";



export default function HelpingReminders() {

    

    return (
        <>
            <h2>Rappels</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/helping/reminders/param">
                            <button className="btn-helping">Paramétrer les rappels</button>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </>
    )
}