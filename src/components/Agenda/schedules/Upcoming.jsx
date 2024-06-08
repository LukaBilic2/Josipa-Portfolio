import styles from './Upcoming.module.css';

const Upcoming = () => {
  return (
    <ul>
      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            28
            <br />
            June
          </p>
        </div>
        <p>
          Recital <br />
          <span>Crkva sv. Jeronima - Štrigova - Croatia</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

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
    </ul>
  );
};

export default Upcoming;
