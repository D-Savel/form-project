import { useContext } from 'react'
import { FormDataContext } from './../context/FormDataContext'
import { IsFormValidateContext } from '../context/IsFormValidateContext'
import { Formik, Form } from 'formik'
import {
  Flex
} from '@chakra-ui/react'
import * as Yup from 'yup'
import { TextInputForm } from './form/TextInputForm'
import { SelectForm } from './form/SelectForm'
import { ControlledTabsButtons } from './ControlledTabsButtons'
import { country } from '../data/country.js'

export const AddressForm = (props) => {
  const { setTabIndex, tabIndex, isAddressFormValidate, setIsAddressFormValidate } = props

  const { formData, setFormData } = useContext(FormDataContext)
  const { isFormValidate, setIsFormValidate } = useContext(IsFormValidateContext)
  const isFormToUpdate = isFormValidate.addressForm

  return (
    <Formik
      initialValues={{
        streetNumber: '',
        streetName: '',
        zipCode: '',
        country: ''
      }}
      validationSchema={Yup.object({
        streetNumber: Yup.number()
          .required('Required'),
        streetName: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        zipCode: Yup.number()
          .max(99000, 'this zip code doesn\'t exist')
          .required('Required'),
        country: Yup.string()
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        e => e.preventDefault()
        values = { ...formData, ...values }
        setFormData(values)
        setSubmitting(false);
        setTabIndex(tabIndex => tabIndex + 1)
        setIsFormValidate({ ...isFormValidate, addressForm: true })
      }}
    >
      <Flex direction='column'>
        <Form>
          <TextInputForm
            label="Street number"
            name="streetNumber"
            type="number"
          />
          <TextInputForm
            label="Street name"
            name="streetName"
            type="text"
          />
          <TextInputForm
            label="Zip code"
            name="zipCode"
            type="number"
          />
          <SelectForm label="Country" name="country">
            < option value="">Select a country</option>
            {country.map((country) => {
              return (
                <option key={country} value={country}>{country}</option>)
            }
            )}
          </SelectForm>
          <ControlledTabsButtons isFormToUpdate={isFormToUpdate} setTabIndex={setTabIndex} tabIndex={tabIndex} />
        </Form>
      </Flex>
    </Formik>
  )
}
