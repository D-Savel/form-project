import { useField } from 'formik'
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'

export const DateInputForm = ({ label, ...props }) => {

  const [field, meta] = useField(props)
  return (
    <FormControl w='250px' mb='4' isRequired isInvalid={meta.touched && meta.error ? true : false}>
      <FormLabel htmlFor={props.id || props.name}>{label}</ FormLabel>
      <Input type='date' className="date-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  )
}