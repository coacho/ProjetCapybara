import React, { useState, useEffect } from "react";
import {
    Outlet
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import TopBar from "../../../components/helped/TopBar";
// import Calendar from "../../../components/helped/Calendar";
import HelpedCalendarMenu from "./HelpedCalendarMenu";


export default function HelpedCalendar() {

    //définir les propriétés pour le topbar
    const title = "Calendrier";
    const btn = "Retour à l'accueil"

    return (
        <>
            <div className='Home'>
                <div className='TopBar'>
                    <TopBar title={title} btn={btn}/>
                </div>
                <div className='Center'>
                    <HelpedCalendarMenu/>
                    <div id="default-calendar-view">
                        <Outlet />
                    </div>
                    {/* <CalendarWeek />
                    <CalendarAgenda /> */}
                    {/* <p><em>(composant Calendrier par défaut ici)</em></p> */}
                </div>
            </div>
        </>
    )
}