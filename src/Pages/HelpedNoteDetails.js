import NoteDetails from "../Components/NoteDetails";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

//Page qui affiches le details d'un note
const HelpedNoteDetail = () => {
     //définir les propriétés pour le topbar
     const title = "Note";
     const btn = "Accueil"
     return ( 
         <div className='Home'>
             <div className='TopBar'>
                 <TopBar title={title} btn={btn}/>
             </div>
             <div className='SideBar'>
                 <SideBar/>
             </div>
             <div className='Center'>
                 <NoteDetails />
             </div>
         </div> 
     );
}
 
export default HelpedNoteDetail; 