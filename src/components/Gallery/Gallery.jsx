import styles from './Gallery.module.css';
import {
  facebookIcon,
  image10Gallery,
  image11Gallery,
  image12Gallery,
  image13Gallery,
  image14Gallery,
  image15Gallery,
  image16Gallery,
  image17Gallery,
  image18Gallery,
  image19Gallery,
  image1Gallery,
  image20Gallery,
  image21Gallery,
  image22Gallery,
  image23Gallery,
  image24Gallery,
  image25Gallery,
  image26Gallery,
  image2Gallery,
  image3Gallery,
  image4Gallery,
  image5Gallery,
  image6Gallery,
  image7Gallery,
  image8Gallery,
  image9Gallery,
  instagramIcon,
  newSlider1,
  newSlider2,
  newSlider3,
  youtubeIcon,
} from '../../services';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Gallery = () => {
  const elementRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const elements = elementRefs.current;
    if (elements.length > 0) {
      elements.forEach((element) => {
        if (element) {
          observer.observe(element);
        }
      });
    }

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const wrapperRefs = useRef([]);
  const [touchStartX, setTouchStartX] = useState(null);
  const [setTouchMoveX] = useState(null);

  const handleTouchStart = (index, e) => {
    setTouchStartX(e.touches[0].clientX);
    setScrollLeft(wrapperRefs.current[index].scrollLeft);
    wrapperRefs.current[index].style.cursor = 'grabbing';
  };

  const handleTouchMove = (index, e) => {
    if (!touchStartX) return;
    const currentX = e.touches[0].clientX;
    const diff = touchStartX - currentX;
    const sensitivityFactor = 1.5;
    const scrollDistance = diff * sensitivityFactor;
    wrapperRefs.current[index].scrollLeft = scrollLeft + scrollDistance;
    setTouchMoveX(currentX);
  };

  const handleTouchEnd = (index) => {
    wrapperRefs.current[index].style.cursor = 'grab';
    setTouchStartX(null);
    setTouchMoveX(null);
  };

  const startScrolling = (index, e) => {
    setIsScrolling(true);
    setStartX(e.pageX - wrapperRefs.current[index].offsetLeft);
    setScrollLeft(wrapperRefs.current[index].scrollLeft);
    wrapperRefs.current[index].style.cursor = 'grabbing';
  };

  const stopScrolling = (index) => {
    setIsScrolling(false);
    wrapperRefs.current[index].style.cursor = 'grab';
  };

  const handleMouseMove = (index, e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - wrapperRefs.current[index].offsetLeft;
    const walk = (x - startX) * 2;
    wrapperRefs.current[index].scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = (index, e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const wrapper = wrapperRefs.current[index];
    const distance = wrapper.scrollWidth - wrapper.clientWidth;
    const direction = startX < 50 ? -1 : 1;
    wrapper.scrollLeft += direction * distance;
    setIsScrolling(false);
    wrapper.style.cursor = 'grab';
  };

  function toggleNavigation() {
    const navigation = document.querySelector(`.${styles['gallery-navigation']}`);
    navigation.classList.toggle(styles.active);
    const mobileNav = document.querySelector(`.${styles['mobile-li']}`);
    mobileNav.classList.toggle(styles.active);
    const mobileIcons = document.querySelector(`.${styles['icons-mobile']}`);
    mobileIcons.classList.toggle(styles.active);
    const signature = document.querySelector(`.${styles['signature-mob-slide']}`);
    signature.classList.toggle(styles.active);
    const footerSlide = document.querySelector(`.${styles['footer-slide']}`);
    footerSlide.classList.toggle(styles.active);
  }

  return (
    <div>
      <header className={styles['gallery-home-header']}>
        <div className={styles['gallery-background-image']}></div>
        <div className={styles['home-header']}>
          <p className={styles['signature-mob-slide']}>Josipa Bilić</p>

          <nav>
            <button className={styles['nav-toggle']} onClick={toggleNavigation}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </button>

            <ul className={styles['gallery-navigation']}>
              <button className={`${styles['button-nav-mobile']}`} onClick={toggleNavigation}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </button>

              <div className={`${styles['mobile-li']} ${styles['gallery-navigation']}`}>
                <NavLink to="/">
                  <li className={styles['nav-li']}>Home</li>
                </NavLink>
                <NavLink to="/about">
                  <li className={styles['nav-li']}>About</li>
                </NavLink>
                <NavLink to="/gallery">
                  <li className={styles['nav-li']}>Gallery</li>
                </NavLink>
                <NavLink to="/agenda">
                  <li className={styles['nav-li']}>Agenda</li>
                </NavLink>
                <NavLink to="/contact">
                  <li className={styles['nav-li']}>Contact</li>
                </NavLink>
              </div>
            </ul>
          </nav>
        </div>

        <div className={`${styles['icons-mobile']}`}>
          <a href="https://www.facebook.com/JosipicaB" target="blank">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/josipa___bilic/" target="blank">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@josipabilicsoprano/featured" target="blank">
            <img src={youtubeIcon} alt="Youtube" />
          </a>
        </div>
        <p className={styles['footer-slide']}>All rights reserved @ 2024</p>

        <div className={styles['p-main-background']}>
          <p>
            Johan Strauss II: Die Fledermaus (Adele) <br />
            Croatian Nation Theatre Zagreb, 2023
          </p>
        </div>

        <div className={styles['gallery-icons']}>
          <a href="https://www.facebook.com/JosipicaB" className={`fa fa-facebook`} target="blank"></a>
          <a href="https://www.instagram.com/josipa___bilic/" className={`fa fa-instagram`} target="blank"></a>
          <a href="https://www.youtube.com/@josipabilicsoprano/featured" className={`fa fa-youtube`} target="blank"></a>
        </div>
      </header>

      <main>
        <h2 className={`${styles['gallery-h2']} hidden`} ref={(el) => (elementRefs.current[1] = el)}>
          Gallery
        </h2>

        <div className={`${styles['wrapper1']} hidden`} ref={(el) => (elementRefs.current[15] = el)}>
          <div
            className={styles['images-1']}
            ref={(ref) => (wrapperRefs.current[9] = ref)}
            onMouseDown={(e) => startScrolling(9, e)}
            onMouseUp={() => stopScrolling(9)}
            onMouseMove={(e) => handleMouseMove(9, e)}
            onMouseLeave={(e) => handleMouseLeave(9, e)}
            onTouchStart={(e) => handleTouchStart(9, e)}
            onTouchMove={(e) => handleTouchMove(9, e)}
            onTouchEnd={() => handleTouchEnd(9)}
          >
            <img src={newSlider1} alt="image1" />
            <img src={newSlider2} alt="image2" />
            <img src={newSlider3} alt="image3" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-1']}>
              Wolfgang Amadeus Mozart: Così fan tutte (Despina) Croatian National Theatre in Zagreb, 2024
            </p>
          </div>
        </div>

        <div className={`${styles['wrapper1']} hidden`} ref={(el) => (elementRefs.current[2] = el)}>
          <div
            className={styles['images-1']}
            ref={(ref) => (wrapperRefs.current[0] = ref)}
            onMouseDown={(e) => startScrolling(0, e)}
            onMouseUp={() => stopScrolling(0)}
            onMouseMove={(e) => handleMouseMove(0, e)}
            onMouseLeave={(e) => handleMouseLeave(0, e)}
            onTouchStart={(e) => handleTouchStart(0, e)}
            onTouchMove={(e) => handleTouchMove(0, e)}
            onTouchEnd={() => handleTouchEnd(0)}
          >
            <img src={image1Gallery} alt="image1" />
            <img src={image2Gallery} alt="image2" />
            <img src={image3Gallery} alt="image3" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-1']}>
              Gustav Mahler: Symphony No. 4<br />
              HRT Symphony Orchestra, maestro David Danzmayir
              <br />
              Concert Hall Vatroslav Lisinski in Zagreb, 2023
            </p>
          </div>
        </div>

        <div className={`${styles['color-container']} hidden`} ref={(el) => (elementRefs.current[3] = el)}>
          <div
            className={styles['images-1']}
            ref={(ref) => (wrapperRefs.current[1] = ref)}
            onMouseDown={(e) => startScrolling(1, e)}
            onMouseUp={() => stopScrolling(1)}
            onMouseMove={(e) => handleMouseMove(1, e)}
            onMouseLeave={(e) => handleMouseLeave(1, e)}
            onTouchStart={(e) => handleTouchStart(1, e)}
            onTouchMove={(e) => handleTouchMove(1, e)}
            onTouchEnd={() => handleTouchEnd(1)}
          >
            <img src={image4Gallery} alt="image1" loading="lazy" />
            <img src={image5Gallery} alt="image2" loading="lazy" />
            <img src={image6Gallery} alt="image3" loading="lazy" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-2']}>
              Jakov Gotovac: Stanac (Danica)
              <br />
              Klovićevi dvori Gallery Zagreb, 2023
            </p>
          </div>
        </div>

        <div className={`${styles['wrapper1']} hidden`} ref={(el) => (elementRefs.current[4] = el)}>
          <div
            className={styles['images-1']}
            ref={(ref) => (wrapperRefs.current[2] = ref)}
            onMouseDown={(e) => startScrolling(2, e)}
            onMouseUp={() => stopScrolling(2)}
            onMouseMove={(e) => handleMouseMove(2, e)}
            onMouseLeave={(e) => handleMouseLeave(2, e)}
            onTouchStart={(e) => handleTouchStart(2, e)}
            onTouchMove={(e) => handleTouchMove(2, e)}
            onTouchEnd={() => handleTouchEnd(2)}
          >
            <img src={image7Gallery} alt="image1" loading="lazy" />
            <img src={image8Gallery} alt="image2" loading="lazy" />
            <img src={image9Gallery} alt="image3" loading="lazy" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-1']}>
              Peter Lund: Hillary the Witch goes to the Opera
              <br />
              Croatian National Theatre in Zagreb, 2023
            </p>
          </div>
        </div>

        <div className={`${styles['color-container']} hidden`} ref={(el) => (elementRefs.current[5] = el)}>
          <div
            className={styles['images-1']}
            ref={(ref) => (wrapperRefs.current[3] = ref)}
            onMouseDown={(e) => startScrolling(3, e)}
            onMouseUp={() => stopScrolling(3)}
            onMouseMove={(e) => handleMouseMove(3, e)}
            onMouseLeave={(e) => handleMouseLeave(3, e)}
            onTouchStart={(e) => handleTouchStart(3, e)}
            onTouchMove={(e) => handleTouchMove(3, e)}
            onTouchEnd={() => handleTouchEnd(3)}
          >
            <img src={image10Gallery} alt="image1" loading="lazy" />
            <img src={image11Gallery} alt="image2" loading="lazy" />
            <img src={image12Gallery} alt="image3" loading="lazy" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-2']}>
              Zagreb Classic Open Air Festival 2023
              <br />
              Zagreb Philharmonic Orchestra, maestro Martin Yates
            </p>
          </div>
        </div>

        <div className={`${styles['wrapper1']} hidden`} ref={(el) => (elementRefs.current[6] = el)}>
          <div
            className={styles['images-2']}
            ref={(ref) => (wrapperRefs.current[4] = ref)}
            onMouseDown={(e) => startScrolling(4, e)}
            onMouseUp={() => stopScrolling(4)}
            onMouseMove={(e) => handleMouseMove(4, e)}
            onMouseLeave={(e) => handleMouseLeave(4, e)}
            onTouchStart={(e) => handleTouchStart(4, e)}
            onTouchMove={(e) => handleTouchMove(4, e)}
            onTouchEnd={() => handleTouchEnd(4)}
          >
            <img src={image13Gallery} alt="image13" loading="lazy" />
            <img src={image14Gallery} alt="image14" loading="lazy" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-1']}>
              Emmerich Kálmán: Gräfin Mariza
              <br />
              Komedija Theatre Zagreb, 2022
            </p>
          </div>
        </div>

        <div className={`${styles['big-image']} hidden`} ref={(el) => (elementRefs.current[7] = el)}>
          <p>14th Opera Selecta Festival, 2022</p>
          <img src={image15Gallery} alt="image15" />
        </div>

        <div className={`${styles['wrapper1']} hidden`} ref={(el) => (elementRefs.current[8] = el)}>
          <div
            className={styles['images-1']}
            ref={(ref) => (wrapperRefs.current[5] = ref)}
            onMouseDown={(e) => startScrolling(5, e)}
            onMouseUp={() => stopScrolling(5)}
            onMouseMove={(e) => handleMouseMove(5, e)}
            onMouseLeave={(e) => handleMouseLeave(5, e)}
            onTouchStart={(e) => handleTouchStart(5, e)}
            onTouchMove={(e) => handleTouchMove(5, e)}
            onTouchEnd={() => handleTouchEnd(5)}
          >
            <img src={image16Gallery} alt="image16" loading="lazy" />
            <img src={image17Gallery} alt="image17" loading="lazy" />
            <img src={image18Gallery} alt="image18" loading="lazy" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-1']}>
              Sarajevo Philharmonic Orchestra, maestro Josip Šego
              <br />
              Sarajevo National Theatre, 2022
            </p>
          </div>
        </div>

        <div className={`${styles['color-container']} hidden`} ref={(el) => (elementRefs.current[9] = el)}>
          <div
            className={styles['images-1']}
            ref={(ref) => (wrapperRefs.current[6] = ref)}
            onMouseDown={(e) => startScrolling(6, e)}
            onMouseUp={() => stopScrolling(6)}
            onMouseMove={(e) => handleMouseMove(6, e)}
            onMouseLeave={(e) => handleMouseLeave(6, e)}
            onTouchStart={(e) => handleTouchStart(6, e)}
            onTouchMove={(e) => handleTouchMove(6, e)}
            onTouchEnd={() => handleTouchEnd(6)}
          >
            <img src={image19Gallery} alt="image19" loading="lazy" />
            <img src={image20Gallery} alt="image20" loading="lazy" />
            <img src={image21Gallery} alt="image21" loading="lazy" />
          </div>

          <div className={`${styles['images-1-p']} hidden`} ref={(el) => (elementRefs.current[10] = el)}>
            <p className={styles['p-2']}>
              63d International Childern Festival in Šibenik
              <br />
              Orchestra at last! (Show for childern), 2022
            </p>
          </div>
        </div>

        <div className={`${styles['wrapper1']} hidden`} ref={(el) => (elementRefs.current[11] = el)}>
          <div
            className={styles['images-2']}
            ref={(ref) => (wrapperRefs.current[7] = ref)}
            onMouseDown={(e) => startScrolling(7, e)}
            onMouseUp={() => stopScrolling(7)}
            onMouseMove={(e) => handleMouseMove(7, e)}
            onMouseLeave={(e) => handleMouseLeave(7, e)}
            onTouchStart={(e) => handleTouchStart(7, e)}
            onTouchMove={(e) => handleTouchMove(7, e)}
            onTouchEnd={() => handleTouchEnd(7)}
          >
            <img src={image22Gallery} alt="image22" loading="lazy" />
            <img src={image23Gallery} alt="image23" loading="lazy" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-1']}>
              Engelbert Humperdinck: Hansel and Gretel (Gretel)
              <br />
              Vatroslav Lisinski Concert Hall Zagreb, 2021
            </p>
          </div>
        </div>

        <div className={`${styles['big-image2']} hidden`} ref={(el) => (elementRefs.current[12] = el)}>
          <p>
            Aleksandar Švabić and Zrinka Posavec: The Bald Soprano <br />
            (Chamber Opera inspired by Eugène Ionesco’s drama), Zagreb, 2021
          </p>
          <img src={image24Gallery} alt="image24" loading="lazy" />
        </div>

        <div className={`${styles['wrapper1']} hidden`} ref={(el) => (elementRefs.current[13] = el)}>
          <div
            className={styles['images-2']}
            ref={(ref) => (wrapperRefs.current[8] = ref)}
            onMouseDown={(e) => startScrolling(8, e)}
            onMouseUp={() => stopScrolling(8)}
            onMouseMove={(e) => handleMouseMove(8, e)}
            onMouseLeave={(e) => handleMouseLeave(8, e)}
            onTouchStart={(e) => handleTouchStart(8, e)}
            onTouchMove={(e) => handleTouchMove(8, e)}
            onTouchEnd={() => handleTouchEnd(8)}
          >
            <img src={image25Gallery} alt="image25" loading="lazy" />
            <img src={image26Gallery} alt="image26" loading="lazy" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-1']}>
              Zagreb Philharmonic Orchestra, maestro Tomislav Fačini
              <br />
              Vatroslav Lisinski Concert Hall Zagreb, 2020
            </p>
          </div>
        </div>
      </main>

      <footer className={`${styles['gallery-footer']} hidden`} ref={(el) => (elementRefs.current[14] = el)}>
        <div>
          <p className={styles['signature-mob-footer']}>Josipa Bilić</p>
          <div className={styles['footer-icons']}>
            <a href="https://www.facebook.com/JosipicaB" className={`fa fa-facebook`} target="blank"></a>
            <a href="https://www.instagram.com/josipa___bilic/" className={`fa fa-instagram`} target="blank"></a>
            <a
              href="https://www.youtube.com/@josipabilicsoprano/featured"
              className={`fa fa-youtube`}
              target="blank"
            ></a>
          </div>
        </div>
        <p>All rights reservef @ 2024</p>
      </footer>
    </div>
  );
};

export default Gallery;
