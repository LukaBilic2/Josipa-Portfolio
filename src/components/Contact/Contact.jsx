import styles from './Contact.module.css';
import { Signature, facebookIcon, instagramIcon, youtubeIcon, pdf } from '../../services';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <header className={styles['contact-home-header']}>
        <div className={styles['contact-background-image']}></div>
        <div className={styles['contact-header']}>
          <img src={Signature} alt="Signature" />

          <nav>
            <ul className={styles['contact-navigation']}>
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
        <h2 className={styles['h2-contact']}>CONTACT</h2>

        <div className={styles['contact-container']}>
          <div className={styles['left-contact']}>
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
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              className={styles['contact-item']}
              id="message"
              name="message"
              rows="10"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className={styles['right-contact']}>
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
              id="message-title"
              name="message-title"
              placeholder="Message title"
              required
            />
            <div className={styles['contact-item']}>
              <span id="cv-message">Kindly access my resume by clicking the following link.</span>
              <a className={styles['pdf-a']} id="cv" href={pdf} target="_blank" rel="noreferrer">
                CV Josipa Bilić
              </a>
              <button type="submit" onClick="sendEmail(event)">
                Send
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles['contact-footer']}>
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
