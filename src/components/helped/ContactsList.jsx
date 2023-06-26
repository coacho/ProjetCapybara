import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import ContactsListItem from "./ContactsListItem";

const ContactsList = (props) => {
    //composant qui afffiche la liste des proches
    const [contacts, setContacts] = useState([]);

    const allContacts = [
        { key: '1', name: 'Contact 1', relation: 'Relation 1', image: '../../assets/img/petit-fils.png' },
        { key: '2', name: 'Contact 2', relation: 'Relation 2', image: 'image2.jpg' },
        { key: '3', name: 'Contact 3', relation: 'Relation 3', image: 'image3.jpg' },
        { key: '4', name: 'Contact 4', relation: 'Relation 4', image: 'image4.jpg' },
        { key: '5', name: 'Contact 5', relation: 'Relation 5', image: 'image5.jpg' },
        { key: '6', name: 'Contact 6', relation: 'Relation 6', image: 'image6.jpg' },
        // ... Ajoutez les contacts restants ici
    ];


    useEffect(() => {
        setContacts(allContacts);
    }, []);


    //faire une boucle pour avoir tous les contacts et les envoyer chacun dans HelpedContactItem pour les afficher
    return (
        <div className="container-contactList">
            {
                contacts.map((contact) => (
                    <Link to={"/helped/contacts/details/" + contact.key} key={`link-` + contact.key}> {/*affiche la page details de la note au clique*/}
                        <ContactsListItem contact={contact} key={'list-item-' + contact.key} />
                    </Link>
                ))
            }

        </div>
    );
}

export default ContactsList;