import img from '../../assets/img/petit-fils.png';
import { Link } from 'react-router-dom';

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
            <Link to='/helped/contacts'>
                <div className='btn-back'>
                    <button>Retour aux contacts</button>
                </div>
            </Link>
        </div>
    );
}

export default ContactDetails;