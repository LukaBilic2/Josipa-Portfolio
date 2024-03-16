import styles from './Contact.module.css';
import { facebookIcon, instagramIcon, youtubeIcon, pdf } from '../../services';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ieon8kq', 'template_y8746sm', form.current, {
        publicKey: 'zauEORATTOVSZ1M3d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message has been sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <header className={styles['contact-home-header']}>
        <div className={styles['contact-background-image']}></div>
        <div className={styles['contact-header']}>
          <p className={styles['signature-mob-slide']}>Josipa Bilić</p>

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
          <a href="https://www.facebook.com/JosipicaB" className={`fa fa-facebook`} target="blank"></a>
          <a href="https://www.instagram.com/josipa___bilic/" className={`fa fa-instagram`} target="blank"></a>
          <a href="https://www.youtube.com/@josipabilicsoprano/featured" className={`fa fa-youtube`} target="blank"></a>
        </div>
      </header>

      <main className={styles['main-contact']}>
        <h2 className={`${styles['h2-contact']} hidden`} ref={(el) => (elementRefs.current[1] = el)}>
          CONTACT
        </h2>

        <form
          ref={(el) => {
            form.current = el;
            elementRefs.current[2] = el;
          }}
          className={`${styles['contact-container']} hidden`}
          onSubmit={sendEmail}
        >
          <input
            className={styles['contact-item']}
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your name"
            required
          />

          <input
            className={styles['contact-item']}
            type="text"
            id="from_lastname"
            name="from_lastname"
            placeholder="Your last name"
            required
          />

          <input
            className={styles['contact-item']}
            type="text"
            id="from_email"
            name="from_email"
            placeholder="Your email"
            required
          />

          <input
            className={styles['contact-item']}
            type="text"
            id="messageTitle"
            name="messageTitle"
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
            <button type="submit" value="Send">
              Send
            </button>

            <span id="cv-message">Access Josipa&apos;s resume by clicking the following link:</span>
            <a className={styles['pdf-a']} id="cv" href={pdf} target="_blank" rel="noreferrer">
              Open CV
            </a>
          </div>
        </form>
      </main>

      <footer className={`${styles['contact-footer']} hidden`} ref={(el) => (elementRefs.current[3] = el)}>
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

export default Contact;
