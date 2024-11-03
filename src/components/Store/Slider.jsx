import React, { useState } from 'react'
import styles from "../Store/slider.module.css"

const Slider = () => {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event) => {
        setSliderValue(parseInt(event.target.value, 0))
    }

    return (
        <div>
            <input 
            className={styles.range_input}
            type="range"
            id='rangeInput'
            min="0"
            max="1000"
            value={sliderValue}
            onChange={handleSliderChange}
            />

            <div className={styles.range_text}>
                <span >
                    $ {sliderValue}
                </span>
                <span>
                    $ 1000
                </span>
            </div>
        </div>
    )
}

export default Slider