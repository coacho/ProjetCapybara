import ContactItem from "./ContactItem";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import btnLeft from '../public/img/left.png';
import btnRight from '../public/img/right.png';
import btn from '../public/img/point.png';


const ContactList = () => {
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


    const [displayCount, setDisplayCount] = useState(4);
    //Calculer le nombre total de pages en fonction du nombre total de contacts et du nombre de contacts affichés par page.
    const totalPages = Math.ceil(allContacts.length / displayCount);
    //Ajouter un nouvel état local pour gérer l'indice de la page active.
    const [currentPage, setCurrentPage] = useState(0);
    //Modifier la logique de l'affichage des contacts en utilisant currentPage pour calculer startIndex :
    const startIndex = currentPage * displayCount;
    const displayedContacts = contacts.slice(startIndex, startIndex + displayCount);
    

    //faire une boucle pour avoir tous les contacts et les envoyer chacun dans contactItem pour les afficher
    return ( 
        <div>
            <div className="container-contactList">
            {
                displayedContacts.map((contact) => (
                <NavLink to={`/contact/details/${contact.id}`} key={contact.id}>
                    <ContactItem contact={contact} />
                </NavLink>
                ))
            }
            </div>

            <div className="scrolle">
                <img src={btnLeft} 
                    alt=""
                    onClick={() => setCurrentPage(currentPage - 1)}
                    class={currentPage === 0 ? "hidden" : ""}
                    />

                <div className="btnPage">
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
                </div>
                
                <img
                    src={btnRight}
                    alt=""
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                />
            </div>
        </div>

     );
}
 
export default ContactList;