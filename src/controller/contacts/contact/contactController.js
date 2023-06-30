import avatarController from "../../avatar/avatarController";

const API_SERVER_URI = import.meta.env.VITE_APP_API_SERVER_URI;

async function getContact(requestedUserNodeId, userId) {

    try {

        const response = await fetch(API_SERVER_URI + '/getPerson', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ requestedUserNodeId, userId }),
        });
        const contact = await response.json();

        if (response.ok) {

            console.log('from contactController', contact);
            return contact;


        } else {
            console.log("Erreur de connexion");
        }

    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}


async function updateContact(userAuth) {

    try {

        console.log(formData, userAuth);

    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}

async function addContact(formData, instanceID, newAvatarFile) {

    try {
        
        const response = await fetch(API_SERVER_URI + '/createPerson', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formData, instanceID }),
        });
        const newContact = await response.json();

        if (response.ok) {

            console.log('saved new contact', newContact);

            const avatarResponseText = await avatarController.saveUserAvatar(newContact.nodeId, newAvatarFile);

            return { newContact, avatarResponseText };
        }
    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}

export default { getContact, updateContact, addContact };