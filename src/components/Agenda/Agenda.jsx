import styles from './Agenda.module.css';
import { Signature, kazaliste, facebookIcon, instagramIcon, youtubeIcon } from '../../services';
const Agenda = () => {
  return (
    <div>
      <header>
        <div className={styles['home-background-image']}></div>
        <div className={styles['home-header']}>
          <img src={Signature} alt="Signature" />

          <nav>
            <ul className={styles.navigation}>
              <li>
                <a href="" className={styles.current}>
                  Home
                </a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Agenda</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
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
                Zagreb, Croatia
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
                Zagreb, Croatia
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
                Zagreb, Croatia
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
                Zagreb, Croatia
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
