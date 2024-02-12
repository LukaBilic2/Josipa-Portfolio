import styles from './About.module.css';
import {
  Signature,
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
} from '../../services';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [currentIndexTop, setCurrentIndexTop] = useState(0);
  const [currentIndexBottom, setCurrentIndexBottom] = useState(0);
  const intervalRef = useRef(null);
  const totalSlidesTop = 4;
  const totalSlidesBottom = 3;

  useEffect(() => {
    const slidesTop = document.querySelectorAll(`.${styles.slideTop}`);
    const slidesBottom = document.querySelectorAll(`.${styles.slideBottom}`);

    const showSlide = (index, slides) => {
      slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
      });
    };

    const nextSlide = () => {
      setCurrentIndexTop((prevIndex) => (prevIndex + 1) % totalSlidesTop);
      setCurrentIndexBottom((prevIndex) => (prevIndex + 1) % totalSlidesBottom);
    };

    showSlide(currentIndexTop, slidesTop);
    showSlide(currentIndexBottom, slidesBottom);

    intervalRef.current = setInterval(nextSlide, 9000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndexTop, currentIndexBottom]);

  const handleTopButtonClick = (index) => {
    setCurrentIndexTop(index);
  };

  const handleBottomButtonClick = (index) => {
    setCurrentIndexBottom(index);
  };

  return (
    <div>
      <header className={styles['about-home-header']}>
        <div className={styles['about-background-image']}></div>
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

        <div className={styles['about-icons']}>
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

      <main>
        <div className={styles['bio-container']}>
          <p className={styles['short-bio']}>
            Born in 1997 to a family of musicians, Josipa embarked on her musical studies at the age of 6, in addition
            to taking various dance classes and acting lessons. Her impressive biography starts with obtaining a
            Master`s Degree at the Zagreb Academy of Music where she graduated in 2021 with the highest honor Summa cum
            Laude in the class of prof. Lidija Horvat - Dunjko.
          </p>
          <h2 className={styles['hihglists-h2']}>CARERR HIGHLIGTS</h2>
        </div>

        <div className={styles['slider']}>
          <div className={styles['slideTop']}>
            <img src={slide1} alt="slider1" loading="lazy" />
            <div className={styles['content']}>
              <p>
                Josipa made her professional International debut in 2018 after winning 10 th József Simándy Competition
                in Hungary where she had a privilege to perform with Szeged Philharmonic Orchestra in Szeged National
                Theatre .
              </p>
            </div>
          </div>

          <div className={styles['slideTop']}>
            <img src={slide2} alt="slider2" loading="lazy" />
            <div className={styles['content']}>
              <p>
                In 2022 she made her debut with the Grazer Philharmoniker and Maestro Marius Burkert in the Oper Graz at
                Winner’s Gala Concert of the 26th International Singing Competition Ferruccio Tagliavini where she won
                Third prize as well as the Audience Award.
              </p>
            </div>
          </div>

          <div className={styles['slideTop']}>
            <img src={slide3} alt="slider3" loading="lazy" />
            <div className={styles['content']}>
              <p>
                Same year Josipa won the Darko Lukić Diploma on the 55th Darko Lukić Competition as well as the 19th
                Ferdo Livadić International Competition of Young Music Artists.
              </p>
            </div>
          </div>

          <div className={styles['slideTop']}>
            <img src={slide4} alt="slider4" loading="lazy" />
            <div className={styles['content']}>
              <p>
                She received the Young Musician of the Year Award from the Zagreb Philharmonic Orchestra for her
                outstanding achievements in 2022.
              </p>
            </div>
          </div>
        </div>

        <div className={styles['buttons-container']}>
          {[...Array(totalSlidesTop).keys()].map((index) => (
            <button
              key={index}
              className={styles['slider-buttons']}
              style={{ backgroundColor: currentIndexTop === index ? 'var(--curry-color)' : 'var(--midnight-color)' }}
              onClick={() => handleTopButtonClick(index)}
            ></button>
          ))}
        </div>

        <h2 className={styles['project-h2']}>LATEST PROJECTS</h2>
        <div className={styles['project-container']}>
          <div className={styles['project-item-left']}>
            <img src={about1} alt="about1" loading="lazy" />
            <p>
              She continues to perfect her baroque repertory and has had the opportunity to sing with distinguished
              ensembles such as Le Concert de l&apos;Hostel Dieu, the Zagreb Soloists, Croatian Baroque Ensemble,
              Symphony Orchestra of Croatian Radio-television, Dubrovnik Symphony Orchestra, Varaždin Chamber Orchestra.
            </p>
            <img src={about3} alt="about3" loading="lazy" />
          </div>

          <div className={styles['project-item-right']}>
            <p>
              In 2023 she won the prestigious Froville International Baroque Singing Competition as well as a
              professional recording special prize with I Gemelli ensemble.
              <br /> For her debut at the International Varaždin Baroque Festival with Camerata Garestin ensemble she
              received Ivan Werner Award for the highest Young Artist’s achievement.
              <br /> In 2024 Season she will have the opportunity to debut at the Insbruck Festwochen Baroque Feastival
              in Handel’s Arianna in Creta as Alceste.
            </p>
            <img src={about2} alt="about2" loading="lazy" />
            <p>
              Equally successful on the concert podium she performed Gustav Mahlers 4th Symphony, Mozart, Haydn and
              Beethoven concert arias, the soprano solo in Bach’s Markus Passion, Pergolesi’s Stabat Mater, Fauré’s
              Requiem, Mozarts Requiem and Krӧnungsmesse, Rossini’s Petite Messe Solennelle and Stabat Mater.
            </p>
          </div>
        </div>
        <h2 className={styles['project-h2']}>EARLY BEGINNINGS</h2>

        <div className={styles['beginnings-container']}>
          <img src={image3} alt="beginning1" loading="lazy" />
          <img src={beginning2} alt="beginning2" loading="lazy" />
          <p>
            During her studies, she particularly drew attention in student Opera productions of Massenet s Cendrillon as
            the main heroine (2021), in Mozart’s Idomeneo as Ilia (2020), as well as in Mozart’s Cosi fan tutté as
            Despina (2018).
          </p>
        </div>

        <div className={styles['beginnings-container2']}>
          <img src={beginning3} alt="beginning3" loading="lazy" />
          <img src={beginning4} alt="beginning4" loading="lazy" />

          <div className={styles['paragraphs-container']}>
            <p className={styles['paragraph-beg-1']}>
              In 2020 she received prestigious Croatian Actor Award for the best female role in Opera - Young Artists
              under 30 for her performance as Gretel (Humperdinck: Hansel and Gretel).
            </p>
            <p className={styles['paragraph-beg-2']}>
              Before finishing musical studies in her native city Josipa has won numerous International and National
              Competitions: József Simándy (2018 and 2021), Zoltán Kodály Award - ISA (2019), Lions grand prix (2017),
              Lav Mirski (2016), Vera Kovač Vitkai (2015), Croatian National Competition HDGPP (2017 and 2019).
            </p>
          </div>
        </div>

        <div className={styles['slider']}>
          <div className={styles['slideBottom']}>
            <img src={slide9} alt="slider9" loading="lazy" />
            <div className={styles['content']}>
              <p>
                Before finishing musical studies in her native city Josipa has won numerous International and National
                Competitions: József Simándy (2018 and 2021), Zoltán Kodály Award - ISA (2019), Lions grand prix (2017),
                Lav Mirski (2016), Vera Kovač Vitkai (2015), Croatian National Competition HDGPP (2017 and 2019).
              </p>
            </div>
          </div>

          <div className={styles['slideBottom']}>
            <img src={slide10} alt="slider10" loading="lazy" />
            <div className={styles['content']}>
              <p>
                She has already collaborated with renowned conductors Dawid Runtz, Marius Burkert, Hansjörg Albrecht,
                David Danzmayr, Martin Yates, Valentin Egel, Pier Giorgio Morandi, Marcello Mottadelli, Ivan Repušić,
                Srba Dinić, Gyüdi Sándor, Josip Šego, Ivan Josip Skender, Pavle Zajcev, and directors Arnaud Bernard,
                Hugo de Ana, Mathias Behrends, Sharon Mohar, Krešimir Dolenčić , Dora Ruždjak Podolski, Saša Anočić,
                Petra Radin and Aleksandar Švabić.
              </p>
            </div>
          </div>

          <div className={styles['slideBottom']}>
            <img src={slide8} alt="slider8" loading="lazy" />
            <div className={styles['content']}>
              <p>
                Josipa continued her vocal study and professional development through various Masterclasses working with
                prominent artists such as Rainer Trost, Claudia Visca, Michael Schade, Florian Boesch, Lucy Arner, Liora
                Maurer, Hans Peter Herman, Ira Siff, Matjaž Robavs, Krešimir Stražanac, Alexei Tanovitski and Ivana
                Lazar.
              </p>
            </div>
          </div>
        </div>

        <div className={styles['buttons-container']}>
          {[...Array(totalSlidesBottom).keys()].map((index) => (
            <button
              key={index}
              className={styles['slider-buttons']}
              style={{ backgroundColor: currentIndexBottom === index ? 'var(--curry-color)' : 'var(--midnight-color)' }}
              onClick={() => handleBottomButtonClick(index)}
            ></button>
          ))}
        </div>
      </main>

      <footer className={styles['about-footer']}>
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

export default About;
