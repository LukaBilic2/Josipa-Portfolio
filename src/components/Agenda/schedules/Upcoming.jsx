import styles from './Upcoming.module.css';

const Upcoming = () => {
  return (
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
            9
            <br />
            November
          </p>
        </div>
        <p>
          Gala concert
          <br />
          <span>University of Zagreb, Croatia</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            12
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

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            14, 27, 31
            <br />
            December
          </p>
        </div>
        <p>
          Adele - Die Fledermaus (Strauss)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            29
            <br />
            December
          </p>
        </div>
        <p>
          Lisinski dancing masquerade
          <br />
          <span>Vatroslav Lisinski Hall in Zagreb, Croatia</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            7
            <br />
            January
            <br /> (2025)
          </p>
        </div>
        <p>
          Adele - Die Fledermaus (Strauss)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            16
            <br />
            February
            <br /> (2025)
          </p>
        </div>
        <p>
          Hercules in love with Croatian Baroque Ensemble
          <br />
          <span>Satirical Theatre Kerempuh, Croatia</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            1, 3, 7
            <br />
            March
            <br /> (2025)
          </p>
        </div>
        <p>
          Sophie - Werther (Massenet)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
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
            <br /> (2025)
          </p>
        </div>
        <p>
          Gilda - Rigoletto (Verdi)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            17, 22, 24
            <br />
            April
            <br /> (2025)
          </p>
        </div>
        <p>
          Pamina - The Magic Flute (Mozart)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            29, 31
            <br />
            May
            <br /> (2025)
          </p>
        </div>
        <p>
          Jelena - Nikola Šubić Zrinjski (Ivan pl. Zajc)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />
    </ul>
  );
};

export default Upcoming;
