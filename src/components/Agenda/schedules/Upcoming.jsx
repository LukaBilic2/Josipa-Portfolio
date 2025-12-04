import styles from './Upcoming.module.css';
import concerts from './concerts';

const Upcoming = () => {
  const today = new Date();

  const upcomingConcerts = concerts
    .filter((concert) => new Date(concert.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
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
                {new Date(concert.date).getFullYear() > today.getFullYear() &&
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
          {/* Add HR between items but not after the last one */}
          {index < upcomingConcerts.length - 1 && <hr />}
        </>
      ))}
      <hr />
    </ul>
  );
};

export default Upcoming;
