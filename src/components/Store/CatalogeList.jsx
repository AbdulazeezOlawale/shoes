import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

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
    <>
        {data.length > 0 ? (
            data.map((item, index) => (
            <div key={item.id} className={styles.product_item}>
                <div className={styles.product_item_image}>
                    <img src={item.image} alt={item.name} />
                    <button className="fav"
                        onClick={() => {
                            handleButtonClick(index);
                        }}
                    >
                        {bool[index] === true ? (
                        <img
                            src="https://img.icons8.com/?size=100&id=86721&format=png&color=D92D2D"
                            alt=""
                        />
                        ) : (
                        <img
                            src="https://img.icons8.com/?size=100&id=86708&format=png&color=D92D2D"
                            alt=""
                        />
                        )}
                    </button>
                </div>
                <div className={styles.product_desc}>
                    <small>{item.name}</small>
                    <small>{item.price}</small>
                </div>
                <button className={styles.add_tocart}>Add to cart</button>
            </div>
            ))
        ) : (
            <p>Loading data...</p>
        )}
    </>
  );
};

export default CatalogeList;
