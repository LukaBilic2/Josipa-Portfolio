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
import Chair from '../Reusables/Chair';
import concerts from '../Agenda/schedules/concerts';

const quoteData = [
  {
    title: 'MUSE BAROQUE',
    description:
      'A palette of allegories of the arts and embodied sentiments, among which stands out the sovereign voice of Josipa Bilić, securely placed and marked by refined prosody in the role of La Paix.',
    quote: '— tbd',
  },
  {
    title: 'OLYRIX',
    description:
      'Josipa Bilić, entrusted with the roles of La Paix and Daphné, revealed a generous and expansive voice, displaying the full breadth of her timbre with and unrestrained command of the chest register',
    quote: '— tbd',
  },
  {
    title: 'ÓPERA ACTUAL',
    description:
      'For her part, Josipa Bilić (La Paix) revealed a wide tessitura and a velvety, mellifluous timbre.',
    quote: '— tbd',
  },
  {
    title: 'OPERA MUSIK MAGAZIN',
    description:
      'Alceste has some of the best music in the opera, the lovely, lyrical Tal’or d’oscuro velo, but especially the beautiful aria with cello obligato Son quel stanco pellegrino, perhaps the highlight of the whole score, was sung in sympathetic and thoroughly convincing fashion by soprano Josipa Bilić.',
    quote: '— Charles Jernigan',
  },
  {
    title: 'OPERA TODAY',
    description:
      'Josipa Bilić is the most lively performer of the evening, bringing depth to her trouser role with expressive gestures and skilled facial expressions. Her soprano voice shines with flawless clarity while serving the narrative.',
    quote: '- Stefan Fuchs',
  },
  {
    title: 'OPERAWIRE',
    description:
      'Josipa Bilić possesses a bright, agile soprano with appealing upper register, which she used to spin out delicious lines of delicate beauty which were both technically and expressively strong.',
    quote: '— Alan Neilson',
  },

  {
    title: 'MÜNCHNER MERKUR',
    description:
      'Josipa Bilić (Alceste) shapes her performance with a striking delicacy.',
    quote: '— Markus Thiel',
  },
  {
    title: 'GOTHIC NETWORK-MUSICA',
    description:
      'A well-deserved recognition for the beautiful voice of Croatian soprano Josipa Bilić. Her voice was radiant, her singing always clear and comprehensible. She moved gracefully on stage, delivering her actions with presicison and intensity.',
    quote: '— Daily Notes',
  },
  {
    title: 'KLASIKA.HR',
    description:
      'The final vocal movement of Mahler 4th, set to the verses of the Ode to Heavenly Joy from the follk poetry collection Des Knaben Wunderhorn, remained a manifestation of pure delight, characterized by lyrical clarity and seamless phrasing. Soprano Josipa Bilić delivered a musically refined and textually articulate interpretation, her timbre luminous and almost childlike in its crystalline purity.',
    quote: '- Klasika.hr',
  },
  {
    title: 'KLASIKA.HR',
    description:
      'With impeccable diction (despite the complexities of French pronunciation), a richly nuanced timbre, and masterful vocal control in the service of expression, Josipa Bilić delivered a deeply compelling portrayal of the tragic heroine in Juliette’s sole aria. Unsurprisingly, her performance was met with an enthusiastic and rapturous response from the audience.',
    quote: '— Klasika.hr',
  },
  {
    title: 'KLASIKA.HR',
    description:
      'It is impossible to overlook the beauty of Josipa Bilić’s voice, seamlessly blended with exceptional vocal placement, innate musicality, and remarkable ease across her wide vocal range, all the registers, tempi, and dynamic nuances with impeccable breath control and crystal-clear French diction. She brings a sense of depth and maturit to interpretation of a once-beloved yet now nearly forgotten repertoire, leaving a lasting impression on the listener.',
    quote: '— Klasika.hr',
  },
];

const Home = () => {
  const elementRefs = useRef([]);

  // get 3 nearest upcoming concerts
  const today = new Date();
  const upcomingConcerts = concerts
    .filter((concert) => new Date(concert.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

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
    ['https://www.youtube.com/embed/s6gQQs1DHGU'],
    ['https://www.youtube.com/embed/yDU_JaLHRhY'],
    ['https://www.youtube.com/embed/qwsrj4RwxrI'],
    ['https://www.youtube.com/embed/XAtG4f0cfSc'],
    ['https://www.youtube.com/embed/KckM9MPGcMc'],
    ['https://www.youtube.com/embed/jXU2gdKx0ss'],
    ['https://www.youtube.com/embed/LAk-KFGteYs'],
    ['https://www.youtube.com/embed/d05YPDjJUvs'],
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);
  // const [showNavigationButtons] = useState(false);

  const handleSetChange = (index) => {
    setCurrentSetIndex(index);
  };

  const handlePreviousVideo = () => {
    setCurrentSetIndex((prevIndex) =>
      prevIndex === videoSets.length - 1 ? 0 : prevIndex + 1
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
            {upcomingConcerts.map((concert, index) => (
              <>
                <li key={concert.id} className={styles['list-element']}>
                  <div className={styles['date-and-place']}>
                    <p>
                      {new Date(concert.date).getDate()}
                      <br />
                      {new Date(concert.date).toLocaleString('default', {
                        month: 'long',
                      })}
                      <br />
                      {new Date(concert.date).getFullYear() >
                        today.getFullYear() &&
                        `(${new Date(concert.date).getFullYear()})`}
                    </p>
                  </div>
                  <p>
                    {concert.title}
                    <br />
                    <span>{concert.venue}</span>
                  </p>
                  <button className={styles['schedule-button']}>
                    {concert.ticketsUrl ? (
                      <a
                        href={concert.ticketsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tickets
                      </a>
                    ) : (
                      'Pending'
                    )}
                  </button>
                </li>
                {index < upcomingConcerts.length - 1 && <hr />}
              </>
            ))}
          </ul>
          <hr />
          <Link to="/agenda">
            <button className={styles['agendaButton']}>See all</button>
          </Link>
        </div>

        <Chair quotes={quoteData} />

        {/* <blockquote
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
        </blockquote> */}

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
              <>
                {videoSets[currentSetIndex * 4] && (
                  <iframe
                    className="youtube-iframe"
                    width="400"
                    height="225"
                    src={videoSets[currentSetIndex * 4][0]}
                    title={`Video ${currentSetIndex * 4}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
                {videoSets[currentSetIndex * 4 + 1] && (
                  <iframe
                    className="youtube-iframe"
                    width="400"
                    height="225"
                    src={videoSets[currentSetIndex * 4 + 1][0]}
                    title={`Video ${currentSetIndex * 4 + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
                {videoSets[currentSetIndex * 4 + 2] && (
                  <iframe
                    className="youtube-iframe"
                    width="400"
                    height="225"
                    src={videoSets[currentSetIndex * 4 + 2][0]}
                    title={`Video ${currentSetIndex * 4 + 2}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
                {videoSets[currentSetIndex * 4 + 3] && (
                  <iframe
                    className="youtube-iframe"
                    width="400"
                    height="225"
                    src={videoSets[currentSetIndex * 4 + 3][0]}
                    title={`Video ${currentSetIndex * 4 + 3}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </>
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

          {!isSmallScreen && (
            <div className={styles['button-container']}>
              {Array.from({ length: Math.ceil(videoSets.length / 4) }).map(
                (_, index) => (
                  <button
                    className={
                      index === currentSetIndex ? styles['selectedButton'] : ''
                    }
                    key={index}
                    onClick={() => handleSetChange(index)}
                  ></button>
                )
              )}
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
