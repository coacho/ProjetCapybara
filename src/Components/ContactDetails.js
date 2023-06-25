import img from '../public/img/petit-fils.png';
import { NavLink } from 'react-router-dom';

//Composant pour afficher le contact en details
const ContactDetails = () => {
    return ( 
        <div className="container-contactDetails">
            <div className='contact'>
                <div className='contact-img'>
                    <img className='img-details' src={img} alt="" />
                </div>
                <div className="contact-name">
                    <h1>Name</h1>
                    <h5>Relation</h5>
                </div>
                
            </div>
        <NavLink to='/contact'>
            <div className='btn-back'>
                <button>Retour</button> 
            </div>
        </NavLink>
    </div> 
     );
}
 
export default ContactDetails;