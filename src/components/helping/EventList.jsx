import EventItem from "./EventItem";

const EventList = () => {

    const events = [
        {
          id: 1,
          title: "Evénement 1",
          description: "Description de l'événement 1",
          date: "2023-06-21",
          heure: "14:00"
        },
        {
          id: 2,
          title: "Evénement 2",
          description: "Description de l'événement 2",
          date: "2023-06-22",
          heure: "18:30"
        },
        {
          id: 3,
          title: "Evénement 3",
          description: "Description de l'événement 3",
          date: "2023-06-23",
          heure: "10:00"
        }
      ];

    return ( 
        <div>
            {events.map(event => (
                <EventItem event = {event} key={event.id}/>
            ))}
            </div>
     );
}
 
export default EventList;