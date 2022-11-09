import { useState, createContext } from 'react';

export const IsFormValidateContext = createContext();

export const IsFormValidateContextProvider = ({ children }) => {
  const [isFormValidate, setIsFormValidate] = useState({
    identityForm: false,
    addressForm: false,
    companyForm: false,
    validationForm: false
  })
  return (
    <IsFormValidateContext.Provider value={{ isFormValidate, setIsFormValidate }}>
      {children}
    </IsFormValidateContext.Provider>
  )
}