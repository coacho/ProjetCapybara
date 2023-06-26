import { Link } from 'react-router-dom';

//Composant pour afficher le contact en details
const HelpedCalendarMenu = () => {
    return ( 
        <>
            <nav>
                <Link to="/helped/calendar/agenda">Agenda</Link>
                <Link to="/helped/calendar/week">Semaine</Link>
            </nav>
            
        </>
     );
}
 
export default HelpedCalendarMenu;