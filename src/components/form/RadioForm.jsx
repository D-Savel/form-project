import React from 'react'
import { Field, useField } from 'formik'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack
} from '@chakra-ui/react'

export const RadioForm = ({ label, options, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <FormControl mb='4' isRequired isInvalid={meta.touched && meta.error ? true : false}>
      <FormLabel htmlFor={props.id || props.name}>{label}</ FormLabel>
      <Stack spacing={4} direction='row'>
        <Field name={field.name} >
          {
            ({ field }) => {
              return options.map(option => {
                return (
                  <React.Fragment key={option.key}>
                    <input
                      type='radio'
                      {...field}
                      {...props}
                      id={option.id}
                      value={option.value}
                      checked={field.value === option.value}
                    />
                    <FormLabel htmlFor={option.id}>{option.key}</FormLabel>
                  </React.Fragment>

                );
              })
            }
          }
        </Field>
        {meta.touched && meta.error ? (
          <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
        ) : null}
      </Stack>
    </FormControl>
  )
}