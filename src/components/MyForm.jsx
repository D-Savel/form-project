import { useState } from 'react'
import { ControledTabs } from './ControlledTabs'
import { IsFormValidateContextProvider } from '../context/IsFormValidateContext'
import { FormDataContextProvider } from '../context/FormDataContext'
import { ChildrenCountContextProvider } from '../context/ChildrenCountContext'

export const MyForm = (props) => {
  const { tabsOrientation } = props
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsNext = () => {
    setTabIndex(current => current + 1)
  }
  return (
    <FormDataContextProvider>
      <IsFormValidateContextProvider>
        <ChildrenCountContextProvider>
          <ControledTabs tabIndex={tabIndex} setTabIndex={setTabIndex} tabsOrientation={tabsOrientation} />
        </ChildrenCountContextProvider>
      </IsFormValidateContextProvider>
    </FormDataContextProvider>
  )
}