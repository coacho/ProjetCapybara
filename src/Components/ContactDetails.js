import img from '../public/img/petit-fils.png';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Composant pour afficher le contact en details
const ContactDetails = () => {

    const allContacts = [
        { id:'1',  name: 'Contact 1', relation: 'Relation 1', image: '../public/img/petit-fils.png' },
        { id:'2', name: 'Contact 2', relation: 'Relation 2', image: 'image2.jpg' },
        { id:'3', name: 'Contact 3', relation: 'Relation 3', image: 'image3.jpg' },
        { id:'4', name: 'Contact 4', relation: 'Relation 4', image: 'image4.jpg' },
        { id:'5', name: 'Contact 5', relation: 'Relation 5', image: 'image5.jpg' },
        { id:'6', name: 'Contact 6', relation: 'Relation 6', image: 'image6.jpg' },
        // ... Ajoutez les contacts restants ici
      ];

      const { id } = useParams();
      const contact = allContacts.find(contact => contact.id === id);

    return ( 
        <div className="container-contactDetails">
            <div className='contact'>
                <div className='contact-img'>
                    <img className='img-details' src={img} alt="" />
                </div>
                <div className="contact-name">
                    <h1>{contact.name}</h1>
                    <h5>{contact.relation}</h5>
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