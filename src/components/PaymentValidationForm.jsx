import { useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import { FormDataContext } from './../context/FormDataContext'
import { IsFormValidateContext } from './../context/IsFormValidateContext'
import {
  Flex,
  useToast
} from '@chakra-ui/react'
import * as Yup from 'yup'
import { RadioForm } from './form/RadioForm'
import { CheckBoxForm } from './form/CheckBoxForm'
import { ControlledTabsButtons } from './ControlledTabsButtons'
import { paymentOptions } from '../data/paymentOptions'

export const PaymentValidationForm = (props) => {
  const { setTabIndex, tabIndex } = props

  const toast = useToast()
  const { formData, setFormData } = useContext(FormDataContext)
  const { isFormValidate, setIsFormValidate } = useContext(IsFormValidateContext)

  console.log(isFormValidate.identityForm);
  console.log(isFormValidate.addressForm);
  console.log(isFormValidate.companyForm);
  console.log(isFormValidate.validationForm);




  return (
    <Formik
      initialValues={{
        paymentOptions: '',
        acceptedTerms: ''
      }}
      validationSchema={Yup.object({
        paymentOptions: Yup.string()
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        e => e.preventDefault()
        setIsFormValidate({ ...isFormValidate, validationForm: true })
        if (!!isFormValidate.identityForm && !!isFormValidate.addressForm && !!isFormValidate.companyForm) {
          values = { ...formData, ...values }
          setFormData(values)
          toast({
            title: 'Datas sent to server',
            description: `${JSON.stringify(formData, null, 4)}`,
            status: 'success',
            duration: 8000,
            isClosable: true,
          })
        } else {
          toast({
            title: 'Form is not fully completed!\n Complete form red tabs',
            status: 'error',
            duration: 8000,
            isClosable: true,
          })
        }
      }}
    >
      <Flex mr='50px' direction='column'>
        <Form>
          <RadioForm
            name="paymentOptions"
            label="Payment options"
            options={paymentOptions} />
          <CheckBoxForm name="acceptedTerms">
            I accept the terms and conditions
          </CheckBoxForm>
          <ControlledTabsButtons setTabIndex={setTabIndex} tabIndex={tabIndex} />
        </Form>
      </Flex>
    </Formik>
  )
}
