import img from '../../assets/img/pierre-dupont.jpg';
import '../../assets/css-helping/event.css';
const EventItem = (props) => {

    const {event} = props;
    return ( 
        <div className="event-item-container">
            <h2>{event.date}</h2>
            <div className="event-item">
                <img src={img} alt=''/>
                <div className="event-info">
                    <p>{event.title}</p>
                    <h3>{event.heure}</h3>
                    <p>{event.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default EventItem;