import ContactList from "../Components/ContactLitst";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

//page qui affiche le detais d'un proche
const HelpedContacts = () => {
    //définir les propriétés pour le topbar
    const title = "Mes proches";
    const btn = "Accueil"
    return ( 
        <div className='home'>
            <div id="sidebar">
                <SideBar/>
            </div>
            <div id="container-home">
                <div>
                    <TopBar title={title} btn={btn}/>
                </div>
                <div className='center'>
                    <ContactList/>
                </div>
            </div>
        </div>
    );
}
 
export default HelpedContacts;