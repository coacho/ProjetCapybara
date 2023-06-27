import img from '../../assets/img/petit-fils.png';

const ContactsListItem = (props) => {
    //compsant qui renvoie la vue d'un proche

    const {contact} = props;
    console.log(contact.image);
 
    return ( 
        <div className="container-HelpedContactItem">
            <div className="contact-name">
                <h1>{contact.name}</h1>
            </div>
            <div className='contact-img'>
                {/* <img src={contact.image} alt="" /> */}
                <img src={img} alt="" />
                <h5>{contact.relation}</h5>
            </div>
        </div> 
     );
}
 
export default ContactsListItem;