import img from '../public/img/petit-fils.png';

const ContactItem = (props) => {
    //compsant qui renvoie la vue d'un proche

    const {contact} = props;
    // <Contact imgPath="/" />
 
    return ( 
        <div className="container-contactItem">
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
 
export default ContactItem;