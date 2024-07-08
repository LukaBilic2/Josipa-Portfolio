import styles from './Upcoming.module.css';

const Upcoming = () => {
  return (
    <ul>
      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            05, 06
            <br />
            July
          </p>
        </div>
        <p>
          Susanna - Il segreto di Susanna (Wolf - Ferrari) <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.hnk.hr/hr/opera/predstave/suzanina-tajna-stanac/"
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
            08, 09
            <br />
            July
          </p>
        </div>
        <p>
          Danica - Stanac (Gotovac), <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            17, 19, 20, 22
            <br />
            August
          </p>
        </div>
        <p>
          Alceste - Arianna in Creta (Haendel)
          <br />
          <span>Innsbruck Festwochen - Austria</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.altemusik.at/en/events/arianna"
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
            27
            <br />
            August
          </p>
        </div>
        <p>
          Gala concert with Youngmasters Samobor Festival Chamber Orchestra
          <br />
          <span>Brežice castle, Slovenia</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            9
            <br />
            September
          </p>
        </div>
        <p>
          The Music Yards of the Zagreb Soloists
          <br />
          <span>Zagreb City Museum, Croatia</span>
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
            31
            <br />
            October
          </p>
        </div>
        <p>
          Quattro pezzi sacri (Verdi) With HRT Symphony Orchestra and Maestro
          Ivan Repušić
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

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            12, 13
            <br />
            November
          </p>
        </div>
        <p>
          Orchestra at last! with Zagreb Philharmonic Orchestra
          <br />
          <span>Vatroslav Lisinski Hall, Croatia</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.zgf.hr/hr/koncertni-kalendar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tickets
          </a>
        </button>
      </li>

      <hr />
    </ul>
  );
};

export default Upcoming;
