import styles from './Agenda.module.css';
import { Signature, kazaliste, facebookIcon, instagramIcon, youtubeIcon } from '../../services';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Agenda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <header className={styles['agenda-home-header']}>
        <div className={styles['agenda-background-image']}></div>
        <div className={styles['home-header']}>
          <img src={Signature} alt="Signature" />

          <nav>
            <ul className={styles.navigation}>
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
            </ul>
          </nav>
        </div>

        <div className={styles['about-icons']}>
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
      </header>
      <main>
        <div className={styles['upcoming-container']}>
          <h2>UPCOMING PERFORMANCES</h2>
          <ul>
            <hr />
            <li className={styles['list-element']}>
              <div className={styles['date-and-place']}>
                <img src={kazaliste} alt="image" />
                <p>
                  03
                  <br />
                  April
                </p>
              </div>
              <p>
                Name of the event <br />
                <span>Zagreb, Croatia</span>
              </p>
            </li>
            <hr />
            <li className={styles['list-element']}>
              <div className={styles['date-and-place']}>
                <img src={kazaliste} alt="image" />
                <p>
                  03
                  <br />
                  April
                </p>
              </div>
              <p>
                Name of the event <br />
                <span>Zagreb, Croatia</span>
              </p>
            </li>
            <hr />
            <li className={styles['list-element']}>
              <div className={styles['date-and-place']}>
                <img src={kazaliste} alt="image" />
                <p>
                  03
                  <br />
                  April
                </p>
              </div>
              <p>
                Name of the event <br />
                <span>Zagreb, Croatia</span>
              </p>
            </li>
            <hr />
            <li className={styles['list-element']}>
              <div className={styles['date-and-place']}>
                <img src={kazaliste} alt="image" />
                <p>
                  03
                  <br />
                  April
                </p>
              </div>
              <p>
                Name of the event <br />
                <span>Zagreb, Croatia</span>
              </p>
            </li>
            <hr />
          </ul>
          <button>Previous performances</button>
        </div>
      </main>
      <footer className={styles['home-footer']}>
        <div>
          <img src={Signature} alt="Signature" />
          <div className={styles['footer-icons']}>
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
        </div>
        <p>All rights reservef @ 2024</p>
      </footer>
    </div>
  );
};

export default Agenda;
