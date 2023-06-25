import ContactList from "../Components/ContactLitst";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

//page qui affiche le detais d'un proche
const HelpedContacts = () => {
    //définir les propriétés pour le topbar
    const title = "Mes proches";
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
                <ContactList/>
            </div>
        </div>
    );
}
 
export default HelpedContacts;