import styles from './PastTwentyFour.module.css';

const PastTwentyFour = () => {
  return (
    <ul>
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
          <a href="https://www.hnk.hr/en/opera/plays/cos%C3%AC-fan-tutte/" target="_blank" rel="noopener noreferrer">
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
          <a href="https://www.hnk.hr/hr/prodaja/predstava/2351/" target="_blank" rel="noopener noreferrer">
            Sold
          </a>
        </button>
      </li>
      <hr />
      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            TBD
            <br />
          </p>
        </div>
        <p>
          History <br />
          <span>X</span>
        </p>
        <button className={styles['schedule-button']}>Sold</button>
      </li>
      <hr />
      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            TBD
            <br />
          </p>
        </div>
        <p>
          History
          <br />
          <span>X</span>
        </p>
        <button className={styles['schedule-button']}>Sold</button>
      </li>
      <hr />
      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            TBD
            <br />
          </p>
        </div>
        <p>
          History
          <br />
          <span>X</span>
        </p>
        <button className={styles['schedule-button']}>Sold</button>
      </li>
      <hr />
      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            TBD
            <br />
          </p>
        </div>
        <p>
          History
          <br />
          <span>X</span>
        </p>
        <button className={styles['schedule-button']}>Sold</button>
      </li>
      <hr />
      <li className={styles['list-element']}>
        <div className={styles['date-and-place']}>
          <p>
            TBD
            <br />
          </p>
        </div>
        <p>
          History
          <br />
          <span>X</span>
        </p>
        <button className={styles['schedule-button']}>Sold</button>
      </li>
      <hr />
    </ul>
  );
};

export default PastTwentyFour;
