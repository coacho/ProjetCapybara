import React, { useState, useEffect } from "react";
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";



export default function HelpingCalendar() {

    

    return (
        <>
            <h2>Calendrier</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/helping/calendar/list">
                            <button>Lister les événements du calendrier</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/helping/calendar/add">
                            <button>Ajouter un événement au calendrier</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}