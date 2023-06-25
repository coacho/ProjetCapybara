import img from '../public/img/doctor.png';
const NoteItem = () => {
    //composant qui renvoie une note à son parent noteList
    return ( 
        <div className="container-noteItem">
            <img src={img} alt="" /> 
                <div className='note'>
                    <div className='note-info'>
                        <h6>Docteur Colin</h6>
                        <h6>Le docteur</h6>
                        <h6>10 septembre</h6>
                    </div>
                    <div className='note-title'>
                        <h3>Rappel médicament</h3>
                    </div>
                </div>
        </div> 
     );
}
 
export default NoteItem;