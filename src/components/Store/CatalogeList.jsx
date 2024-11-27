import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const CatalogeList = ({ styles }) => {
    const [data, setData] = useState([]);
    const [favData, setFavData] = useState([])

    // Creates an array of 24 `true` values
    const [bool, setBool] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem("fav_item"));
        return storedData || Array(24).fill(true);
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

            try {
                const querySnapshot = await getDocs(collection(db, "favorites"));
                const items = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc.id);
                    
                    items.push({ id: doc.data().id, ...doc.data(), current_id: doc.id });
                });
                setFavData(items);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };
        
        fetchDataFromFirestore();
    }, []);

    
    const mapData = (index, favItem) => {
        
        favData.map((fav_item) => {
            console.log("index_no: " + fav_item.index_no, "index: " + index);
            
            if (favData.length > 0 && fav_item.index_no !== index) {
                // remove the item from firestore
                const checkForDuplicate = async() => {
                    try {
                        // Add the favItem to a Firestore collection
                        const docRef = await addDoc(collection(db, "favorites"), favItem);
                        console.log("Document written with ID: ", docRef.id);
                    } catch (error) {
                        console.error("Error adding document: ", error);
                    }
                }
                checkForDuplicate();
            }else if (favData.length > 0 && fav_item.index_no === index) {
                // need to fix the favorites id
                const deleteItemFromFirestore = async (itemId) => {
                    try {
                        // Reference the document by its ID in the "favorites" collection
                        const docRef = doc(db, "favorites", itemId);
                        await deleteDoc(docRef);
                        console.log(`Document with ID ${itemId} deleted successfully.`);
                    } catch (error) {
                        console.error("Error deleting document:", error);
                    }
                };
                deleteItemFromFirestore(fav_item.current_id);
            }
            return 0;
        }) 
    }
    
    const getDataCollection = async (item, index) => {
        const favItem = {...item, index_no: index};
        
        if (favData.length === 0) {
            try {
                // Add the favItem to a Firestore collection
                const docRef = await addDoc(collection(db, "favorites"), favItem);
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
            
            console.log("Nothing is in favData array");

            try {
                const querySnapshot = await getDocs(collection(db, "favorites"));
                const items = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc.id);
                    
                    items.push({ id: doc.data().id, ...doc.data(), current_id: doc.id });
                });
                setFavData(items);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
            
        } else{
            console.log("something is in favData array");
            
            try {
                const querySnapshot = await getDocs(collection(db, "favorites"));
                const items = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc.id);
                    
                    items.push({ id: doc.data().id, ...doc.data(), current_id: doc.id });
                });
                setFavData(items);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        }
        
        console.log(favData);
        mapData(index, favItem);
    };

    // this function check and uncheck the fav icon
    const handleButtonClick = (index) => {
        const updatedBool = [...bool];
        updatedBool[index] = !updatedBool[index];
        setBool(updatedBool);
        localStorage.setItem("fav_item", JSON.stringify(updatedBool));
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
                            getDataCollection(item, index);
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
