import ContactItem from "./ContactItem";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

const ContactList = (props) => {
    //composant qui afffiche la liste des proches
    //const contacts = props;

    const allContacts = [
        { id:'1',  name: 'Contact 1', relation: 'Relation 1', image: '../public/img/petit-fils.png' },
        { id:'2', name: 'Contact 2', relation: 'Relation 2', image: 'image2.jpg' },
        { id:'3', name: 'Contact 3', relation: 'Relation 3', image: 'image3.jpg' },
        { id:'4', name: 'Contact 4', relation: 'Relation 4', image: 'image4.jpg' },
        { id:'5', name: 'Contact 5', relation: 'Relation 5', image: 'image5.jpg' },
        { id:'6', name: 'Contact 6', relation: 'Relation 6', image: 'image6.jpg' },
        // ... Ajoutez les contacts restants ici
      ];
    
      const [contacts, setContacts] = useState([]);
      // //setContacts(allContacts);
    
      useEffect(() => {
        setContacts(allContacts);
      }, []);
    

    //faire une boucle pour avoir tous les contacts et les envoyer chacun dans contactItem pour les afficher
    return ( 
        <div className="container-contactList">
            {
                contacts.map((contact) => (
                    <NavLink to="/contact/details/1"> {/*affiche la page details de la note au clique*/}
                        <ContactItem contact = {contact} key={contact.id}/>
                    </NavLink>
                ))
            }
            
        </div>
     );
}
 
export default ContactList;