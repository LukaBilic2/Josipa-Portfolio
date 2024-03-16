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
          </p>
        </div>
        <p>
          Concert with Trio Ripos
          <br />
          <span>Vršilnica Zaprešić - Croatia </span>
        </p>
        <button className={styles['schedule-button']}>
          <a target="_blank" rel="noopener noreferrer">
            Pending
          </a>
        </button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            06, 11
            <br />
            April
          </p>
        </div>
        <p>
          Pamina - The Magic Flute (Mozart) <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.hnk.hr/hr/opera/predstave/%C4%8Darobna-frula/#06.04.18.00"
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
            21
            <br />
            April
          </p>
        </div>
        <p>
          Maria Bellcanta - Hillary the Witch goes to the Opera (Lund) <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.hnk.hr/hr/opera/predstave/vje%C5%A1tica-hillary-ide-u-operu/#21.04.11.00"
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
            11
            <br />
            May
          </p>
        </div>
        <p>
          Internationales Bachfest Schauffhausen - Music in the Guild House with Camerata Garestin
          <br />
          <span>Kulturhaus Obere Stube am Rhein - Switzerland</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            17
            <br />
            May
          </p>
        </div>
        <p>
          Tesla - full circle
          <br />
          <span>Pučko otvoreno učilište Ivanić-Grad - Croatia</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
      </li>

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
            06
            <br />
            July
          </p>
        </div>
        <p>
          Susanna - Il segreto di Susanna (Wolf - Ferrari) <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Pending</button>
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
          <a href="https://www.altemusik.at/en/events/arianna" target="_blank" rel="noopener noreferrer">
            Tickets
          </a>
        </button>
      </li>

      <hr />
    </ul>
  );
};

export default Upcoming;
