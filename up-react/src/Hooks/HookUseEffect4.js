import React, { useState, useEffect } from 'react';

export default function HookUseEffect4(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      alert('Count is greater than 5');
    }
  }, [count]);

    return(
        <>
        <div>
          <h2>Counter</h2>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        </>
    );
}