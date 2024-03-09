import styles from './Agenda.module.css';
import { facebookIcon, instagramIcon, youtubeIcon } from '../../services';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Upcoming from './schedules/Upcoming.jsx';
import PastTwentyFour from './schedules/PastTwentyFour.jsx';
import PastTwentyThree from './schedules/PastTwentyThree.jsx';
import PastTwentyTwo from './schedules/PastTwentyTwo.jsx';

const componentMap = {
  1: <Upcoming />,
  2: <PastTwentyFour />,
  3: <PastTwentyThree />,
  4: <PastTwentyTwo />,
};

const Agenda = () => {
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

  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  function toggleNavigation() {
    const navigation = document.querySelector(`.${styles['agenda-navigation']}`);
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
      <header className={styles['agenda-home-header']}>
        <div className={styles['agenda-background-image']}></div>
        <div className={styles['home-header']}>
          <p className={styles['signature-mob-slide']}>Josipa Bilić</p>

          <nav>
            <button className={styles['nav-toggle']} onClick={toggleNavigation}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </button>

            <ul className={styles['agenda-navigation']}>
              <button className={`${styles['button-nav-mobile']}`} onClick={toggleNavigation}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </button>

              <div className={`${styles['mobile-li']} ${styles['agenda-navigation']}`}>
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

        <div className={styles['agenda-icons']}>
          <a href="https://www.facebook.com/JosipicaB" className={`fa fa-facebook`} target="blank"></a>
          <a href="https://www.instagram.com/josipa___bilic/" className={`fa fa-instagram`} target="blank"></a>
          <a href="https://www.youtube.com/@josipabilicsoprano/featured" className={`fa fa-youtube`} target="blank"></a>
        </div>
      </header>

      <main>
        <div className={`${styles['upcoming-container']} hidden`} ref={(el) => (elementRefs.current[1] = el)}>
          <h2>UPCOMING PERFORMANCES</h2>

          <div className={styles['schedule']}>
            <button
              onClick={() => handleButtonClick(1)}
              className={`${styles['schedule-button']} ${activeButton === 1 ? styles.selected : ''}`}
            >
              Upcoming Performances
            </button>
            <button
              onClick={() => handleButtonClick(2)}
              className={`${styles['schedule-button']} ${activeButton === 2 ? styles.selected : ''}`}
            >
              2024
            </button>
            <button
              onClick={() => handleButtonClick(3)}
              className={`${styles['schedule-button']} ${activeButton === 3 ? styles.selected : ''}`}
            >
              2023
            </button>
            <button
              onClick={() => handleButtonClick(4)}
              className={`${styles['schedule-button']} ${activeButton === 4 ? styles.selected : ''}`}
            >
              2022
            </button>
          </div>
          {componentMap[activeButton]}
        </div>
      </main>

      <footer className={`${styles['home-footer']} hidden`} ref={(el) => (elementRefs.current[2] = el)}>
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

export default Agenda;
