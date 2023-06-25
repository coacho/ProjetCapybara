import NoteItem from "./NoteItem";
import { NavLink } from 'react-router-dom';

const NoteList = () => {
    //composant qui regroupe la liste des notes
    return ( 
        <div className="container-noteList">
            <NavLink to="/note/details/1"> {/*affiche la page details de la note au clique*/}
                <NoteItem/>
            </NavLink>
            <NavLink to="/note/details/1"> {/*affiche la page details de la note au clique*/}
                <NoteItem/>
            </NavLink>
       </div>
     );
}
 
export default NoteList;