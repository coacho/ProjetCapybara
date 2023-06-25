import './App.css';
import HelpedHome from './Pages/HelpedHome';
import {Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import HelpedCalendar from './Pages/HelpedCalendar';
import HelpedContacts from './Pages/HelpedContacts';
import HelpedNotes from './Pages/HelpedNotes';
import HelpedClock from './Pages/HelpedClock';
import HelpedMessage from './Pages/HelpedMessage';
import HelpedAlbum from './Pages/HelpedAlbum';
import HelpedNoteDetail from './Pages/HelpedNoteDetails';
import HelpedContactDetails from './Pages/HelpedContactDetails';
import { useState, useEffect } from "react";


function App() {

  // Définition de la liste complète des contacts
  const allContacts = [
    { id:'1',  name: 'Contact 1', relation: 'Relation 1', image: 'image1.jpg' },
    { id:'2', name: 'Contact 2', relation: 'Relation 2', image: 'image2.jpg' },
    { id:'3', name: 'Contact 3', relation: 'Relation 3', image: 'image3.jpg' },
    { id:'4', name: 'Contact 4', relation: 'Relation 4', image: 'image4.jpg' },
    { id:'5', name: 'Contact 5', relation: 'Relation 5', image: 'image5.jpg' },
    { id:'6', name: 'Contact 6', relation: 'Relation 6', image: 'image6.jpg' },
    // ... Ajoutez les contacts restants ici
  ];

  // const [contacts, setContacts] = useState([]);
  // //setContacts(allContacts);

  // useEffect(() => {
  //   setContacts(allContacts);
  // }, []);

  return (
    <div className="App">
      <div className="container">
        {/* Redirection entre les composant Pages avec route */}
        <Routes>
          <Route path="/" element={ <HelpedHome /> } />
          <Route path="/login" element={ <Login /> } /> 
          <Route path="/calendrier" element={ <HelpedCalendar /> } /> 
          <Route path="/contact" element={ <HelpedContacts /> } /> 
          <Route path="/note" element={ <HelpedNotes /> } /> 
          <Route path="/horloge" element={ <HelpedClock /> } /> 
          <Route path="/message" element={ <HelpedMessage /> } /> 
          <Route path="/album" element={ <HelpedAlbum /> } /> 
          <Route path="/note/details/1" element={ <HelpedNoteDetail /> } /> 
          <Route path="/contact/details/1" element={ <HelpedContactDetails /> } /> 
        </Routes> 
      </div>
    </div>
  );
}

export default App;
