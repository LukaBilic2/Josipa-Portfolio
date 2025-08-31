import styles from './About.module.css';
import {
  facebookIcon,
  instagramIcon,
  youtubeIcon,
  about1,
  about2,
  about3,
  image3,
  beginning2,
  beginning3,
  slide1,
  slide2,
  slide3,
  slide4,
  beginning4,
  slide8,
  slide9,
  slide10,
  image0,
  josipaNagradaSest,
  voix,
} from '../../services';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const [currentIndexTop, setCurrentIndexTop] = useState(0);
  const [currentIndexBottom, setCurrentIndexBottom] = useState(0);
  const [currentIndexMiddle, setCurrentIndexMiddle] = useState(0);
  const intervalRef = useRef(null);
  const totalSlidesTop = 4;
  const totalSlidesBottom = 3;
  const totalSlidesMiddle = 2;

  useEffect(() => {
    const slidesTop = document.querySelectorAll(`.${styles.slideTop}`);
    const slidesBottom = document.querySelectorAll(`.${styles.slideBottom}`);
    const slidesMiddle = document.querySelectorAll(`.${styles.slideMiddle}`);

    const showSlide = (index, slides) => {
      slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
      });
    };

    const nextSlide = () => {
      setCurrentIndexTop((prevIndex) => (prevIndex + 1) % totalSlidesTop);
      setCurrentIndexBottom((prevIndex) => (prevIndex + 1) % totalSlidesBottom);
      setCurrentIndexMiddle((prevIndex) => (prevIndex + 1) % totalSlidesMiddle);
    };

    showSlide(currentIndexTop, slidesTop);
    showSlide(currentIndexBottom, slidesBottom);
    showSlide(currentIndexMiddle, slidesMiddle);

    intervalRef.current = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndexTop, currentIndexMiddle, currentIndexBottom]);

  const handleTopButtonClick = (index) => {
    setCurrentIndexTop(index);
  };

  const handleBottomButtonClick = (index) => {
    setCurrentIndexBottom(index);
  };

  const handleMiddleButtonClick = (index) => {
    setCurrentIndexMiddle(index);
  };

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

  const imageWrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const startDrag = (event) => {
    if (isMobile) {
      setIsDragging(true);
      setStartPosition(getPositionX(event));
      setCurrentTranslate(getTranslateX());
    }
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const drag = (event) => {
    if (isMobile && isDragging) {
      const currentPosition = getPositionX(event);
      const distance = currentPosition - startPosition;
      const containerWidth = imageWrapperRef.current.offsetWidth;
      const imageWrapperWidth = imageWrapperRef.current.scrollWidth;
      const maxTranslate = 0;
      const minTranslate = containerWidth - imageWrapperWidth;
      let newTranslate = currentTranslate + distance;

      if (newTranslate > maxTranslate) {
        newTranslate = maxTranslate;
      } else if (newTranslate < minTranslate) {
        newTranslate = minTranslate;
      }

      imageWrapperRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  const getPositionX = (event) => {
    return event.type.includes('mouse')
      ? event.pageX
      : event.touches[0].clientX;
  };

  const getTranslateX = () => {
    const style = window.getComputedStyle(imageWrapperRef.current);
    const transform = style.getPropertyValue('transform');
    const matrix = new DOMMatrix(transform);
    return matrix.m41;
  };

  return (
    <div>
      <header className={styles['about-home-header']}>
        <div className={styles['about-background-image']}></div>
        <div className={styles['home-header']}>
          <p className={styles['signature-mob-slide']}>Josipa Bilić</p>

          <nav>
            <button className={styles['nav-toggle']} onClick={toggleNavigation}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </button>

            <ul className={styles.navigation}>
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

        <div className={styles['about-icons']}>
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
        <div
          className={`${styles['bio-container']} hidden`}
          ref={(el) => (elementRefs.current[1] = el)}
        >
          <p className={styles['short-bio']}>
            Born in 1997 to a family of musicians, Josipa embarked on her
            musical studies at the age of six, in addition to taking various
            dance classes and acting lessons. Her impressive biography starts
            with obtaining a Master&apos;s Degree at the Zagreb Academy of Music
            where she graduated in 2021 with the highest honor Summa cum Laude
            in the class of prof. Lidija Horvat - Dunjko.
          </p>
          <h2 className={styles['hihglists-h2']}>CAREER HIGHLIGHTS</h2>
        </div>

        <div
          className={`${styles['slider']} hidden`}
          ref={(el) => (elementRefs.current[2] = el)}
        >
          {/* <div className={styles['slideTop']}>
            <img src={josipaNagradaSest} alt="slider" loading="lazy" />
            <div className={styles['content']}>
              <p>
                As a finalist at one of the world&apos;s leading singing
                competitions, 9th Mirjam Helin Competition, Miss Bilić made her
                debut at Musiikkitalo Concert Hall with Helsinki Philharmonic
                Orchestra and Maestro Sir Mark Elder.
              </p>
            </div>
          </div> */}

          <div className={styles['slideTop']}>
            <img src={slide4} alt="slider4" loading="lazy" />
            <div className={styles['content']}>
              <p>
                Josipa made her professional international debut in 2018 after
                winning the &#x201E;10th József Simándy Competition&#x201C; in
                Hungary, where she had the privilege to perform with the Szeged
                Philharmonic Orchestra at the <b>Szeged National Theatre.</b>
              </p>
            </div>
          </div>

          <div className={styles['slideTop']}>
            <img src={slide1} alt="slider1" loading="lazy" />
            <div className={styles['content']}>
              <p>
                In 2022 she made her debut with the Grazer Philharmoniker and
                Maestro Marius Burkert in the
                <b>Oper Graz</b> at Winner’s Gala Concert of the &#x201E;26th
                International Singing Competition Ferruccio Tagliavini&#x201C;
                where she won Third prize as well as the Audience Award.
              </p>
            </div>
          </div>

          <div className={styles['slideTop']}>
            <img src={slide2} alt="slider2" loading="lazy" />
            <div className={styles['content']}>
              <p>
                Same year, Josipa won the <b>Darko Lukić Diploma</b> on the
                &#x201E;55th Darko Lukić Competition&#x201C; as well as the
                &#x201E;19th Ferdo Livadić International Competition of Young
                Music Artists.&#x201C;
              </p>
            </div>
          </div>

          <div className={styles['slideTop']}>
            <img src={slide3} alt="slider3" loading="lazy" />
            <div className={styles['content']}>
              <p>
                She received the <b>Young Musician of the Year Award</b> from
                the Zagreb Philharmonic Orchestra for her outstanding
                achievements in 2022.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles['buttons-container']} hidden`}
          ref={(el) => (elementRefs.current[3] = el)}
        >
          {[...Array(totalSlidesTop).keys()].map((index) => (
            <button
              key={index}
              className={styles['slider-buttons']}
              style={{
                backgroundColor:
                  currentIndexTop === index
                    ? 'var(--curry-color)'
                    : 'var(--midnight-color)',
              }}
              onClick={() => handleTopButtonClick(index)}
            ></button>
          ))}
        </div>

        <h2
          className={`${styles['project-h2']} hidden`}
          ref={(el) => (elementRefs.current[4] = el)}
        >
          LATEST PROJECTS
        </h2>

        <div
          className={`${styles['project-container']} hidden`}
          ref={(el) => (elementRefs.current[5] = el)}
        >
          <div
            className={`${styles['project-container-box']} ${styles['new-mar']}`}
          >
            <img src={josipaNagradaSest} alt="about1" loading="lazy" />
            <p className={styles['row-1-p']}>
              As a finalist at one of the world&apos;s leading singing
              competitions, <b>9th Mirjam Helin Competition</b>, Miss Bilić made
              her debut at &#x201E;Musiikkitalo Concert Hall&#x201C; with{' '}
              <b>Helsinki Philharmonic Orchestra</b> and{' '}
              <b>Maestro Sir Mark Elder</b>.
            </p>
          </div>
          <div
            className={`${styles['beginnings-blue-background']} ${styles['new-pad']}`}
          >
            <div className={styles['project-container-box']}>
              <p>
                She is one of the 10 laureates of the 12th edition of{' '}
                <b>Le Jardin des Voix</b>.<br />
                This prestigious international <b>Les Arts Florissants</b>{' '}
                Academy allows new generations of singers to emerge as
                passionate interpreters and advocates of the Baroque repertoire.
                <br />
                With two Charpentier&apos;s operas Les Arts Florissants / La
                Descente d&apos;Orphee aux Enfers they begin their tour in
                France, Spain, Switzerland, Luxembourg and Canada directed by{' '}
                <b>William Christie</b> and <b>Paul Agnew.</b>
              </p>
              <img
                className={`${styles['newImage']}`}
                src={voix}
                alt="image0"
                loading="lazy"
              />
            </div>

            <div className={styles['project-container-box']}>
              <img src={about1} alt="about1" loading="lazy" />
              <p className={styles['row-1-p']}>
                In 2023 she won the prestigious &#x201E;Froville International
                Baroque Singing Competition&#x201C; as well as a professional
                recording special prize with <b>I Gemelli ensemble.</b>
                <br /> For her debut at the &#x201E;
                <b>International Varaždin Baroque Festival</b>&#x201C; with
                Camerata Garestin ensemble she received Ivan Werner Award for
                the highest Young Artist’s achievement.
                <br /> In 2024 Season she will have the opportunity to debut at
                the &#x201E;<b>Innsbruck Festwochen 2024 Baroque Festival</b>
                &#x201C; in Handel’s Arianna in Creta as Alceste.
              </p>
            </div>
          </div>

          <div
            className={`${styles['project-container-box']} ${styles['new-pad']}`}
          >
            <p>
              She continues to perfect her baroque repertory and has had the
              opportunity to sing with distinguished ensembles such as Le
              Concert de l&apos;Hostel Dieu, the Zagreb Soloists, Croatian
              Baroque Ensemble, Symphony Orchestra of Croatian Radio-television,
              Dubrovnik Symphony Orchestra, Varaždin Chamber Orchestra.
            </p>
            <img src={about2} alt="about3" loading="lazy" />
          </div>

          <div className={styles['project-container-box']}>
            <img src={about3} alt="about2" loading="lazy" />
            <p>
              Equally successful on the concert podium, she performed Gustav
              Mahler&apos;s 4th Symphony, Mozart&apos;s, Haydn and Beethoven
              concert arias, the soprano solo in Bach’s Markus Passion,
              Pergolesi’s Stabat Mater, Fauré’s Requiem, Mozarts Requiem and
              Krӧnungsmesse, Rossini’s Petite Messe Solennelle and Stabat Mater.
            </p>
          </div>
        </div>

        <div
          className={`${styles['beginnings-blue-background']} hidden`}
          ref={(el) => (elementRefs.current[6] = el)}
        >
          <h2
            className={`${styles['project-h2']} hidden`}
            ref={(el) => (elementRefs.current[7] = el)}
          >
            EARLY BEGINNINGS
          </h2>

          <div
            className={`${styles['beginnings-container']} hidden`}
            ref={(el) => (elementRefs.current[8] = el)}
          >
            <div
              className={styles['beginnings-wrapper']}
              ref={imageWrapperRef}
              onMouseDown={startDrag}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
              onMouseMove={drag}
              onTouchStart={startDrag}
              onTouchEnd={endDrag}
              onTouchMove={drag}
            >
              <img src={image3} alt="beginning1" loading="lazy" />
              <img src={beginning2} alt="beginning2" loading="lazy" />
            </div>
            <p>
              During her studies, she particularly drew attention in student
              Opera productions of Massenet&apos;s &#x201E;Cendrillon&#x201C; as
              the main heroine (2021), in Mozart’s &#x201E;Idomeneo&#x201C; as
              Ilia (2020), as well as in Mozart’s &#x201E;Cosi fan tutté&#x201C;
              as Despina (2018).
            </p>
          </div>

          {!isMobile && (
            <div
              className={`${styles['beginnings-container2']} hidden`}
              ref={(el) => (elementRefs.current[9] = el)}
            >
              <img src={beginning3} alt="beginning3" loading="lazy" />
              <img src={beginning4} alt="beginning4" loading="lazy" />

              <div className={styles['paragraphs-container']}>
                <p className={styles['paragraph-beg-1']}>
                  In 2020 she received prestigious <b>Croatian Actor Award</b>{' '}
                  for the best female role in Opera - Young Artists under 30 for
                  her performance as Gretel (Humperdinck: Hansel and Gretel).
                </p>
                <p className={styles['paragraph-beg-2']}>
                  In 2019 she made her professional opera debut while being a
                  member of Zagreb Opera-studio, after which she became a
                  soloist at the opera ensemble of the Croatian National Theatre
                  in Zagreb, where she is currently based. Her significant roles
                  include Pamina in The Magic Flute, Despina in Cosi fan tutté,
                  (Mozart), Amor in Orfeo ed Euridice (Gluck), Adele in Die
                  Flederumaus (Strauss II), Susanna in Il segreto di Susanna
                  (Wolf- Ferrari), etc.
                </p>
              </div>
            </div>
          )}

          {isMobile && (
            <div className={`${styles['slider']}`}>
              <div className={styles['slideMiddle']}>
                <img src={beginning3} alt="beginning3" loading="lazy" />
                <div className={styles['content']}>
                  <p>
                    In 2020 she received prestigious <b>Croatian Actor Award</b>{' '}
                    Award for the best female role in Opera - Young Artists
                    under 30 for her performance as Gretel (Humperdinck: Hansel
                    and Gretel).
                  </p>
                </div>
              </div>

              <div className={styles['slideMiddle']}>
                <img src={beginning4} alt="beginning4" loading="lazy" />
                <div className={styles['content']}>
                  <p>
                    In 2019 she made her professional opera debut while being a
                    member of Zagreb Opera-studio, after which she became a
                    soloist at the opera ensemble of the Croatian National
                    Theatre in Zagreb, where she is currently based. Her
                    significant roles include Pamina in The Magic Flute, Despina
                    in Cosi fan tutté, (Mozart), Amor in Orfeo ed Euridice
                    (Gluck), Adele in Die Flederumaus (Strauss II), Susanna in
                    Il segreto di Susanna (Wolf- Ferrari), etc.
                  </p>
                </div>
              </div>
            </div>
          )}
          {isMobile && (
            <div
              className={`${styles['buttons-container']} ${styles['buttons-container-bottom']}`}
            >
              {[...Array(totalSlidesMiddle).keys()].map((index) => (
                <button
                  key={index}
                  className={styles['slider-buttons']}
                  style={{
                    backgroundColor:
                      currentIndexMiddle === index
                        ? 'var(--curry-color)'
                        : 'var(--white-color)',
                  }}
                  onClick={() => handleMiddleButtonClick(index)}
                ></button>
              ))}
            </div>
          )}
        </div>

        <div
          className={`${styles['slider']} hidden`}
          ref={(el) => (elementRefs.current[12] = el)}
        >
          <div className={styles['slideBottom']}>
            <img src={slide9} alt="slider9" loading="lazy" />
            <div className={styles['content']}>
              <p>
                Before finishing musical studies in her native city Josipa has
                won numerous International and National Competitions: József
                Simándy (2018 and 2021), Zoltán Kodály Award - ISA (2019), Lions
                grand prix (2017), Lav Mirski (2016), Vera Kovač Vitkai (2015),
                Croatian National Competition HDGPP (2017 and 2019), etc.
              </p>
            </div>
          </div>

          <div className={styles['slideBottom']}>
            <img src={slide10} alt="slider10" loading="lazy" />
            <div className={styles['content']}>
              <p>
                She has already collaborated with renowned conductors Dawid
                Runtz, Marius Burkert, Hansjörg Albrecht, David Danzmayr, Martin
                Yates, Valentin Egel, Pier Giorgio Morandi, Marcello Mottadelli,
                Ivan Repušić, Srba Dinić, Gyüdi Sándor, Josip Šego, Ivan Josip
                Skender, Pavle Zajcev, and directors Arnaud Bernard, Hugo de
                Ana, Alessio Pizzech, Mathias Behrends, Sharon Mohar, Krešimir
                Dolenčić , Dora Ruždjak Podolski, Saša Anočić, Ivan Leo Lemo,
                Petra Radin and Aleksandar Švabić.
              </p>
            </div>
          </div>

          <div className={styles['slideBottom']}>
            <img src={slide8} alt="slider8" loading="lazy" />
            <div className={styles['content']}>
              <p>
                Josipa continued her vocal study and professional development
                through various Masterclasses working with prominent artists
                such as Rainer Trost, Claudia Visca, Michael Schade, Florian
                Boesch, Lucy Arner, Liora Maurer, Hans Peter Herman, Ira Siff,
                Matjaž Robavs, Krešimir Stražanac, Alexei Tanovitski and Ivana
                Lazar.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles['buttons-container']} ${styles['buttons-container-bottom2']} hidden`}
          ref={(el) => (elementRefs.current[13] = el)}
        >
          {[...Array(totalSlidesBottom).keys()].map((index) => (
            <button
              key={index}
              className={styles['slider-buttons']}
              style={{
                backgroundColor:
                  currentIndexBottom === index
                    ? 'var(--curry-color)'
                    : 'var(--midnight-color)',
              }}
              onClick={() => handleBottomButtonClick(index)}
            ></button>
          ))}
        </div>
      </main>

      <footer
        className={`${styles['about-footer']} hidden`}
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

export default About;
