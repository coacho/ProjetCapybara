import NoteDetails from "../Components/NoteDetails";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

//Page qui affiches le details d'un note
const HelpedNoteDetail = () => {
     //définir les propriétés pour le topbar
     const title = "Note";
     const btn = "Accueil"
     return ( 
        <div className='home'>
            <div id="sidebar">
                <SideBar/>
            </div>
            <div id="container-home">
                <div className='container-topbar'>
                    <TopBar title={title} btn={btn}/>
                </div>
                <div className='center'>
                    <NoteDetails/>
                </div>
            </div>
        </div>
     );
}
 
export default HelpedNoteDetail; 