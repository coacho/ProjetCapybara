import React, { useState, useEffect } from "react";
import {
    Link
    // Form,
    // useLoaderData,
    // redirect,
    //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

export default function HelpingContactsAddContact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adresse, setAdresse] = useState('');
    const [relation, setRelation] = useState(''); 
    const [age, setAge] = useState(''); 
    const [contacts, setContacts] = useState([]);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };
    
      const handleSubmit = (e) => {
        e.preventDefault();

         // Créer un nouvel événement avec les valeurs du formulaire
         const newContact = {
            firstName,
            lastName,
            adresse,
            relation,
            age
          };

          addContact(newContact);
        
      };
    
      return (
        <div>
        <h2>Ajouter un nouveau contact</h2>
        <form onSubmit={handleSubmit} className="form-add">
          <div>
            <label htmlFor="firstName">Prénom:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Nom:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="adresse">Adresse:</label>
            <input
              type="text"
              id="adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="relation">Relation:</label>
            <input
              type="text"
              id="relation"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Âge:</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
}

