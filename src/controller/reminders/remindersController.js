const API_SERVER_URI = import.meta.env.VITE_APP_API_SERVER_URI; 

async function getAllReminders (userAuth) {

    try {

        console.log(userAuth);
        
        // const response = await fetch(API_SERVER_URI +'/reminders/getAllReminders', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // });

        // if (response.ok) {
            // const user = await response.json();
            //_ FOR TEST
            const reminders = {
                notes: 24,
                events: 24,
                medicalAppointments: 24,
                medicalTreatments: 24,
            }
            // return {
            //     userId: user.properties.userId,
            //     userLabels : user.labels,
            // };

            return reminders;
        // } else {
        //     console.log("Erreur de connexion");
        // }

    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}


async function updateAllReminders(formData, userAuth) {

    try {

        console.log(formData, userAuth);
        /*
            notes: 48,
            events: 48,
            medicalAppointments: 48,
            medicalTreatments: 48,
            userId : "pierre.dupont@gmail.com",
            userPassword: "pdupont",
        */
        
        // const response = await fetch(API_SERVER_URI +'/reminders/getAllReminders', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // });

        // if (response.ok) {
            // const user = await response.json();
            //_ FOR TEST
            const reminders = {
                notes: 48,
                events: 48,
                medicalAppointments: 48,
                medicalTreatments: 48,
            }
            return reminders;
            // return {
            //     userId: user.properties.userId,
            //     userLabels : user.labels,
            // };

        // } else {
        //     console.log("Erreur de connexion");
        // }

    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}

export default {getAllReminders, updateAllReminders};