import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SelectComponent = ({data}) => {

  const selectedItems = useSelector(state => state.selectedItems);
  const dispatch = useDispatch();


  const handleItemClick = (item) => {
    // Check if the item is already selected
    if (selectedItems.includes(item)) {
      // If it is, dispatch action to remove it
      dispatch({ type: 'DESELECT_ITEM', payload: item });
    } else {
      // If it isn't, dispatch action to add it
      dispatch({ type: 'SELECT_ITEM', payload: item });
    }
  };

  return (
    <>
        {
            data.map((item, index) => (
                <>
                    <input type="checkbox" key={index} id={item} value={item} onChange={() => handleItemClick(item)} />
                    <label htmlFor={item}>{item}</label>
                </>
            ))
        }
    </>
  )
}

export default SelectComponent
