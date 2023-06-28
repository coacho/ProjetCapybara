import React, { useState, useEffect } from "react";
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import remindersController from "../../../controller/reminders/remindersController";



export default function HelpingRemindersParam() {

    const userAuth = useSelector((state) => state.userAuth);

    const [reminders, setReminders] = useState({});
    const [showConfirmMessage, setShowConfirmMessage] = useState('none');

    useEffect(() => {
        loadReminders();
    }, [])

    async function loadReminders() {
        
        setReminders(await remindersController.getAllReminders(userAuth));
    }

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        let formData = reminders;

        let updatedReminders = await remindersController.updateAllReminders(formData, userAuth);
        setReminders(updatedReminders);
        console.log("Les paramètres de rappels ont bien été pris en compte.");
        setShowConfirmMessage('block');

    }

    // requête : récupérer tous les rappels et leurs paramètres
    return (
        <>
            <h2>Paramétrer les rappels</h2>
            <p> 
                Pour chaque catégorie, indiquez la fréquence de rappel (en heures) nécessaire.
                <br /><i>Si la personne que vous aidez est suivie par un psychiatre, ce dernier est en mesure de vous conseiller à ce sujet.</i>
            </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="notes">Notes</label>
                    <input type="number" name="notes" id="notes" defaultValue={reminders.notes} />
                    <span>heures</span>
                </div>
                <div className="form-group">
                    <label for="events">Événements</label>
                    <input type="number" name="events" id="events" defaultValue={reminders.events} />
                    <span>heures</span>
                </div>
                <div className="form-group">
                    <label for="medicalAppointments">Rendez-vous médicaux</label>
                    <input type="number" name="medicalAppointments" id="medicalAppointments" defaultValue={reminders.medicalAppointments} />
                    <span>heures</span>
                </div>
                <div className="form-group">
                    <label for="medicalTreatments">Traitements médicaux</label>
                    <input type="number" name="medicalTreatments" id="medicalTreatments" defaultValue={reminders.events} />
                    <span>heures</span>
                </div>
                <button type="submit">Confirmer</button>
            </form>
            <p id="confirm-message" style={{display: showConfirmMessage}}>Les paramètres de rappels ont bien été pris en compte</p>
        </>
    )
}