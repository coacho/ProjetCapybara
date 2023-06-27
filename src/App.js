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
          <Route path={`/note/details/:id`} element={ <HelpedNoteDetail /> } /> 
          <Route path={`/contact/details/:id`} element={ <HelpedContactDetails /> } /> 
        </Routes> 
      </div>
    </div>
  );
}

export default App;
