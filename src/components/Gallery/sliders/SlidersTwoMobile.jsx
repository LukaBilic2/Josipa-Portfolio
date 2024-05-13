import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const SliderTwoMobile = forwardRef(
  ({ imageOne, imageTwo, hidden, h3Text, LocationText, takenBy }, ref) => {
    return (
      <div className={`container ${hidden ? 'hidden' : ''}`} ref={ref}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 0,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          initialSlide={0}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={imageOne} alt="slide_image" />
            <div className="overlayText">
              <div>
                <h3>{h3Text}</h3>
                <p>{LocationText}</p>
              </div>
              <p>{takenBy}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={imageTwo} alt="slide_image" />
            <div className="overlayText">
              <div>
                <h3>{h3Text}</h3>
                <p>{LocationText}</p>
              </div>
              <p>{takenBy}</p>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    );
  }
);

SliderTwoMobile.displayName = 'SliderTwoMobile';
export default SliderTwoMobile;
