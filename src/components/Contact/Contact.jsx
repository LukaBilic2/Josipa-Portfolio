import styles from './Contact.module.css';
import { Signature, facebookIcon, instagramIcon, youtubeIcon, pdf } from '../../services';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Contact = () => {
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

  function toggleNavigation() {
    const navigation = document.querySelector(`.${styles['contact-navigation']}`);
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
      <header className={styles['contact-home-header']}>
        <div className={styles['contact-background-image']}></div>
        <div className={styles['contact-header']}>
          <img src={Signature} alt="Signature" className={styles['signature-mob-slide']} />

          <nav>
            <button className={styles['nav-toggle']} onClick={toggleNavigation}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </button>

            <ul className={styles['contact-navigation']}>
              <button className={`${styles['button-nav-mobile']}`} onClick={toggleNavigation}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </button>
              <div className={`${styles['mobile-li']} ${styles['contact-navigation']}`}>
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

        <blockquote className={styles['quote-contact']}>
          <p>
            <em>
              &ldquo;An artist&apos;s life is an adruous rocky road, yet if I had a chance to do it all again, there is
              no other road I would rather take&ldquo;
            </em>
          </p>
          <footer>
            <p>
              <i>Milka Trnina</i>
            </p>
          </footer>
        </blockquote>

        <div className={styles['contact-icons']}>
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

      <main className={styles['main-contact']}>
        <h2 className={`${styles['h2-contact']} hidden`} ref={(el) => (elementRefs.current[1] = el)}>
          CONTACT
        </h2>

        <form className={`${styles['contact-container']} hidden`} ref={(el) => (elementRefs.current[2] = el)}>
          <input
            className={styles['contact-item']}
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            className={styles['contact-item']}
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Your last name"
            required
          />

          <input
            className={styles['contact-item']}
            type="text"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />

          <input
            className={styles['contact-item']}
            type="text"
            id="message-title"
            name="message-title"
            placeholder="Message title"
            required
          />

          <textarea
            className={styles['contact-item']}
            id="message"
            name="message"
            rows="17"
            placeholder="Enter your message"
            required
          ></textarea>

          <div className={styles['contact-item']}>
            <span id="cv-message">Kindly access my resume by clicking the following link:</span>
            <a className={styles['pdf-a']} id="cv" href={pdf} target="_blank" rel="noreferrer">
              Open CV
            </a>
            <button type="submit">Send</button>
          </div>
        </form>
      </main>

      <footer className={`${styles['contact-footer']} hidden`} ref={(el) => (elementRefs.current[3] = el)}>
        <div>
          <img src={Signature} alt="Signature" />
          <div className={styles['contact-footer-icons']}>
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

export default Contact;
