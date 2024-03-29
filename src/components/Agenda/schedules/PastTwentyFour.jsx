import styles from './PastTwentyFour.module.css';

const PastTwentyFour = () => {
  return (
    <ul>
      <hr />
      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            4
            <br />
            January
          </p>
        </div>
        <p>
          Adele - Die Fledermaus (Strauss)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Sold</button>
      </li>
      <hr />
      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            30
            <br />
            January
          </p>
        </div>
        <p>
          Tesla - full circle
          <br />
          <span>Nikola Tesla Museum in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Sold</button>
      </li>
      <hr />
      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            10, 14
            <br />
            February
          </p>
        </div>
        <p>
          Despina - Cosi fan tutte (Mozart)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>Sold</button>
      </li>

      <hr />

      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            09
            <br />
            March
          </p>
        </div>
        <p>
          Despina - Cosi fan tutte (Mozart) <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.hnk.hr/en/opera/plays/cos%C3%AC-fan-tutte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sold
          </a>
        </button>
      </li>

      <hr />
      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            14
            <br />
            March
          </p>
        </div>
        <p>
          Jelena- Nikola Šubić Zrinjski (Ivan pl. Zajc)
          <br />
          <span>Croatian National Theatre in Zagreb</span>
        </p>
        <button className={styles['schedule-button']}>
          <a
            href="https://www.hnk.hr/hr/prodaja/predstava/2351/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sold
          </a>
        </button>
      </li>
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
          <a
            href="https://www.pouz.hr/trio-ripos-josipa-bilic/"
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

export default PastTwentyFour;
