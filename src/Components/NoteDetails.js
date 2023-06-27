import img from '../public/img/doctor.png';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

/*composant qui renvoie les details des notes (Le nom de de la personne
    la note)
*/
const NoteDetails = (props) => {

    const allNotes = [
        { id:'1', name: 'Contact 1', title: 'Note 1', description: 'Description 1', relation: 'Relation 1', date: 'Le 11 septembre', image: '../public/img/petit-fils.png' },
        { id:'2', name: 'Contact 2', title: 'Note 2', description: 'Description 2', relation: 'Relation 2', date: 'Le 11 septembre', image: 'image2.jpg' },
        { id:'3', name: 'Contact 3', title: 'Note 3', description: 'Description 3', relation: 'Relation 3', date: 'Le 11 septembre', image: 'image3.jpg' },
        { id:'4', name: 'Contact 4', title: 'Note 4', description: 'Description 4', relation: 'Relation 4', date: 'Le 11 septembre', image: 'image4.jpg' },
        { id:'5', name: 'Contact 5', title: 'Note 5', description: 'Description 5', relation: 'Relation 5', date: 'Le 11 septembre', image: 'image5.jpg' },
        { id:'6', name: 'Contact 6', title: 'Note 6', description: 'Description 6', relation: 'Relation 6', date: 'Le 11 septembre', image: 'image6.jpg' },
    ];

    const { id } = useParams();
    // Utilisez l'ID pour récupérer la note correspondante
    const note = allNotes.find(note => note.id === id);
    return ( 
        <>
        <div className="container-noteDetails">
            <img src={img} alt="" /> 
            <div className='note'>
                <div className='note-info'>
                    <h6>{note.name}</h6>
                    <h6>{note.relation}</h6>
                    <h6>{note.date}</h6>
                </div>
                <div className='note-details-title'>
                    <h3>{note.title}</h3>
                </div>
                <div className='note-description'>
                    <h3>{note.description}</h3>
                </div>
            </div>
        </div> 
        <div>
            <NavLink to='/note'>
                    <div className='btn-back'>
                        <button>Retour</button> 
                    </div>
            </NavLink>
        </div>
        </>
     );
}
 
export default NoteDetails;