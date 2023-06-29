import img from '../../assets/img/doctor.png';

const NotesListItem = (props) => {
    
    const {note} = props; 
    console.log(note);

    //composant qui renvoie une note à son parent noteList
    return ( 
        <div className="container-noteItem">
            <img src={img} alt="" /> 
            <div className='note'>
                <div className='note-info'>
                    <p>
                        {note.author.labels.eng.includes('MedicalPro') 
                            && <span>Dr&nbsp;</span>
                        }
                        {note.author.firstName} {note.author.lastName},
                        
                        {note.author.profession && <span><i>&nbsp;votre {note.author.profession}</i></span>}
                        {note.author.link && <span><i>&nbsp;votre {note.author.link}</i></span>}
                        
                    </p>
                </div>
                <div className='note-title'>
                    <h3>"{note.content}"</h3>
                </div>
            </div>
        </div> 
     );
}
 
export default NotesListItem;