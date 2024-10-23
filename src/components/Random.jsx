import React from 'react'
import { useSelector } from 'react-redux';

const Random = () => {

    const selectedItems = useSelector(state => state.selectedItems);


  return (
    <>
      {selectedItems.map(item => (
        <p key={item}>{item}</p>
      ))}
    </>
  )
}

export default Random
