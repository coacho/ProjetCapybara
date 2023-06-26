import img from '../../assets/img/doctor.png';
import { Link } from 'react-router-dom';

/*composant qui renvoie les details des notes (Le nom de de la personne
    la note)
*/
const NoteDetails = () => {
    return ( 
        <div className="container-noteDetails">
            <img src={img} alt="" /> 
            <div className='note'>
                <div className='note-info'>
                    <h6>Docteur Colin</h6>
                    <h6>Le docteur</h6>
                    <h6>10 septembre</h6>
                </div>
                <div className='note-details-title'>
                    <h3>Rappel médicament</h3>
                </div>
                <div className='note-description'>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt earum repellendus accusantium dolores corrupti adipisci aliquam eaque illum. Asperiores, error numquam voluptatem et similique blanditiis impedit aperiam sit distinctio?</h3>
                </div>
                <Link to='/helped/notes'>
                    <div className='btn-back'>
                        <button>Retour</button> 
                    </div>
                </Link>
            </div>
        </div> 
     );
}
 
export default NoteDetails;