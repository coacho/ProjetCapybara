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
            <div id='container-home'>
                <div className='container-topbar'>
                    <TopBar title={title} btn={btn}/>
                </div>
                <div className='center'>
                    <HelpedCalendarMenu/>
                    <div id="default-calendar-view">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}