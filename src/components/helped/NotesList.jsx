import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import NotesListItem from "./NotesListItem";

const NotesList = (props) => {


    const [notes, setNotes] = useState([]);

    const allNotes = [
        { 
            key: '1', 
            title: 'Note 1', 
            author: {
                firstName: 'Gilbert',
                lastName: 'Colin',
                labels: {
                    eng: ['Person', 'MedicalPro'], 
                    fra: ['Personne', 'Médecin'],
                },
                profession: 'kinésithérapeute',
                avatar: '../../assets/img/petit-fils.png', 
            },
            content: "N'oubliez pas de prendre votre traitement Mme Dupont"
        },
        { 
            key: '2', 
            title: 'Note 2', 
            author: {
                firstName: 'Pierre',
                lastName: 'Dupont',
                labels: {
                    eng: ['Person', 'HelpingPerson', 'InstanceManager'], 
                    fra: ['Personne', 'Personne aidante', "Manager de l'instance"]
                },
                avatar: '../../assets/img/petit-fils.png',
                link: 'fils', 
            },
            content: "Je passe te chercher en voiture, dimanche à 10h, pour l'anniversaire de Jeanne"
        },
        
        // { key: '2', name: 'Note 2', author: 'Pierre Dupont', link: "Votre fils", img: 'image2.jpg' },
    ];


    useEffect(() => {
        setNotes(allNotes);
        // console.log(notes);
    }, []);


    return (

        <div className="container-noteList">
            {
                notes.map((note) => (
                    <Link to={"/helped/notes/details/" + note.key} key={`link-` + note.key}>
                        <NotesListItem note={note} key={'list-item-' + note.key} />
                    </Link>
                ))
            }

        </div>
    );
}

export default NotesList;