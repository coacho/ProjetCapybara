import { Link } from 'react-router-dom';

import calendrierImg from '../../assets/img/calendrier.png';
import procheImg from '../../assets/img/proche.png';
import albumImg from '../../assets/img/album.png';
import messagerieImg from '../../assets/img/message.png';
import horlogeImg from '../../assets/img/horloge.png';
import noteImg from '../../assets/img/note.png';
import '../../assets/css/menu.css';

//composant des différents pages 
const Menu = () => {
    return ( 
        <div className="center-container">
            <div className="nav">
                <div className="nav-item">
                    <Link to='/helped/calendar/week'>
                        <img alt="" src={calendrierImg}/>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/helped/contacts'>
                        <img alt="" src={procheImg}/>
                    </Link>
                </div>
                <div className="nav-item">  
                    {/* //! Not yet developed */}
                    <Link to='/helped/home'>                  
                        <img alt="" src={albumImg}/>
                    </Link> 
                </div>
                <div className="nav-item">
                    {/* //! Not yet developed */}
                    <Link to='/helped/home'> 
                        <img alt="" src={messagerieImg}/>
                    </Link> 
                </div>
                <div className="nav-item">
                    {/* //! Not yet developed */}
                    <Link to='/helped/home'>
                        <img alt="" src={horlogeImg}/>
                    </Link> 
                </div>
                <div className="nav-item">
                    <Link to='/helped/notes'> 
                        <img alt="" src={noteImg}/>
                    </Link> 
                </div>
            </div>
        </div>
     );
}
 
export default Menu;