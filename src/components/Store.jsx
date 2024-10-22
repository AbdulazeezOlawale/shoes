import React, { useState } from 'react'
import styles from "../styles/shop.module.css"

const Store = () => {


    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }


  return (
    <div className={styles.shop}>
        <div className={`container ${styles.shop_banner}`}>
            <div className={styles.shop_banner_text}>
                <p>Limited time only</p>
                <h1>Get 30% off</h1>
                <em>Sneakers made with your comfort in mind so you can put all of your focus into your next session.</em>
            </div>
        </div>

        <div className={`container ${styles.shop_cataloge}`}>
            <div className={styles.heading}>
                <div className={styles.heading_text}>
                    <h2>Life Style Shoes</h2>
                    <small>122 items</small>
                </div>
                <select name="" id="">
                    <option value="trending">Trending</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>
                </select>
            </div>

            <div className={styles.cataloge}>
                <div className={styles.cataloge_filter}>
                    <div className={styles.cataloge_filter_heading}>
                        <h3>Filters</h3>
                    </div>

                    <div className={styles.refine}>
                        <div className={styles.component_heading}>
                            <h5>Refine by</h5>
                            <button onClick={() => toggleDropdown()}>
                                <img src="https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" alt="up arrow" />
                            </button>
                        </div>
                        <div className={isOpen ? styles.component_body : styles.scroll_up}>
                            olawale
                        </div>
                    </div>

                    <div className={styles.size}>
                        <div className={styles.component_heading}>
                            <h5>Size</h5>
                            <button onClick={() => toggleDropdown()}>
                                <img src="https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" alt="up arrow" />
                            </button>
                        </div>
                        <div className={isOpen ? styles.component_body : styles.scroll_up}>
                            olawale
                        </div>
                    </div>

                    <div className={styles.color}>
                        <div className={styles.component_heading}>
                            <h5>Color</h5>
                            <button onClick={() => toggleDropdown()}>
                                <img src="https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" alt="up arrow" />
                            </button>
                        </div>
                        <div className={isOpen ? styles.component_body : styles.scroll_up}>
                            olawale
                        </div>
                    </div>

                    <div className={styles.category}>
                        <div className={styles.component_heading}>
                            <h5>Categories</h5>
                            <button onClick={() => toggleDropdown()}>
                                <img src="https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" alt="up arrow" />
                            </button>
                        </div>
                        <div className={isOpen ? styles.component_body : styles.scroll_up}>
                            olawale
                        </div>
                    </div>

                    <div className={styles.gender}>
                        <div className={styles.component_heading}>
                            <h5>Gender</h5>
                            <button onClick={() => toggleDropdown()}>
                                <img src="https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" alt="up arrow" />
                            </button>
                        </div>
                        <div className={isOpen ? styles.component_body : styles.scroll_up}>
                            olawale
                        </div>
                    </div>

                    <div className={styles.price}>
                        <div className={styles.component_heading}>
                            <h5>Price</h5>
                            <button onClick={() => toggleDropdown()}>
                                <img src="https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" alt="up arrow" />
                            </button>
                        </div>
                        <div className={isOpen ? styles.component_body : styles.scroll_up}>
                            olawale
                        </div>
                    </div>
                </div>
                <div className={styles.cataloge_list}></div>
            </div>
        </div>
    </div>
  )
}

export default Store
