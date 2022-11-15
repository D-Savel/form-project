import { useContext } from 'react'
import { FormDataContext } from './../context/FormDataContext'
import { IsFormValidateContext } from '../context/IsFormValidateContext'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextInputForm } from './form/TextInputForm'
import { ControlledTabsButtons } from './ControlledTabsButtons'

export const IdentityForm = (props) => {
  const { setTabIndex, tabIndex, setIsIdentityFormValidate, isIdentityFormValidate } = props

  const { formData, setFormData } = useContext(FormDataContext)
  const { isFormValidate, setIsFormValidate } = useContext(IsFormValidateContext)
  const isFormToUpdate = isFormValidate.identityForm


  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        e => e.preventDefault()
        values = { ...formData, ...values }
        setFormData(values)
        setSubmitting(false)
        setTabIndex(tabIndex => tabIndex + 1)
        setIsFormValidate({ ...isFormValidate, identityForm: true })
      }}
    >
      <Form>
        <TextInputForm
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Jane"
        />
        <TextInputForm
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Doe"
        />
        <TextInputForm
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@formik.com"
        />
        <ControlledTabsButtons isFormToUpdate={isFormToUpdate} setTabIndex={setTabIndex} tabIndex={tabIndex} />
      </Form>
    </Formik>
  )
}
