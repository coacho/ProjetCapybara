import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import NotesListItem from "./NotesListItem";

import '../../assets/css/note.css';
import btnLeft from '../../assets/img/left.png';
import btnRight from '../../assets/img/right.png';
import btn from '../../assets/img/point.png';

const NotesList = (props) => {


    const [notes, setNotes] = useState([]);

    const allNotes = [
        {
            key: '3',
            title: 'Note 1',
            author: {
                firstName: 'Gilbert',
                lastName: 'Colin',
                labels: {
                    eng: ['Person', 'MedicalPro'],
                    fra: ['Personne', 'Médecin'],
                },
                profession: 'kinésithérapeute',
                // avatar: '../../assets/img/petit-fils.png',
            },
            content: "N'oubliez pas de prendre votre traitement Mme Dupont"
        },
        {
            key: '4',
            title: 'Note 2',
            author: {
                firstName: 'Pierre',
                lastName: 'Dupont',
                labels: {
                    eng: ['Person', 'HelpingPerson', 'InstanceManager'],
                    fra: ['Personne', 'Personne aidante', "Manager de l'instance"]
                },
                // avatar: '../../assets/img/petit-fils.png',
                link: 'fils',
            },
            content: "Je passe te chercher en voiture, dimanche à 10h, pour l'anniversaire de Jeanne"
        },
        {
            key: '8',
            title: 'Note 3',
            author: {
                firstName: 'Jeanne',
                lastName: 'Dupont',
                labels: {
                    eng: ['Person', 'HelpingPerson'],
                    fra: ['Personne', 'Personne aidante',]
                },
                link: 'petite-fille',
            },
            content: "C'est mon anniversaire dimanche, j'ai hâte de te voir Mamie !"
        },
        {
            key: '4',
            title: 'Note 4',
            author: {
                firstName: 'Pierre',
                lastName: 'Dupont',
                labels: {
                    eng: ['Person', 'HelpingPerson', 'InstanceManager'],
                    fra: ['Personne', 'Personne aidante']
                },
                link: 'fils',
            },
            content: "Ton portefeuille est dans ton manteau rouge"
        },
    ];


    useEffect(() => {
        setNotes(allNotes);
    }, []);


    const [displayCount, setDisplayCount] = useState(2);
    //Calculer le nombre total de pages en fonction du nombre total de contacts et du nombre de contacts affichés par page.
    const totalPages = Math.ceil(notes.length / displayCount);
    //Ajouter un nouvel état local pour gérer l'indice de la page active.
    const [currentPage, setCurrentPage] = useState(0);
    //Modifier la logique de l'affichage des contacts en utilisant currentPage pour calculer startIndex :
    const startIndex = currentPage * displayCount;
    const displayedNotes = notes.slice(startIndex, startIndex + displayCount);

    return (
        <>
            <div className="container-noteList">
                {
                    displayedNotes.map((note) => (
                        <Link to={"/helped/notes/details/" + note.key} key={`link-` + note.key}>
                            <NotesListItem note={note} key={'list-item-' + note.key} />
                        </Link>
                    ))
                }
            </div>
            <div className="scrolle">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 0}
                >   
                    {currentPage > 0 
                    && <img src={btnLeft} alt="" />
                    }
                </button>

                {
                    Array.from({ length: totalPages }, (_, index) => (
                        <img
                            src={btn}
                            alt=""
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={currentPage === index ? "active" : ""}
                        />
                    ))
                }

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                >
                    {currentPage !== totalPages -1
                    && <img src={btnRight} alt="" />
                    }
                </button>
            </div>
        </>
    );
}

export default NotesList;