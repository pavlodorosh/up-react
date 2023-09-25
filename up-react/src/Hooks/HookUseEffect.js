import React, { useState, useEffect } from 'react';

export default function HookUseEffect(){
    const [seconds, setSeconds] = useState(0);

    // Використання useEffect для запуску таймера
    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds(seconds + 1);
        }, 1000);

        // Повернення функції для очищення таймера при видаленні компонента
        return () => {
            clearInterval(interval);
        };
    }, [seconds]); // Залежність вказує, що ефект викликається при зміні "seconds"

    return(
        <>
        <div>
            <p>Seconds: {seconds}</p>
        </div>
        </>
    );
}