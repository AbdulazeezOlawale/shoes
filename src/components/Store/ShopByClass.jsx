import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const ShopByClass = ({styles}) => {
  return (
    <div className={`container ${styles.shop_by_class}`}>
      <h1>SHOP BY CLASS</h1>
    
        <section className='shop_by_class'>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                freeMode={true}
                navigation={true}
                modules={[Navigation]}
                className={styles.mySwiper}
            >
                <SwiperSlide>
                    <Link to="/store/airmax">
                        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1068,c_limit/68f314a7-ad74-477e-840b-c0a1ef00a49b/nike-just-do-it.jpg" alt="" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1068,c_limit/a75d42ee-6142-4024-98ef-b6ed4c90909a/nike-just-do-it.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1068,c_limit/5f3cbf3a-61d7-4a71-a9cf-2f7679eefae1/nike-just-do-it.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1068,c_limit/be5fa28d-45c2-45b5-a60f-c698163aee18/nike-just-do-it.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/d349028a-633e-4d26-bedc-1d20062edb82/nike-just-do-it.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/52cc5902-5fed-4320-8776-0c1161c978c9/nike-just-do-it.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/bce4329e-4d2d-4558-8276-655299b5eb42/nike-just-do-it.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    </div>
  )
}

export default ShopByClass
