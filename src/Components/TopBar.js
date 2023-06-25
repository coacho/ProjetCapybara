import settingImage from '../public/img/gear-100.png'
import homeImage from '../public/img/home.png'
import { NavLink } from 'react-router-dom';

const TopBar = (props) => {
    const { title, btn }  = props;
    return (
        <div className="topbar">
            <div className="home">
                <h1>{title}</h1>
            </div>
            <div className="setting">
                <button className='btn-setting'>
                    { btn === 'Accueil' ? (
                        <>
                        <NavLink to="/">
                            {btn}<img  alt="" src={homeImage}/>
                        </NavLink>
                        </>
                    ) : (
                        <>
                        {btn}<img  alt="" src={settingImage}/>
                        </>
                    )
                    }
                </button>
            </div>
        </div>
      );
}
 
export default TopBar;