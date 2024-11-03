import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import styles from "../Home/home.module.css"

const Home = () => {

    
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className={styles.home}>
        <div className={styles.hero}>
            <h1>DO IT <span> RIGHT</span> </h1>

            <div className={styles.hero_img}>
                {/* <img src="./images/.png" alt="hero image" /> */}
            </div>
        </div>

        <div className={`${styles.slider} container` }>

            <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                 className={styles.mySwiper2}
            >
                <SwiperSlide className={styles.banner}>
                    <div className={styles.banner_text}>
                        <h1>NIKE AIR MAX</h1>
                        <p>Nike introducing the new Air Max for everyone's comfort</p>
                        <button>SHOP NOW</button>
                    </div>
                    <img src="./images/banner2.jpg" alt='carousel img'/>
                </SwiperSlide>
                <SwiperSlide className={styles.banner}>
                    <div className={styles.banner_text}>
                        <h1>NIKE AIR MAX</h1>
                        <p>Experience the next level of comfort with Air Max</p>
                        <button>SHOP NOW</button>
                    </div>
                    <img src="./images/banner1.jpg" alt='carousel img'/>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={0}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper}
            >
                <SwiperSlide className={styles.swiper_slide}>
                    <img src="./images/banner2.jpg" alt='carousel img'/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src="./images/banner1.jpg" alt='carousel img'/>
                </SwiperSlide>
            </Swiper>
        </div>
        
    </section>
  )
}

export default Home