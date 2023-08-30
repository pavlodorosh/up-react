import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function Counter() {
  const { count, setCount } = useContext(MyContext);

  return (
    <div>
      <h2>Counter using useContext</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;