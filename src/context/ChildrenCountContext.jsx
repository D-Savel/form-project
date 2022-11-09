import { useState, createContext } from 'react';

export const ChildrenCountContext = createContext();

export const ChildrenCountContextProvider = ({ children }) => {
  const [childrenCount, setChildrenCount] = useState()
  return (
    <ChildrenCountContext.Provider value={{ childrenCount, setChildrenCount }}>
      {children}
    </ChildrenCountContext.Provider>
  )
}