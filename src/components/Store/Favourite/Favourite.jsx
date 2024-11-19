import React from 'react'
import styles from './favourite.module.css';

const Favourite = ({data, handleButtonClick, bool}) => {

    const getDataCollection = (item, index) => {
        const favItem = {
            item_data: item,
            index_no: index
        }
    }

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
  )
}

export default Favourite
