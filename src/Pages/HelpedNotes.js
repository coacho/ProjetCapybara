import NoteList from "../Components/NoteList";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

//Page qui affiches la liste des notes
const HelpedNotes = () => {
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
                    <NoteList />
                </div>
            </div>
        </div>
    );
}
 
export default HelpedNotes;