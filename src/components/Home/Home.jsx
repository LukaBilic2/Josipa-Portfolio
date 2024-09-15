import styles from './Home.module.css';
import {
  facebookIcon,
  youtubeIcon,
  instagramIcon,
  image1,
  image2,
  image3,
  image4,
  image7,
  leftArrow,
  rightArrow,
} from '../../services';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
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

  const videoSets = [
    ['https://www.youtube.com/embed/jXU2gdKx0ss'],
    ['https://www.youtube.com/embed/9agQvXsp0Ug'],
    ['https://www.youtube.com/embed/XAtG4f0cfSc'],
    ['https://www.youtube.com/embed/KckM9MPGcMc'],
    ['https://www.youtube.com/embed/d05YPDjJUvs'],
    ['https://www.youtube.com/embed/-PFDkqpyvtk'],
    ['https://www.youtube.com/embed/oPO2mkE1ycg'],
    ['https://www.youtube.com/embed/qwsrj4RwxrI'],
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);
  const [showNavigationButtons] = useState(false);

  const handleSetChange = (index) => {
    setCurrentSetIndex(index);
  };

  const handlePreviousVideo = () => {
    setCurrentSetIndex((prevIndex) =>
      prevIndex === 0 ? videoSets.length - 1 : prevIndex - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentSetIndex((prevIndex) =>
      prevIndex === videoSets.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 480);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggleNavigation() {
    const navigation = document.querySelector(`.${styles.navigation}`);
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
    <div className="sve placeholder">
      <header className={`${styles['main-home-header']}`}>
        <div className={styles['home-background-image']}></div>
        <div className={styles['home-header']}>
          <p className={styles['signature-mob']}>Josipa Bilić</p>
          <p className={styles['signature-mob-slide']}>Josipa Bilić</p>

          <nav>
            <button className={styles['nav-toggle']} onClick={toggleNavigation}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </button>

            <ul className={styles['navigation']}>
              <button
                className={`${styles['button-nav-mobile']}`}
                onClick={toggleNavigation}
              >
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </button>

              <div className={`${styles['mobile-li']} ${styles['navigation']}`}>
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
              </div>
            </ul>

            <div className={`${styles['icons-mobile']}`}>
              <a href="https://www.facebook.com/JosipicaB" target="blank">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/josipa___bilic/"
                target="blank"
              >
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
          </nav>
        </div>

        <div className={styles['info-wrapper']}>
          <div className={styles['info-container']}>
            <h1>Croatian Soprano</h1>
            <br />
            <p>
              One of the most sought-after young Croatian musicians, soprano
              Josipa Bilić is carefully building her career based on a bedrock
              of high professionalism and a refined source of her
              interpretation. Her voice is distinguished by wondrous ethereal
              luminosity and disciplined technical virtuosity displayed in her
              upper register.
            </p>
            <br />
            <Link to="/about">
              <button>Read more</button>
            </Link>
          </div>
        </div>

        <div className={styles.icons}>
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

      <main className={styles['main-home']}>
        <div
          className={`${styles['upcoming-container']} hidden`}
          ref={(el) => (elementRefs.current[1] = el)}
        >
          <h2>UPCOMING PERFORMANCES</h2>
          <ul>
            <hr />

            <li className={styles['list-element']}>
              <div className={styles['date-and-place']}>
                <p>
                  18
                  <br />
                  October
                </p>
              </div>
              <p>
                „Opera evening” with the Zagreb Philharmonic
                <br />
                <span>Vatroslav Lisinski Hall in Zagreb, Croatia</span>
              </p>
              <button className={styles['schedule-button']}>
                <a
                  href="https://www.ulaznice.hr/web/event/12/4185"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tickets
                </a>
              </button>
            </li>

            <hr />

            <li className={styles['list-element']}>
              <div className={styles['date-and-place']}>
                <p>
                  22
                  <br />
                  October
                </p>
              </div>
              <p>
                Tesla - Full Circle
                <br />
                <span>Nova Gradiška, Croatia</span>
              </p>
              <button className={styles['schedule-button']}>Pending</button>
            </li>

            <hr />

            <li className={styles['list-element']}>
              <div className={styles['date-and-place']}>
                <p>
                  31
                  <br />
                  October
                </p>
              </div>
              <p>
                Quattro pezzi sacri (Verdi) With HRT Symphony Orchestra and
                Maestro Ivan Repušić
                <br />
                <span>Vatroslav Lisinski Hall in Zagreb, Croatia</span>
              </p>
              <button className={styles['schedule-button']}>
                <a
                  href="https://glazba.hrt.hr/novosti/pezzi-sacri-11587035"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tickets
                </a>
              </button>
            </li>

            <hr />
          </ul>
          <Link to="/agenda">
            <button className={styles['agendaButton']}>See all</button>
          </Link>
        </div>
        <blockquote
          className={`${styles['quote-home']} hidden`}
          ref={(el) => (elementRefs.current[2] = el)}
        >
          <p>
            <em>
              &ldquo;The beauty of her voice is unmistakable, paired with its
              excellent preparation, musicality, obvious ease in singing across
              a wide tonal range, different tempos, and rich dynamic nuances.
              Her impeccable breath control and crystal-clear pronunciation
              leave the listener with the impression of a mature and seasoned
              musical interpretation.&ldquo;
            </em>
          </p>
          <footer>
            <p>
              <i>Klasika.hr</i>
            </p>
          </footer>
        </blockquote>

        <section
          className={`${styles['performance-section']} hidden`}
          ref={(el) => (elementRefs.current[3] = el)}
        >
          <h2>PERFORMANCES</h2>
          <div className={styles['iframe-videos']}>
            {isSmallScreen ? (
              <iframe
                className="youtube-iframe"
                width="1250"
                height="703"
                src={videoSets[currentSetIndex][0]}
                title={`Video ${currentSetIndex}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              videoSets[currentSetIndex * 2] && (
                <>
                  <iframe
                    className="youtube-iframe"
                    width="625"
                    height="351"
                    src={videoSets[currentSetIndex * 2][0]}
                    title={`Video ${currentSetIndex * 2}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  {videoSets[currentSetIndex * 2 + 1] && (
                    <iframe
                      className="youtube-iframe"
                      width="625"
                      height="351"
                      src={videoSets[currentSetIndex * 2 + 1][0]}
                      title={`Video ${currentSetIndex * 2 + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  )}
                </>
              )
            )}
          </div>

          {isSmallScreen && (
            <div className={styles['mobile-button-container']}>
              <button
                className={styles['mobile-button-arrow']}
                onClick={handlePreviousVideo}
              >
                <img src={leftArrow} alt="button1" />
              </button>
              <button
                className={styles['mobile-button-arrow']}
                onClick={handleNextVideo}
              >
                <img src={rightArrow} alt="button2" />
              </button>
            </div>
          )}

          {!isSmallScreen && !showNavigationButtons && (
            <div className={styles['button-container']}>
              {videoSets
                .slice(0, Math.ceil(videoSets.length / 2))
                .map((_, index) => (
                  <button
                    className={
                      index === currentSetIndex ? styles['selectedButton'] : ''
                    }
                    key={index}
                    onClick={() => handleSetChange(index)}
                  ></button>
                ))}
            </div>
          )}
        </section>

        <section
          className={`hidden`}
          ref={(el) => (elementRefs.current[4] = el)}
        >
          <h2 className={styles['h2-images']}>GALLERY</h2>
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
          <Link to="/gallery" className={styles['gallery-button-a']}>
            <button className={styles['gallery-button']}>See all</button>
          </Link>
        </section>
      </main>

      <footer
        className={`${styles['home-footer']} hidden`}
        ref={(el) => (elementRefs.current[5] = el)}
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

export default Home;
