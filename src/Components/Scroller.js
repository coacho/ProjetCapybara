import btnLeft from '../public/img/left.png';
import btnRight from '../public/img/right.png';
import btn from '../public/img/point.png';
import { useState, useEffect } from "react";

const Scroller = (props) => {
    const {contacts} = props;

    const [displayCount, setDisplayCount] = useState(4);
    //Calculer le nombre total de pages en fonction du nombre total de contacts et du nombre de contacts affichés par page.
    const totalPages = Math.ceil(contacts.length / displayCount);
    //Ajouter un nouvel état local pour gérer l'indice de la page active.
    const [currentPage, setCurrentPage] = useState(0);
    //Modifier la logique de l'affichage des contacts en utilisant currentPage pour calculer startIndex :
    const startIndex = currentPage * displayCount;
    const displayedContacts = contacts.slice(startIndex, startIndex + displayCount);
    return (  
    <div>

    </div> 
    );
}
 
export default Scroller;