import { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import { NavLink } from 'react-router-dom';
import btnLeft from '../public/img/left.png';
import btnRight from '../public/img/right.png';
import btn from '../public/img/point.png';

const NoteList = () => {
    //composant qui regroupe la liste des notes


    const allNotes = [
        { id:'1', name: 'Contact 1', title: 'Note 1', description: 'Description 1', relation: 'Relation 1', date: 'Le 11 septembre', image: '../public/img/petit-fils.png' },
        { id:'2', name: 'Contact 2', title: 'Note 2', description: 'Description 2', relation: 'Relation 2', date: 'Le 11 septembre', image: 'image2.jpg' },
        { id:'3', name: 'Contact 3', title: 'Note 3', description: 'Description 3', relation: 'Relation 3', date: 'Le 11 septembre', image: 'image3.jpg' },
        { id:'4', name: 'Contact 4', title: 'Note 4', description: 'Description 4', relation: 'Relation 4', date: 'Le 11 septembre', image: 'image4.jpg' },
        { id:'5', name: 'Contact 5', title: 'Note 5', description: 'Description 5', relation: 'Relation 5', date: 'Le 11 septembre', image: 'image5.jpg' },
        { id:'6', name: 'Contact 6', title: 'Note 6', description: 'Description 6', relation: 'Relation 6', date: 'Le 11 septembre', image: 'image6.jpg' },
    ];
    
    const [notes, setNotes] = useState([]);

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
    const displayedContacts = notes.slice(startIndex, startIndex + displayCount);

    return (
        <div> 
        <div className="container-noteList">
            {
                displayedContacts.map((note) => (
                     <NavLink to={{
                            pathname: `/note/details/${note.id}`,
                            // state: { note: note }
                            }}>  
                        <NoteItem note = {note} key={note.id}/>
                    </NavLink>
                ))
            }
       </div>
       <div className="scrolle">
       <img src={btnLeft} 
           alt=""
           onClick={() => setCurrentPage(currentPage - 1)}
           disabled={currentPage === 0}
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
 
export default NoteList;