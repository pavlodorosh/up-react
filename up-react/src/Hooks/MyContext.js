import React, { createContext, useState } from 'react';

const MyContext = createContext();

function MyProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyProvider };