import React from 'react'
import { useSelector } from 'react-redux';

const Tag = ({styles}) => {

    const selectedItems = useSelector(state => state.selectedItems);

  return (
    <>
      {selectedItems.map((item, index) => (
        <div key={index} className={styles.tag}>{item}</div>
      ))}
    </>
  )
}

export default Tag
