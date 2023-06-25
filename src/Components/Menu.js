import { NavLink } from 'react-router-dom';

import calendrierImg from '../public/img/calendrier.png';
import procheImg from '../public/img/proche.png';
import albumImg from '../public/img/album.png';
import messagerieImg from '../public/img/message.png';
import horlogeImg from '../public/img/horloge.png';
import noteImg from '../public/img/note.png';

//composant des différents pages 
const Menu = () => {
    return ( 
        <div className="center-container">
            <div className="nav">
                <div className="nav-item">
                    <NavLink to='/calendrier'>
                        <img alt="" src={calendrierImg}/>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to='/contact'>
                        <img alt="" src={procheImg}/>
                    </NavLink>
                </div>
                <div className="nav-item">  
                    <NavLink to='/album'>                 
                        <img alt="" src={albumImg}/>
                    </NavLink> 
                </div>
                <div className="nav-item">
                    <NavLink to='/message'>   
                        <img alt="" src={messagerieImg}/>
                    </NavLink> 
                </div>
                <div className="nav-item">
                    <NavLink to='/horloge'>
                        <img alt="" src={horlogeImg}/>
                    </NavLink> 
                </div>
                <div className="nav-item">
                    <NavLink to='/note'>
                        <img alt="" src={noteImg}/>
                    </NavLink> 
                </div>
            </div>
        </div>
     );
}
 
export default Menu;