import settingImage from '../../assets/img/gear-100.png'
import homeImage from '../../assets/img/home.png';
import { Link } from 'react-router-dom';
import '../../assets/css/topbar.css'

const TopBar = (props) => {
    
    const { title, btn }  = props;

    return (
        <div className="topbar">
            <div className="home-text">
                <h1>{title}</h1>
            </div>
            <div className="setting">
                <button className='btn-setting'>
                    { btn === "Retour à l'accueil" ? (
                        <>
                        <Link to="/helped/home">
                            {btn}<img  alt="" src={homeImage}/>
                        </Link>
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