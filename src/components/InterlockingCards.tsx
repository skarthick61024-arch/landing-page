import styles from './InterlockingCards.module.css';

const cards = [
  { num: "01", text: "With this platform, you can effortlessly download large Telegram files completely free." },
  { num: "02", text: "Experience maximum bandwidth saturation via our multi-threaded background engine." },
  { num: "03", text: "All downloads are fully encrypted using the official Telegram API for ultimate security." }
];

export default function InterlockingCards() {
  return (
    <section className={`container section-padding ${styles.container}`}>
      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.number}>{card.num}</div>
            <p className={styles.text}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
