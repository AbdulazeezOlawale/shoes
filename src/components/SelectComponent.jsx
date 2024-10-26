import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/shop.module.css'

const SelectComponent = ({data, checkData, name}) => {
    const checkedList = checkData;
    let lsData = useRef([]);
    
    if (lsData.current.length === 0) {
        const data = JSON.parse(localStorage.getItem(name));

        if (data === null) {
            localStorage.setItem(name, JSON.stringify(checkedList));
            lsData.current = [...checkedList];
        } else {
            lsData.current = [...data];
        }        
    }
  

    const [isChecked, setIsChecked] = useState([...lsData.current]);

    const changeCheckedState = (index) => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !isChecked[index]
        setIsChecked(updatedChecked);
    }

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(isChecked));        
    }, [isChecked, name]);

    

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
                    <div className={styles.checkbox_container} key={index}>
                        <input type="checkbox" checked = {isChecked[index]} key={index} id={item} value={item} onChange={() => {
                            handleItemClick(item);
                            changeCheckedState(index);
                        }} 
                        className={styles.checkbox}
                        />
                        <label className={styles.checkbox_label} key={index*4+1} htmlFor={item}>{item}</label>
                    </div>
                ))
            }
        </>
    )
}

export default SelectComponent
