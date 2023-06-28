import React, { useState, useEffect } from "react";
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";



export default function HelpingCalendarAddEvent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [heure, setHeure] = useState(''); 
    const [events, setEvents] = useState([]);

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Créer un nouvel événement avec les valeurs du formulaire
        const newEvent = {
          title,
          description,
          date,
          heure
        };
    
        // Appeler la fonction pour ajouter l'événement à la liste
        addEvent(newEvent);
    
        // Réinitialiser les champs du formulaire
        setTitle('');
        setDescription('');
        setDate('');
        setHeure('');
      };
    return (
       
    <>
    <div>
      <h2>Ajouter un nouvel événement</h2>
      <form onSubmit={handleSubmit} className="form-add">
        <div>
          <label htmlFor="title">Titre:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="heure">Heure:</label>
          <input
            type="time"
            id="heure"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
            
        </>
    )
}