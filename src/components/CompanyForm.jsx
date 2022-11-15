import { useContext } from 'react'
import { FormDataContext } from './../context/FormDataContext'
import { IsFormValidateContext } from './../context/IsFormValidateContext'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { RadioForm } from './form/RadioForm'
import { TextInputForm } from './form/TextInputForm'
import { SelectForm } from './form/SelectForm'
import { DateInputForm } from './form/DateInputForm'
import { ControlledTabsButtons } from './ControlledTabsButtons'
import { country } from '../data/country.js'
import { firmStatusOptions } from '../data/firmStatusOptions'

/*
useEffect(() => {
  let url = `https://stormy-gorge-78325.herokuapp.com/address/?address=${senderAddress}`
  console.log(url, 'url Sender search')
  const request = async () => {
    setLoadingUser(true)
    try {
      let response = await axios.get(url)
      setSearchResultsSender(response.data)
      if (response.data.length) {
        senderAddress.toUpperCase().trim().localeCompare(response.data[0].adresse.trim()) === 0 ? setIsSenderAddress(true) : setIsSenderAddress(false)
        setSenderAddressX(response.data[0].lon.toString())
        setSenderAddressY(response.data[0].lat.toString())
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoadingUser(false)
    }
  }
  request()
}
  , [senderAddress, isMounted])
*/

export const CompanyForm = (props) => {
  const { setTabIndex, tabIndex, isCompanyFormValidate, setIsCompanyFormValidate } = props

  const { formData, setFormData } = useContext(FormDataContext)
  const { isFormValidate, setIsFormValidate } = useContext(IsFormValidateContext)
  const isFormToUpdate = isFormValidate.companyForm

  return (
    <Formik
      initialValues={{
        companyName: '',
        companyStreetNumber: '',
        companyStreetName: '',
        companyZipCode: '',
        companyCountry: '',
        companyStatus: '',
        companyCreationDate: ''
      }}
      validationSchema={Yup.object({
        companyName: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        companyStreetNumber: Yup.number()
          .required('Required'),
        companyStreetName: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        companyZipCode: Yup.number()
          .max(99000, 'this zip code doesn\'t exist')
          .required('Required'),
        companyCountry: Yup.string()
          .required('Required'),
        companyStatus: Yup.string()
          .required('Required')
          .oneOf(['EI', 'EIRL', 'EURL', 'SARL', 'SA', 'SAS', 'SASU']),
        companyCreationDate: Yup.date()
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        e => e.preventDefault()
        values = { ...formData, ...values }
        setFormData(values)
        setSubmitting(false);
        setTabIndex(tabIndex => tabIndex + 1)
        setIsFormValidate({ ...isFormValidate, companyForm: true })
      }}
    >
      <Form>
        <TextInputForm
          label="Company name"
          name="companyName"
          type="text"
        />
        <TextInputForm
          label="Company street number"
          name="companyStreetNumber"
          type="number"
        />
        <TextInputForm
          label="Company street name"
          name="companyStreetName"
          type="text"
        />
        <TextInputForm
          label="Company Zip code"
          name="companyZipCode"
          type="number"
        />
        <SelectForm label="Company country" name="companyCountry">
          < option value="">Select a country</option>
          {country.map((country) => {
            return (
              <option key={country} value={country}>{country}</option>)
          }
          )}
        </SelectForm>
        <RadioForm
          name="companyStatus"
          label="Company status"
          options={firmStatusOptions} />
        <DateInputForm
          label="Creation date of the company"
          name="companyCreationDate"
          type="date"
        />
        <ControlledTabsButtons isFormToUpdate={isFormToUpdate} setTabIndex={setTabIndex} tabIndex={tabIndex} />
      </Form>
    </Formik>
  )
}
