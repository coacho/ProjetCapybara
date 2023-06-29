

import img from '../../assets/img/pierre-dupont.jpg';
import '../../assets/css-helping/contact-helping.css';

const ContactListItem = (props) => {

    const {contact} = props;
    return ( 
        <div className="contact-item-container">
            <div className="contact-item">
                <img src={img} alt=''/>
                <div className="contact-info">
                    <p>{contact.firstName} {contact.lastName}</p>
                </div>
            </div>
        </div>
     );
}
 
export default ContactListItem;
 