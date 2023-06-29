import avatarController from "../avatar/avatarController";

const API_SERVER_URI = import.meta.env.VITE_APP_API_SERVER_URI; 

const registerHelpingPersonAccount = async function (formData, newAvatarFile) {

    console.log('from registerController', formData, newAvatarFile);
    
    try {
            
        const response = await fetch(API_SERVER_URI +'/createHelpingPerson', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const newUser = await response.json();


        console.log('testing save avatar route :');

        if (response.ok) {

            console.log("Nouvel utilisateur créé : ", newUser);

            const avatarResponseText= await avatarController.saveUserAvatar(newUser.nodeId, newAvatarFile);
            

            return {newUser, avatarResponseText};

        } else {

            console.log("Erreur de connexion");
        }

    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}

export default {registerHelpingPersonAccount};