import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import Favourite from '../Store/Favourite/Favourite';
import styles from './favouriteSection.module.css'

const FavouriteSection = () => {
    const [data, setData] = useState([]);

    const [bool, setBool] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem("fav_item"));
        return storedData || Array(24).fill(true);
    });
    
    useEffect(() => {
        const fetchDataFromFirestore = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "favorites"));
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({ ...doc.data() });
                });

                setData(items);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        fetchDataFromFirestore();
    }, [bool]);

    console.log(data);
    
    const handleButtonClick = (index) => {
        const updatedBool = [...bool];
        updatedBool[index] = !updatedBool[index];
        setBool(updatedBool);
        localStorage.setItem("fav_item", JSON.stringify(updatedBool));
    };

  return (
    <>
        <div className={`container ${styles.banner}`}>
        </div>
        <div className={`container ${styles.cataloge_list}`}>
            {
                data.length > 0 ? <Favourite data={data} styles={styles} handleButtonClick={handleButtonClick} bool={bool}/> :
                <p>loading...</p>
            }
        </div>
    </>
  )
}

export default FavouriteSection
