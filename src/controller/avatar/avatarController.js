

async function saveUserAvatar(userNodeId, userAvatarFile) {

    const IMAGES_SERVER_URI = import.meta.env.VITE_APP_IMAGES_SERVER_URI;

    console.log('from registerController', userNodeId, userAvatarFile);
    
    try {

        const resImageFile = await fetch(userAvatarFile);
        const userAvatarFileBlob = await resImageFile.blob();

        const fileReader = new FileReader();



        fileReader.onload = async () => {

            const userAvatarFileData = fileReader.result.split(',')[1];


            const payload = {
                userNodeId,
                userAvatarFileData
            }

            try {

                const response = await fetch(IMAGES_SERVER_URI + '/saveUserAvatar', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (response.ok) {

                    const avatarResponse = await response.text();
                    console.log("saved new contact's avatar", avatarResponse);
                    console.log(avatarResponse);
                    return avatarResponse;

                } else {
                    console.error("Erreur lors de la requête", response.statusText);
                }

            } catch (err) {
                console.error("Erreur lors de la requête", err);
            }
        };

        fileReader.readAsDataURL(userAvatarFile);

    }
    catch (err) {
        console.error("Erreur lors de la requête", err);
    }
}

export default { saveUserAvatar }