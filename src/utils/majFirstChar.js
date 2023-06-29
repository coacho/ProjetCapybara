export default function majFirstChar (str) {
    if (typeof str == 'string') {

        const firstChar = str.charAt(0).toUpperCase(); // Première lettre en majuscule
        const restOfString = str.slice(1); // Partie restante de la chaîne de caractères
        return firstChar + restOfString; // Retourne la chaîne avec la première lettre en majuscule

    } else return str;
};