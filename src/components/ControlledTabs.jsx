import { useContext } from 'react'
import { FormDataContext } from '../context/FormDataContext'
import { IsFormValidateContext } from '../context/IsFormValidateContext'
import { IdentityForm } from './IdentityForm'
import { AddressForm } from './AddressForm'
import { CompanyForm } from './CompanyForm'
import { PaymentValidationForm } from './PaymentValidationForm'
import { Wrapper } from './Wrapper'
import {
  Box,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
} from '@chakra-ui/react'


export const ControledTabs = (props) => {
  const { tabIndex, setTabIndex, tabsOrientation } = props

  const { formData } = useContext(FormDataContext)
  const { isFormValidate } = useContext(IsFormValidateContext)

  console.log('Form Data', formData)

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10))
  }

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return (
    <Tabs orientation={tabsOrientation} align='center' isFitted index={tabIndex} onChange={handleTabsChange}>
      <Box display={tabsOrientation === 'vertical' && 'flex'} w={tabsOrientation !== 'vertical' && '75%'} h={tabsOrientation === 'vertical' && '50%'} >
        <Box ml='3' mr='1' className={tabsOrientation === 'vertical' ? 'vertical-slider-wrapper' : 'horizontal-slider-wrapper'}>
          <input
            className={tabsOrientation === 'vertical' ? 'vertical-tabsRangeInput' : 'horizontal-tabsRangeInput'}
            type='range'
            min='0'
            max='3'
            value={tabIndex}
            onChange={handleSliderChange}
            orient={tabsOrientation === 'vertical' && 'vertical'}
          />
        </Box>
        <TabList>
          <Wrapper>
            <Tab color={!!isFormValidate.identityForm ? 'green' : 'red'} >Your identity</Tab>
            <Tab color={!!isFormValidate.addressForm ? 'green' : 'red'} >Your address</Tab>
            <Tab color={!!isFormValidate.companyForm ? 'green' : 'red'} >Your company</Tab>
            <Tab color={!!isFormValidate.validationForm ? 'green' : 'red'}>Payment and validation</Tab>
          </Wrapper>
        </TabList>
      </Box>
      <TabPanels>
        <TabPanel pl='3' w='70%' align='left' h='100vh' borderLeft={tabsOrientation === 'vertical' && '1px'} borderLeftColor='gray.200'>
          <IdentityForm setTabIndex={setTabIndex} tabIndex={tabIndex} />
        </TabPanel>
        <TabPanel pl='3' w='70%' align='left' h='100vh' borderLeft={tabsOrientation === 'vertical' && '1px'} borderLeftColor='gray.200'>
          < AddressForm setTabIndex={setTabIndex} tabIndex={tabIndex} />
        </TabPanel>
        <TabPanel pl='3' w='70%' align='left' h='120vh' borderLeft={tabsOrientation === 'vertical' && '1px'} borderLeftColor='gray.200'>
          <CompanyForm setTabIndex={setTabIndex} tabIndex={tabIndex} />
        </TabPanel>
        <TabPanel pl='3' w='70%' align='left' h='100vh' borderLeft={tabsOrientation === 'vertical' && '1px'} borderLeftColor='gray.200'>
          <PaymentValidationForm setTabIndex={setTabIndex} tabIndex={tabIndex} />
        </TabPanel>
      </TabPanels>
    </Tabs >
  )
}