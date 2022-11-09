import { useField } from 'formik'
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'

export const TextInputForm = ({ label, ...props }) => {

  const [field, meta] = useField(props)
  return (
    <FormControl mb='4' isRequired isInvalid={meta.touched && meta.error ? true : false}>
      <FormLabel htmlFor={props.id || props.name}>{label}</ FormLabel>
      <Input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  )
}