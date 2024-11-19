import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import Favourite from "./Favourite/Favourite";

const CatalogeList = ({ styles }) => {
    const [data, setData] = useState([]);

    // Creates an array of 24 `true` values
    const [bool, setBool] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem("fav_item"));
        return storedData || Array(24).fill(true); // Load from localStorage or initialize
    });

    useEffect(() => {
        const fetchDataFromFirestore = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "myCollection"));
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({ id: doc.id, ...doc.data() });
                });
                setData(items);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        fetchDataFromFirestore();
    }, []); // No `bool` dependency needed    
    
    // Use querySelectorAll to select "fav" elements

    const handleButtonClick = (index) => {
        const updatedBool = [...bool];
        updatedBool[index] = !updatedBool[index];
        setBool(updatedBool); // Update state
        localStorage.setItem("fav_item", JSON.stringify(updatedBool)); // Sync with localStorage
    };


  return (
    <Favourite data={data} handleButtonClick={handleButtonClick} bool={bool}/>
  );
};

export default CatalogeList;
