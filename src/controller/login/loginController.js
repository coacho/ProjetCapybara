const authenticateUser = async function (formData) {
    try {
            
        // console.log();
        const API_SERVER_URI = import.meta.env.VITE_APP_API_SERVER_URI; 
        const response = await fetch(API_SERVER_URI +'/authenticateUser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const user = await response.json();

        if (response.ok) {
            // console.log("Connexion réussie ???", response);
            // console.log("Utilisateur connecté : ", user);
            // console.log("properties", user.properties);
            // console.log("nom-prénom de l'utilisateur connecté : ",
            //     user.properties.firstName + ' ' + user.properties.lastName
            // );
            
            // let userLabels = user.labels;
            // console.log(
            //     "label de l'utilisateur connecté : ",
            //     userLabels
            // );
            // console.log("nom-prénom de l'utilisateur connecté : ",
            //     user.properties.firstName + ' ' + user.properties.lastName
            // );
            return {
                userId: user.properties.userId,
                userLabels : user.labels,
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