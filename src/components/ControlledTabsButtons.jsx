import { useContext } from 'react'
import { ChildrenCountContext } from '../context/ChildrenCountContext';
import {
  Button,
  Flex,
  Spacer,
  Tooltip
} from '@chakra-ui/react'

export const ControlledTabsButtons = (props) => {
  const { setTabIndex, tabIndex, isFormToUpdate} = props

  const { childrenCount } = useContext(ChildrenCountContext)
  const maxTabsIndex = childrenCount - 1

  return (
    <Flex>
      {tabIndex !== 0 && (
        <Button mx='3' onClick={() => setTabIndex(index => index - 1)}>Previous</Button>
      )}
      <Spacer />
      <Tooltip isDisabled={!isFormToUpdate ? true : false} label='Update form' placement='bottom' bg='teal.500'>
        <Button mx='3' type="submit">{tabIndex === maxTabsIndex ? 'Submit' : 'Next'}</Button>
      </Tooltip>
    </Flex>
  )
}