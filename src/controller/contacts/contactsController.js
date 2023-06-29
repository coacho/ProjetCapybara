const API_SERVER_URI = import.meta.env.VITE_APP_API_SERVER_URI; 

async function getAllContacts (userId, instanceID) {

    try {

        const response = await fetch(API_SERVER_URI +'/getAllContactsByCapybaraInstanceID', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId, instanceID}),
        });
        const contacts = await response.json();

        if (response.ok) {
            
            console.log('from contactsController', contacts);
            return contacts;
            
        
        } else {
            console.log("Erreur de connexion");
        }

    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}


async function updateAllContacts(formData, userAuth) {

    try {

        console.log(formData, userAuth);
    
    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}

export default {getAllContacts, updateAllContacts};