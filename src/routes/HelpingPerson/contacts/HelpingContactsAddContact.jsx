import React, { useState, useEffect } from "react";
import {
  Link
  // Form,
  // useLoaderData,
  // redirect,
  //// useHistory,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import contactController from "../../../controller/contacts/contact/contactController";

export default function HelpingContactsAddContact() {

  const userAuth = useSelector((state) => state.userAuth);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [link, setLink] = useState('');
  const [linkDetail, setLinkDetail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [avatarFile, setAvatarFile] = useState('');

  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleAvatarFileChange = (event) => {
    // console.log(event.target.files[0]);
    const file = event.target.files[0];
    setAvatarFile(file);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Créer un nouvel événement avec les valeurs du formulaire
    const formData = {
      firstName,
      lastName,
      link,
      linkDetail,
      birthDate,
    };
    const newAvatarFile = avatarFile;

    console.log("--- CREATION D'UN CONTACT ---", formData, newAvatarFile);

    // let newUser;

    try {

      let { newContact, avatarResponseText } = await contactController.addContact(formData, userAuth.instance.instanceID, newAvatarFile);

      console.log(newContact);

      if (typeof (newContact.nodeId) == "number") {
        navigate('/');
      }


    } catch (err) {

      console.error(err);
    }

    setFirstName('')
    setLastName('')
    setLink('')
    setLinkDetail('')
    setBirthDate('')

  };

  return (
    <div>
      <h2>Ajouter un contact au répertoire</h2>
      <form onSubmit={handleSubmit} className="form-add">
        <div>
          <label htmlFor="firstName">Prénom:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Nom:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="link">Relation: <i>(par exemple : "fille", "frère", "nièce", "ami")</i></label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="linkDetail">Détaillez la relation: <i>(par exemple, "la fille de ton frère Albert". N'hésitez pas à être exhaustif.)</i></label>
          <textarea
            type="text"
            id="linkDetail"
            value={linkDetail}
            onChange={(e) => setLinkDetail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="birthDate">Date de naissance <i>(optionnel)</i></label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="avatarFile">Photo de la personne</label>
          <input
            type="file"
            name="avatarFile"
            id="avatarFile"
            onChange={handleAvatarFileChange}
            required
          />
        </div>
        <button type="submit">Ajouter aux contacts</button>
      </form>
    </div>
  );
}

