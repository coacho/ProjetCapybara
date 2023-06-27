import img from '../../assets/img/petit-fils.png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Composant pour afficher le contact en details
const ContactDetails = () => {
    const allContacts = [
        { key:'1',  name: 'Contact 1', relation: 'Relation 1', image: '../../assets/img/petit-fils.png' },
        { key:'2', name: 'Contact 2', relation: 'Relation 2', image: 'image2.jpg' },
        { key:'3', name: 'Contact 3', relation: 'Relation 3', image: 'image3.jpg' },
        { key:'4', name: 'Contact 4', relation: 'Relation 4', image: 'image4.jpg' },
        { key:'5', name: 'Contact 5', relation: 'Relation 5', image: 'image5.jpg' },
        { key:'6', name: 'Contact 6', relation: 'Relation 6', image: 'image6.jpg' },
        // ... Ajoutez les contacts restants ici
      ];

      const { key } = useParams();
      const contact = allContacts.find(contact => contact.key === key);
      console.log(key);
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