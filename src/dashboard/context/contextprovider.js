import React, { createContext, useState, useContext } from "react";

// Create the context
const CountContext = createContext();

// Create the provider component
export const CountProvider = ({ children }) => {
  const [addtocart, setAddtocart] = useState(0); // Default value is 0 for addtocart

  return (
    <CountContext.Provider value={{ addtocart, setAddtocart }}>
      {children}
    </CountContext.Provider>
  );
};

// Custom hook to use the context
export const useCount = () => {
  return useContext(CountContext);
};
