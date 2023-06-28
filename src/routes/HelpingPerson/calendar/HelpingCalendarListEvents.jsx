import React, { useState, useEffect } from "react";
import EventList from "../../../components/helping/EventList";
import addImg from '../../../assets/img/add.svg';
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";



export default function HelpingCalendarListEvents() {

    // requête : récupérer tous les événements

    return (
        <>
            <h2>Liste des événements du calendrier</h2>
            <EventList/>
            <div className="add-event">
                <Link to="/helping/calendar/add">
                    <button><img src={addImg} alt="" /></button>
                </Link>
            </div>
        </>
    )
}