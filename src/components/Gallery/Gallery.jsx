import styles from './Gallery.module.css';
import {
  facebookIcon,
  image27Gallery,
  image28Gallery,
  image29Gallery,
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
  odrezana1,
  odrezana2,
  odrezana3,
  newSlider4,
  newSlider6,
  newSlider5,
  newSlider7,
  newSlider8,
  newSlider9,
} from '../../services';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Slider from './sliders/slider';
import SliderTwo from './sliders/SlidersTwo';
import SliderOne from './sliders/SliderOne';
import SliderTwoMobile from './sliders/SlidersTwoMobile';

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const elementRefs = useRef([]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 500);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    const navigation = document.querySelector(
      `.${styles['gallery-navigation']}`
    );
    navigation.classList.toggle(styles.active);
    const mobileNav = document.querySelector(`.${styles['mobile-li']}`);
    mobileNav.classList.toggle(styles.active);
    const mobileIcons = document.querySelector(`.${styles['icons-mobile']}`);
    mobileIcons.classList.toggle(styles.active);
    const signature = document.querySelector(
      `.${styles['signature-mob-slide']}`
    );
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
              <button
                className={`${styles['button-nav-mobile']}`}
                onClick={toggleNavigation}
              >
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </button>

              <div
                className={`${styles['mobile-li']} ${styles['gallery-navigation']}`}
              >
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
          <a
            href="https://www.youtube.com/@josipabilicsoprano/featured"
            target="blank"
          >
            <img src={youtubeIcon} alt="Youtube" />
          </a>
        </div>
        <p className={styles['footer-slide']}>All rights reserved @ 2024</p>

        <div className={styles['gallery-icons']}>
          <a
            href="https://www.facebook.com/JosipicaB"
            className={`fa fa-facebook`}
            target="blank"
          ></a>
          <a
            href="https://www.instagram.com/josipa___bilic/"
            className={`fa fa-instagram`}
            target="blank"
          ></a>
          <a
            href="https://www.youtube.com/@josipabilicsoprano/featured"
            className={`fa fa-youtube`}
            target="blank"
          ></a>
        </div>
      </header>

      <main>
        <h2
          className={`${styles['gallery-h2']} hidden`}
          ref={(el) => (elementRefs.current[1] = el)}
        >
          Gallery
        </h2>

        <Slider
          imageOne={newSlider7}
          imageTwo={newSlider8}
          imageThree={newSlider9}
          hidden
          h3Text="J. Massenet: Werther (Sophie)"
          LocationText="Croatian National Theater in Zagreb, 2025"
          takenBy="© Mara Bratoš"
          ref={(el) => (elementRefs.current[19] = el)}
        />

        <div className={styles.blueBG}>
          <Slider
            imageOne={newSlider4}
            imageTwo={newSlider5}
            imageThree={newSlider6}
            midnightBackground={true}
            hidden
            h3Text="E. Wolf - Ferrari: Il segreto di Susanna"
            LocationText="Klovićevi dvori Gallery, Zagreb 2024"
            takenBy="© CNT Zagreb"
            ref={(el) => (elementRefs.current[18] = el)}
          />
        </div>

        <Slider
          imageOne={odrezana1}
          imageTwo={odrezana2}
          imageThree={odrezana3}
          hidden
          h3Text="G. F. Handel: Arianna in Creta (Alceste)"
          LocationText="Innsbruck Festwochen 2024"
          takenBy="© Innsbruck Festwochen"
          ref={(el) => (elementRefs.current[17] = el)}
        />

        <div className={styles.blueBG}>
          <Slider
            imageOne={image27Gallery}
            imageTwo={image28Gallery}
            imageThree={image29Gallery}
            midnightBackground={true}
            hidden
            h3Text="Wolfgang Amadeus Mozart: The Magic Flute (Pamina)"
            LocationText="Croatian National Theatre in Zagreb, 2024"
            takenBy="© Mara Bratoš"
            ref={(el) => (elementRefs.current[16] = el)}
          />
        </div>

        <Slider
          imageOne={newSlider1}
          imageTwo={newSlider2}
          imageThree={newSlider3}
          hidden
          h3Text="Wolfgang Amadeus Mozart: Così fan tutte (Despina)"
          LocationText="Croatian National Theatre in Zagreb, 2024"
          takenBy="© Saša Novković"
          ref={(el) => (elementRefs.current[15] = el)}
        />

        <div className={styles.blueBG}>
          <Slider
            imageOne={image1Gallery}
            imageTwo={image2Gallery}
            imageThree={image3Gallery}
            hidden
            midnightBackground={true}
            h3Text={
              <>
                Gustav Mahler: Symphony No. 4 <br />
                HRT Symphony Orchestra, maestro David Danzmayir
              </>
            }
            LocationText="Concert Hall Vatroslav Lisinski in Zagreb, 2023"
            takenBy="© Igor Šoban"
            ref={(el) => (elementRefs.current[2] = el)}
          />
        </div>

        <Slider
          imageOne={image4Gallery}
          imageTwo={image5Gallery}
          imageThree={image6Gallery}
          hidden
          h3Text="Jakov Gotovac: Stanac (Danica)"
          LocationText="Klovićevi dvori Gallery Zagreb, 2023"
          takenBy="© Saša Novković"
          ref={(el) => (elementRefs.current[3] = el)}
        />

        <div className={styles.blueBG}>
          <Slider
            imageOne={image7Gallery}
            imageTwo={image8Gallery}
            imageThree={image9Gallery}
            midnightBackground={true}
            hidden
            h3Text="Peter Lund: Hillary the Witch goes to the Opera"
            LocationText="Croatian National Theatre in Zagreb, 2023"
            takenBy="© Saša Novković"
            ref={(el) => (elementRefs.current[4] = el)}
          />
        </div>

        <Slider
          imageOne={image10Gallery}
          imageTwo={image11Gallery}
          imageThree={image12Gallery}
          hidden
          h3Text="Zagreb Classic Open Air Festival 2023"
          LocationText={
            <>
              Zagreb Philharmonic Orchestra,
              <br />
              maestro Martin Yates
            </>
          }
          takenBy="© Samir Cerić Kovačević/Arhiva TZGZ i M.Š./HRT"
          ref={(el) => (elementRefs.current[5] = el)}
        />

        <div className={styles.blueBG}>
          {isMobile ? (
            <SliderTwoMobile
              imageOne={image13Gallery}
              imageTwo={image14Gallery}
              hidden={false}
              h3Text="Emmerich Kálmán: Gräfin Mariza"
              LocationText="Komedija Theatre Zagreb, 2022"
              takenBy="© Ines Novković"
              ref={(el) => (elementRefs.current[6] = el)}
            />
          ) : (
            <SliderTwo
              imageOne={image13Gallery}
              imageTwo={image14Gallery}
              hidden
              h3Text="Emmerich Kálmán: Gräfin Mariza"
              LocationText="Komedija Theatre Zagreb, 2022"
              takenBy="© Ines Novković"
              ref={(el) => (elementRefs.current[6] = el)}
            />
          )}
        </div>

        <SliderOne
          imageOne={image15Gallery}
          hidden
          h3Text="14th Opera Selecta Festival, 2022"
          takenBy="© Dino Čaljkušić"
          firstImage
          ref={(el) => (elementRefs.current[7] = el)}
        />
        <div className={styles.blueBG}>
          <Slider
            imageOne={image16Gallery}
            imageTwo={image17Gallery}
            imageThree={image18Gallery}
            midnightBackground={true}
            hidden
            h3Text={
              <>
                Sarajevo Philharmonic Orchestra,
                <br />
                maestro Josip Šego
              </>
            }
            LocationText="Sarajevo National Theatre, 2022"
            takenBy="© Raisa Šehu"
            ref={(el) => (elementRefs.current[8] = el)}
          />
        </div>

        <Slider
          imageOne={image19Gallery}
          imageTwo={image20Gallery}
          imageThree={image21Gallery}
          hidden
          h3Text="63d International Childern Festival in Šibenik"
          LocationText="Orchestra at last! (Show for childern), 2022"
          takenBy="© MDF Šibenik"
          ref={(el) => (elementRefs.current[9] = el)}
        />
        <div className={styles.blueBG}>
          {isMobile ? (
            <SliderTwoMobile
              imageOne={image22Gallery}
              imageTwo={image23Gallery}
              hidden={false}
              h3Text="Engelbert Humperdinck: Hansel and Gretel (Gretel)"
              LocationText="Vatroslav Lisinski Concert Hall Zagreb, 2021"
              takenBy="© Borna Filić"
              ref={(el) => (elementRefs.current[11] = el)}
            />
          ) : (
            <SliderTwo
              imageOne={image22Gallery}
              imageTwo={image23Gallery}
              hidden
              h3Text="Engelbert Humperdinck: Hansel and Gretel (Gretel)"
              LocationText="Vatroslav Lisinski Concert Hall Zagreb, 2021"
              takenBy="© Borna Filić"
              ref={(el) => (elementRefs.current[11] = el)}
            />
          )}
        </div>
        <div className={styles.blueBG}>
          <SliderOne
            imageOne={image24Gallery}
            hidden
            h3Text="Aleksandar Švabić and Zrinka Posavec: The Bald Soprano"
            LocationText="(Chamber Opera inspired by Eugène Ionesco’s drama), Zagreb, 2021"
            takenBy="© Dominik Vujičić"
            ref={(el) => (elementRefs.current[12] = el)}
          />
        </div>
        <div className={styles.blueBG}>
          {isMobile ? (
            <SliderTwoMobile
              imageOne={image25Gallery}
              imageTwo={image26Gallery}
              hidden={false}
              h3Text="Zagreb Philharmonic Orchestra, maestro Tomislav Fačini"
              LocationText="Vatroslav Lisinski Concert Hall Zagreb, 2020"
              takenBy="© Karlo Vuković"
              ref={(el) => (elementRefs.current[13] = el)}
            />
          ) : (
            <SliderTwo
              imageOne={image25Gallery}
              imageTwo={image26Gallery}
              hidden
              h3Text="Zagreb Philharmonic Orchestra, maestro Tomislav Fačini"
              LocationText="Vatroslav Lisinski Concert Hall Zagreb, 2020"
              takenBy="© Karlo Vuković"
              ref={(el) => (elementRefs.current[13] = el)}
            />
          )}
        </div>
      </main>

      <footer
        className={`${styles['gallery-footer']} hidden`}
        ref={(el) => (elementRefs.current[14] = el)}
      >
        <div>
          <p className={styles['signature-mob-footer']}>Josipa Bilić</p>
          <div className={styles['footer-icons']}>
            <a
              href="https://www.facebook.com/JosipicaB"
              className={`fa fa-facebook`}
              target="blank"
            ></a>
            <a
              href="https://www.instagram.com/josipa___bilic/"
              className={`fa fa-instagram`}
              target="blank"
            ></a>
            <a
              href="https://www.youtube.com/@josipabilicsoprano/featured"
              className={`fa fa-youtube`}
              target="blank"
            ></a>
          </div>
        </div>
        <p>All rights reserved @ 2024</p>
      </footer>
    </div>
  );
};

export default Gallery;
