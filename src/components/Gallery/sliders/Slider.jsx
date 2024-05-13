import { forwardRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Slider = forwardRef(
  (
    {
      imageOne,
      imageTwo,
      imageThree,
      hidden,
      midnightBackground,
      h3Text,
      LocationText,
      takenBy,
    },
    ref
  ) => {
    const [initialSlide, setInitialSlide] = useState(1);

    useEffect(() => {
      const handleResize = () => {
        const isMobile = window.innerWidth < 500;

        setInitialSlide(() => {
          if (isMobile) {
            return 0;
          } else {
            return 1;
          }
        });
      };
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <div
        className={`container ${hidden ? 'hidden' : ''} ${
          midnightBackground ? 'midnight-bg' : ''
        }`}
        ref={ref}
      >
        <Swiper
          key={initialSlide}
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
          initialSlide={initialSlide}
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

          <SwiperSlide>
            <img src={imageThree} alt="slide_image" />
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

Slider.displayName = 'Slider';
export default Slider;
