import { useEffect, useState } from 'react';
import img from '../../assets/img/petit-fils.png';
import { Link } from 'react-router-dom';
import contactController from '../../controller/contacts/contact/contactController';
import { useSelector } from 'react-redux';
import majFirstChar from '../../utils/majFirstChar';

//Composant pour afficher le contact en details
const ContactDetails = () => {

    const [contact, setContact] = useState(null);
    const userAuth = useSelector((state) => state.userAuth);
    const requestedUserNodeId = window.location.href.split('/').pop() 
    const IMG_SOURCE = import.meta.env.VITE_APP_IMAGES_SERVER_URI + '/getUserAvatar';

    useEffect(() => {
        contactController.getContact(requestedUserNodeId, userAuth.userId)
            .then(contactData => {
                setContact(contactData);
            })
    }, [])

    console.log(contact);

    
    return (
        contact &&
            <div className="container-contactDetails">
                <div className='contact'>
                    <div className='contact-img'>
                        <img className='img-details' src={IMG_SOURCE + '/' + contact.nodeId} alt="" />
                    </div>
                    <div className="contact-name contact-details-name">
                        <h1>{contact.properties.firstName} {contact.properties.lastName}</h1>
                        {contact.properties.profession && <h5>Votre {contact.properties.profession}</h5>}
                        {contact.link.link && <h5>Votre {contact.link.link}</h5>}
                        {contact.link.linkDetail && <p>"{majFirstChar(contact.link.linkDetail)}"</p>}
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