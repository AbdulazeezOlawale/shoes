import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../../firebaseConfig';
import productsItem from '../../store/products.json';

const CatalogeList = () => {

    const saveDataToFirestore = async (e) => {
        e.preventDefault();  // Prevents default button behavior if within a form
        try {
            for (const element of productsItem) {  // Using for...of for async operations
                await addDoc(collection(db, "myCollection"), element);
            }
            alert("All documents successfully written to the database!");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <button type='button' onClick={saveDataToFirestore}>Save</button>
    );
};

export default CatalogeList;
