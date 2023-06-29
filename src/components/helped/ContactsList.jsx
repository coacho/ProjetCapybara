import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import ContactsListItem from "./ContactsListItem";

import '../../assets/css/contact.css';
import btnLeft from '../../assets/img/left.png';
import btnRight from '../../assets/img/right.png';
import btn from '../../assets/img/point.png';


const ContactsList = (props) => {

    const contacts = props.contacts;

    const [displayCount, setDisplayCount] = useState(4);
    //Calculer le nombre total de pages en fonction du nombre total de contacts et du nombre de contacts affichés par page.
    const totalPages = Math.ceil(contacts.length / displayCount);
    //Ajouter un nouvel état local pour gérer l'indice de la page active.
    const [currentPage, setCurrentPage] = useState(0);
    //Modifier la logique de l'affichage des contacts en utilisant currentPage pour calculer startIndex :
    const startIndex = currentPage * displayCount;
    const displayedContacts = contacts.slice(startIndex, startIndex + displayCount);

    //faire une boucle pour avoir tous les contacts et les envoyer chacun dans HelpedContactItem pour les afficher
    return (
        <>
            <div className="container-contactList">
                {
                    displayedContacts.map((contact) => (
                        <Link to={"/helped/contacts/details/" + contact.nodeId} key={`link-` + contact.nodeId}> {/*affiche la page details de la note au clique*/}
                            <ContactsListItem contact={contact} key={'list-item-' + contact.nodeId} />
                        </Link>
                    ))
                }

            </div>
            <div className="scrolle">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    {currentPage != 0
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
                    {currentPage != totalPages - 1
                        && <img src={btnRight} alt="" />
                    }
                </button>
            </div>
        </>
    );
}

export default ContactsList;