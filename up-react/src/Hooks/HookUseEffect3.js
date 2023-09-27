import React, { useState, useEffect } from 'react';

export default function HookUseEffect3(){
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClicks(prevClicks => prevClicks + 1);
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

    return(
        <>
        <div>
            <h2>Event Listener</h2>
            <p>Clicks: {clicks}</p>
        </div>
        </>
    );
}