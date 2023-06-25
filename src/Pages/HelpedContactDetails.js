import ContactDetails from "../Components/ContactDetails";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

//Pages qui affiche les proches
const HelpedContactDetails = () => {
    //définir les propriétés pour le topbar
     const title = "Infos contact";
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
                 <ContactDetails />
             </div>
         </div> 
     );
}
 
export default HelpedContactDetails;