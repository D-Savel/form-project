import { useState, createContext } from 'react';

export const FormDataContext = createContext();

export const FormDataContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({})
  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  )
}