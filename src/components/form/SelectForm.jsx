import { useField } from 'formik'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from '@chakra-ui/react'

export const SelectForm = ({ label, ...props }) => {

  const [field, meta] = useField(props)

  return (
    <FormControl mb='4' isRequired isInvalid={meta.touched && meta.error ? true : false}>
      <FormLabel htmlFor={props.id || props.name}>{label}</ FormLabel>
      <Select className="select-form" {...field} {...props}>
      </Select>
      {meta.touched && meta.error ? (
        <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  )
}