import NoteList from "../Components/NoteList";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

//Page qui affiches la liste des notes
const HelpedNotes = () => {
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
                <NoteList />
            </div>
        </div> 
    );
}
 
export default HelpedNotes;