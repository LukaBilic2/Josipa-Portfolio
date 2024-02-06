import styles from './About.module.css';
import { Signature, facebookIcon, instagramIcon, youtubeIcon } from '../../services';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <header className={styles['about-home-header']}>
        <div className={styles['about-background-image']}></div>
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
        <div className={styles['bio-container']}>
          <p className={styles['short-bio']}>
            Born in 1997 to a family of musicians, Josipa embarked on her musical studies at the age of 6, in addition
            to taking various dance classes and acting lessons. Her impressive biography starts with obtaining a
            Master`s Degree at the Zagreb Academy of Music where she graduated in 2021 with the highest honor Summa cum
            Laude in the class of prof. Lidija Horvat - Dunjko.
          </p>
          <h2>CARERR HIGHLIGTS</h2>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default About;
