import React from 'react'
import { reviews } from '../../store/Data'
import TitleAnimation from './Animations/TitleAnimation'

const Reviews = ({styles}) => {
  return (
    <div className={`container ${styles.reviews}`}>
      <h1>
        <TitleAnimation text="REVIEWS"/>
      </h1>
        <ul>
            {
                reviews.map((item, index) => (
                    <li key={index}>
                        <div className={styles.top}>
                            <div className={styles.text}>
                                <h3>{item.title}</h3>
                                <small>{item.desc}</small>
                                <div className={styles.rating}>
                                    <img src={`./images${item.rating}`} alt="" />
                                    <small>5.0</small>
                                </div>
                            </div>

                            <div className={styles.photo}>
                                <img src={`./images${item.photo}`} alt="" />
                            </div>
                        </div>

                        <div className={styles.bottom}>
                            <img src={`./images${item.frame}`} alt="" />
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Reviews
