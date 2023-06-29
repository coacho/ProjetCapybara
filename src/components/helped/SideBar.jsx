import React from 'react';
import { useState, useEffect } from 'react';
import eatImage from '../../assets/img/eat.png';
import sleepImage from '../../assets/img/sleep.png';

import "../../assets/css/sidebar.css";

export default function SideBar() {
    const [currentTime, setCurrentTime] = useState(''); // Déclaration de la variable d'état pour l'heure actuelle
    const [currentDate, setCurrentDate] = useState(''); // Déclaration de la variable d'état pour le jour actuel
    const [dayOrNight, setDayOrNight] = useState('');
    const [message, setMessage] = useState('');
    const [hours, setHours] = useState('');
    const [clockStyle, setClockStyle] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date(); // Obtention de la date et de l'heure actuelles

            // Récupération de l'heure
            const hours = String(now.getHours()).padStart(2, '0'); // Extraction des heures avec des zéros devant si nécessaire
            const minutes = String(now.getMinutes()).padStart(2, '0'); // Extraction des minutes avec des zéros devant si nécessaire
            const time = hours + ':' + minutes; // Construction de la chaîne de l'heure au format HH:MM

            // Récupération du jour
            const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
            const day = now.toLocaleDateString('fr-FR', options);

            // Mise à jour des variables 
            setCurrentTime(time);
            setCurrentDate(day);
            setHours(hours);

            if (hours >= 6 && hours < 18) {
                setDayOrNight('Jour');
                setClockStyle('dayClockStyle');
            } else {
                setDayOrNight('Nuit');
                setClockStyle('nightClockStyle');
            }


            if (hours == 12) {
                setMessage("Bientôt l'heure de déjeûner");
            }
            if (hours >= 22 || hours > 0 && hours < 6) {
                setMessage("Il est l'heure de dormir");
            }
        };

        updateDateTime(); // Appel initial pour mettre à jour l'heure et le jour immédiatement

        const intervalId = setInterval(updateDateTime, 1000); // Mettre à jour l'heure et le jour toutes les secondes

        return () => {
            clearInterval(intervalId); // Nettoyage du timer lors de la suppression du composant pour éviter les fuites de mémoire
        };
    }, []);

    
    return (
        <div className="container-bar">
            <div className="navbar-left">
                <div className="row">
                    <div className="column">
                        <h1>{currentTime}</h1>
                    </div>
                </div>
                <div className="row-middle">
                    <div className="column day">
                        <h1>{currentDate}</h1>
                    </div>
                    <div className={`column day-night ${clockStyle}`}>
                        <h1>{dayOrNight}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h1>{message}</h1>
                        {hours == 12 && (
                            <div>
                                {/* <h3>{hours} - {message}</h3> */}
                                <img className='img-sidebar' src={eatImage} alt="" />
                            </div>
                        )}
                        {hours === 21 && (
                            <div>
                                {/* <h3>{hours} - {message}</h3> */}
                                <img className='img-sidebar' src={eatImage} alt="" />
                            </div>
                        )}

                        {hours && (
                            <div>
                                {/* <h3>{hours} - {message}</h3> */}
                                <img className='img-sidebar' src={sleepImage} alt="" />
                            </div>
                        )}

                    </div>
                </div>
                <div className='row timeToEat'>
                    <button className='btn-help'>
                        Aide
                    </button>
                </div>
            </div>
        </div>

    )

}