import { Children, useState, useEffect, useContext } from 'react';
import { ChildrenCountContext } from '../context/ChildrenCountContext';


export const Wrapper = ({ children }) => {

  const { setChildrenCount } = useContext(ChildrenCountContext)

  useEffect(() => {
    setChildrenCount(Children.count(children))
  })

  return (
    <>
      {children}
    </>
  );
}
