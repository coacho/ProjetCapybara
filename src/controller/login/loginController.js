const API_SERVER_URI = import.meta.env.VITE_APP_API_SERVER_URI; 

const authenticateUser = async function (formData) {
    try {
            
        const response = await fetch(API_SERVER_URI +'/authenticateUser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const user = await response.json();

        if (response.ok) {

            console.log("Utilisateur connecté : ", user);
            
            return {
                userId: user.properties.userId,
                userLabels : user.labels,
                userNodeId : user.nodeId,
                instance: user.instance,
            };

        } else {
            console.log("Erreur de connexion");
        }

    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}

export default {authenticateUser};