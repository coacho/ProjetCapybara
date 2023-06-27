import img from '../public/img/doctor.png';
const NoteItem = (props) => {
    //composant qui renvoie une note à son parent noteList

    const {note} = props;

    return ( 
        <div className="container-noteItem">
            <img src={img} alt="" /> 
                <div className='note'>
                    <div className='note-info'>
                        <h6>{note.name}</h6>
                        <h6>{note.relation}</h6>
                        <h6>{note.date}</h6>
                    </div>
                    <div className='note-title'>
                        <h3>{note.title}</h3>
                    </div>
                </div>
        </div> 
     );
}
 
export default NoteItem;