import ContactDetails from "../Components/ContactDetails";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

//Pages qui affiche les proches
const HelpedContactDetails = () => {
    //définir les propriétés pour le topbar
     const title = "Infos contact";
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
                    <ContactDetails />
                </div>
            </div>
        </div>
     );
}
 
export default HelpedContactDetails;