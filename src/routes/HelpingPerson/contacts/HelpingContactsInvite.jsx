import React, { useState, useEffect } from "react";
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";



export default function HelpingContactsInvite() {


    return (
        <>
            <h2>Inviter un utilisateur Capybara dans l'instance</h2>
            <p>Saisissez l'email lié au compte Capybara de l'utilisateur que vous souhaitez inviter dans l'instance.
                <br />Il recevra une invitation sur son application Capybara, qu'il pourra accepter.
            </p>
        </>
    )
}