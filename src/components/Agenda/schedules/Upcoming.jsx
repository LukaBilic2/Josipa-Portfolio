import styles from './Upcoming.module.css';

const Upcoming = () => {
  return (
    <ul>
      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            24
            <br />
            March
            <br />
          </p>
        </div>
        <p>
          Zadar Chamber Orchestra, Guillaume Jehl (trumpet), Maestro Ivan
          Repušić
          <br />
          <span>St. Mary&apos;s Church, Zadar (Croatia)</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            29, 4
            <br />
            March-April
            <br />
          </p>
        </div>
        <p>
          Gilda - Rigoletto (Verdi)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.hnk.hr/hr/opera/predstave/rigoletto/"
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
            17, 22, 24
            <br />
            April
            <br />
          </p>
        </div>
        <p>
          Pamina - The Magic Flute (Mozart)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.hnk.hr/hr/opera/predstave/čarobna-frula/"
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
            25
            <br />
            May
            <br />
          </p>
        </div>
        <p>
          Dinner with Handel, Julian Perkins, Croatian Baroque Orchestra
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            28, 31
            <br />
            May
            <br />
          </p>
        </div>
        <p>
          Jelena - Nikola Šubić Zrinjski (Ivan pl. Zajc)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.hnk.hr/hr/raspored/?predstava=nikola-%C5%A1ubi%C4%87-zrinjski"
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
            28
            <br />
            June
            <br />
          </p>
        </div>
        <p>
          Princess Jelena - The Coronation of King Tomislav
          <br />
          <span>Mostar, Bosnia and Herzegovina</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            15
            <br />
            July
            <br />
          </p>
        </div>
        <p>
          Quinta Essentia Ensemble
          <br />
          <span>Rector’s Palace Atrium, Dubrovnik Summer Festival</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.dubrovnik-festival.hr/program/ansambl-quinta-essentia/193"
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
