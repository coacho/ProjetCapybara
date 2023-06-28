import React, { useState, useEffect } from "react";
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import '../../../assets/css-helping/calendar.css';

export default function HelpingCalendar() {

    

    return (
        <>
            <h2>Calendrier</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/helping/calendar/list">
                            <button className="btn-view-event">Lister les événements du calendrier</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/helping/calendar/add">
                            <button className="btn-view-event">Ajouter un événement au calendrier</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}