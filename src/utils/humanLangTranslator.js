const translateLabel = (label) => {
    switch (label) {
        // Personnes
        case "Person": return "Contact"; break;
        case "HelpingPerson": return "Aidant"; break;
        case "InstanceManager": return "Gérant de l'instance"; break;
        case "MedicalPro": return "Médecin"; break;
        case "HelpedPerson": return "Aidé"; break;
        // Evenements
        case "Event": return "Événement"; break;
        case "MedicalAppointment": return "Rendez-vous médical"; break;
        // Media
        case "MediaAlbum": return "Album souvenirs"; break;
        case "Media": return "Média"; break;
        case "Video": return "Vidéo"; break;
        case "Image": return "Image"; break;
        // Reminders
        case "Reminder": return "Rappel"; break;
        case "MedicalAppointmentReminder": return "Rappel des rendez-vous médicaux"; break;
        case "MedicalTreatmentReminder": return "Rappel des traitement médicamenteux"; break;
        case "EventReminder": return "Rappel des événements"; break;
        case "NotesReminder": return "Rappel des notes"; break;
        // Autres
        case "Note": return "Note"; break;
        case "MedicalTreatment": return "Traitement Médical"; break;
        case "CapybaraInstance": return "Réseau Capybara"; break;
        
        
    }
}
