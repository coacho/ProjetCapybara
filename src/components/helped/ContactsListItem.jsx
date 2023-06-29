import img from '../../assets/img/petit-fils.png';

import majFirstChar from '../../utils/majFirstChar';

const ContactsListItem = (props) => {

    // Composant qui renvoie la vue d'un proche

    const IMG_SOURCE = import.meta.env.VITE_APP_IMAGES_SERVER_URI + '/getUserAvatar';
    const { contact } = props;
    console.log(contact);

    return (
        <div className="container-HelpedContactItem">
            <div className='contact-img'>
                <img className='contact-img-frame' src={IMG_SOURCE + '/' + contact.nodeId} alt="" />
                <div className="contact-name">
                    <h1>{contact.properties.firstName} {contact.properties.lastName}</h1>
                    {contact.link.link && <h5>votre {contact.link.link}</h5>}
                    {contact.properties.profession && <p><b>votre {contact.properties.profession.toLowerCase()}</b></p>}
                    {contact.link.linkDetail && <p>"{majFirstChar(contact.link.linkDetail)}"</p>}
                </div>
            </div>
        </div>
    );
}

export default ContactsListItem;