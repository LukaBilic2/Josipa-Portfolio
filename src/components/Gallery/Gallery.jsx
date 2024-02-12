import styles from './Gallery.module.css';
import {
  Signature,
  image10Gallery,
  image11Gallery,
  image1Gallery,
  image2Gallery,
  image3Gallery,
  image4Gallery,
  image5Gallery,
  image6Gallery,
  image7Gallery,
  image8Gallery,
  image9Gallery,
} from '../../services';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
  return (
    <div>
      <header className={styles['gallery-home-header']}>
        <div className={styles['gallery-background-image']}></div>
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
        <div className={styles['p-main-background']}>
          <p>
            Johan Strauss II: Die Fledermaus (Adele) <br />
            Croatian Nation Theatre Zagreb, 2023
          </p>
        </div>
      </header>

      <main>
        <h2 className={styles['gallery-h2']}>Gallery</h2>

        <div className={styles['wrapper1']}>
          <div className={styles['images-1']}>
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

        <div className={styles['color-container']}>
          <div className={styles['images-1']}>
            <img src={image4Gallery} alt="image1" />
            <img src={image5Gallery} alt="image2" />
            <img src={image6Gallery} alt="image3" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-2']}>
              Jakov Gotovac: Stanac (Danica)
              <br />
              Klovićevi dvori Gallery Zagreb, 2023
            </p>
          </div>
        </div>

        <div className={styles['wrapper1']}>
          <div className={styles['images-1']}>
            <img src={image7Gallery} alt="image1" />
            <img src={image8Gallery} alt="image2" />
            <img src={image9Gallery} alt="image3" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-1']}>
              Peter Lund: Hillary the Witch goes to the Opera
              <br />
              Croatian National Theatre in Zagreb, 2023
            </p>
          </div>
        </div>

        <div className={styles['color-container']}>
          <div className={styles['images-1']}>
            <img src={image10Gallery} alt="image1" />
            <img src={image11Gallery} alt="image2" />
            <img src={image3Gallery} alt="image3" />
          </div>

          <div className={styles['images-1-p']}>
            <p className={styles['p-2']}>
              Zagreb Classic Open Air Festival 2023
              <br />
              Zagreb Philharmonic Orchestra, maestro Martin Yates
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Gallery;
