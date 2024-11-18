import React, { useState } from 'react'
import styles from "../Store/shop.module.css"
import SizeComponent from './SizeComponent';
import SelectComponent from './SelectComponent';
import { categoryCheckbox, categoryData, colorData, genderCheckBox, genderData, sizeData } from '../../store/Data';
import Tag from './Tag';
import Slider from './Slider';
import CatalogeList from './CatalogeList';
const Store = () => {    

    const [isOpen, setIsOpen] = useState([true, true, true, true, true, true]);
    
    const toggle0 = () => {
        const updatedIsClicked = [...isOpen];
        updatedIsClicked[0] = !updatedIsClicked[0];
        setIsOpen(updatedIsClicked);
    }
    
    const toggle1 = () => {
        const updatedIsClicked = [...isOpen];
        updatedIsClicked[1] = !updatedIsClicked[1];
        setIsOpen(updatedIsClicked);
    }

    const toggle2 = () => {
        const updatedIsClicked = [...isOpen];
        updatedIsClicked[2] = !updatedIsClicked[2];
        setIsOpen(updatedIsClicked);
    }

    const toggle3 = () => {
        const updatedIsClicked = [...isOpen];
        updatedIsClicked[3] = !updatedIsClicked[3];
        setIsOpen(updatedIsClicked);
    }

    const toggle4 = () => {
        const updatedIsClicked = [...isOpen];
        updatedIsClicked[4] = !updatedIsClicked[4];
        setIsOpen(updatedIsClicked);
    }

    const toggle5 = () => {
        const updatedIsClicked = [...isOpen];
        updatedIsClicked[5] = !updatedIsClicked[5];
        setIsOpen(updatedIsClicked);
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

                        <div className={styles.sidebar}>
                            <div className={styles.cataloge_filter_heading}>
                                <h3>Filters</h3>
                            </div>

                            <div className={styles.refine}>
                                <div className={styles.component_heading}>
                                    <h5>Refine by</h5>
                                    <button onClick={() => toggle0()} id='buttons'>
                                        <img src={isOpen[0] ? "https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" : "https://img.icons8.com/?size=100&id=60662&format=png&color=000000"} alt="up arrow" />
                                    </button>
                                </div>
                                <div className={isOpen[0] ? styles.component_body : styles.scroll_up}>
                                    <Tag styles = {styles}/>
                                </div>
                            </div>

                            <div className={styles.size}>
                                <div className={styles.component_heading}>
                                    <h5>Size</h5>
                                    <button onClick={() => toggle1()} id='buttons'>
                                        <img src={isOpen[1] ? "https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" : "https://img.icons8.com/?size=100&id=60662&format=png&color=000000"} alt="up arrow" />
                                    </button>
                                </div>
                                <div className={isOpen[1] ? styles.component_body : styles.scroll_up}>
                                    <SizeComponent data = {sizeData}/>
                                </div>
                            </div>

                            <div className={styles.color}>
                                <div className={styles.component_heading}>
                                    <h5>Color</h5>
                                    <button onClick={() => toggle2()} id='buttons'>
                                        <img src={isOpen[2] ? "https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" : "https://img.icons8.com/?size=100&id=60662&format=png&color=000000"} alt="up arrow" />
                                    </button>
                                </div>
                                <div className={isOpen[2] ? styles.component_body : styles.scroll_up}>
                                    <SizeComponent data = {colorData}/>
                                </div>
                            </div>

                            <div className={styles.category}>
                                <div className={styles.component_heading}>
                                    <h5>Categories</h5>
                                    <button onClick={() => toggle3()} id='buttons'>
                                        <img src={isOpen[3] ? "https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" : "https://img.icons8.com/?size=100&id=60662&format=png&color=000000"} alt="up arrow" />
                                    </button>
                                </div>
                                <div className={isOpen[3] ? styles.component_body : styles.scroll_up}>
                                    <SelectComponent data = {categoryData} checkData = {categoryCheckbox} name = {"category data"}/>
                                </div>
                            </div>

                            <div className={styles.gender}>
                                <div className={styles.component_heading}>
                                    <h5>Gender</h5>
                                    <button onClick={() => toggle4()} id='buttons'>
                                        <img src={isOpen[4] ? "https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" : "https://img.icons8.com/?size=100&id=60662&format=png&color=000000"} alt="up arrow" />
                                    </button>
                                </div>
                                <div className={isOpen[4] ? styles.component_body : styles.scroll_up}>
                                    <SelectComponent data = {genderData} name={"gender data"} checkData={genderCheckBox}/> 
                                </div>
                            </div>

                            <div className={styles.price}>
                                <div className={styles.component_heading}>
                                    <h5>Price</h5>
                                    <button onClick={() => toggle5()} id='buttons'>
                                        <img src={isOpen[5] ? "https://img.icons8.com/?size=100&id=Ydq9x6uVsy9e&format=png&color=000000" : "https://img.icons8.com/?size=100&id=60662&format=png&color=000000"} alt="up arrow" />
                                    </button>
                                </div>
                                <div className={isOpen[5] ? styles.component_body : styles.scroll_up}>
                                    <Slider/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.cataloge_list}>
                        <CatalogeList styles={styles}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Store
