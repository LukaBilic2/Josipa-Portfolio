import styles from './Home.module.css';
import {
  Signature,
  facebookIcon,
  youtubeIcon,
  instagramIcon,
  kazaliste,
  image1,
  image2,
  image3,
  image4,
  image7,
} from '../../services';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="sve placeholder">
      <header className={styles['main-home-header']}>
        <div className={styles['home-background-image']}></div>
        <div className={styles['home-header']}>
          <img src={Signature} alt="Signature" />

          <nav>
            <ul className={styles.navigation}>
              <NavLink to="/">
                <li className={styles['nav-li']}>Home</li>
              </NavLink>{' '}
              <NavLink to="/about">
                <li className={styles['nav-li']}>About</li>
              </NavLink>{' '}
              <NavLink to="/gallery">
                <li className={styles['nav-li']}>Gallery</li>
              </NavLink>
              <NavLink to="/agenda">
                <li className={styles['nav-li']}>Agenda</li>
              </NavLink>{' '}
              <NavLink to="/contact">
                <li className={styles['nav-li']}>Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>

        <div className={styles['info-wrapper']}>
          <div className={styles['info-container']}>
            <h1>Croatian Soprano</h1>
            <br />
            <p>
              One of the most sought-after young Croatian musicians, soprano Josipa Bilić is carefully building her
              career based on a bedrock of high professionalism and a refined source of her interpretation. Her voice is
              distinguished by wondrous ethereal luminosity and disciplined technical virtuosity displayed in her upper
              rangister.
            </p>
            <br />
            <button>Read more</button>
          </div>
        </div>

        <div className={styles.icons}>
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

      <main className={styles['main-home']}>
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
          </ul>
          <button>See all</button>
        </div>
        <blockquote className={styles['quote-home']}>
          <p>
            <em>
              &ldquo;The beauty of her voice is unmistakable, paired with its excellent preparation, musicality, obvious
              ease in singing across a wide tonal range, different tempos, and rich dynamic nuances. Her impeccable
              breath control and crystal-clear pronunciation leave the listener with the impression of a mature and
              seasoned musical interpretation.&ldquo;
            </em>
          </p>
          <footer>
            <p>
              <i>Klasika.hr</i>
            </p>
          </footer>
        </blockquote>

        <section>
          <h2>PERFORMANCES</h2>
          <div className={styles['iframe-videos']}>
            <iframe
              width="1250"
              height="703"
              src="https://www.youtube.com/embed/KckM9MPGcMc"
              title='Händel: Agrippina, "Tu ben degno", HWV 6 - Josipa Bilić, soprano'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              width="1250"
              height="703"
              src="https://www.youtube.com/embed/XAtG4f0cfSc"
              title="W. A. Mozart: Ch&#39;io mi scordi di te... Non temer, amato bene, K. 505"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p>Placeholder track</p>
        </section>

        <section>
          <h2>GALLERY</h2>
          <div className={styles['images-container']}>
            <div className={styles['left-images-container']}>
              <img className={styles['image-1']} src={image1} alt="image1" />
              <img className={styles['image-7']} src={image7} alt="image7" />
            </div>
            <div className={styles['right-images-container']}>
              <img className={styles['image-4']} src={image4} alt="image4" />
              <img className={styles['image-3']} src={image3} alt="image3" />
              <img className={styles['image-2']} src={image2} alt="image2" />
            </div>
          </div>
          <button>See all</button>
        </section>
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

export default Home;
