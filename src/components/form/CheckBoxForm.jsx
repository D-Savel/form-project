import { useField } from 'formik'
import {
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from '@chakra-ui/react'

export const CheckBoxForm = ({ label, ...props }) => {

  const [field, meta] = useField(props)
  return (
    <FormControl mb='4' isInvalid={meta.touched && meta.error ? true : false}>
      <FormLabel htmlFor={props.id || props.name}>{label}</ FormLabel>
      <Checkbox className="select-form" {...field} {...props} />
      {meta.touched && meta.error ? (
        <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  )
}