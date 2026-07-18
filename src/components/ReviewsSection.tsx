import { Star } from 'lucide-react';
import styles from './ReviewsSection.module.css';

const reviews = [
  { name: "Alex M.", country: "USA", rating: 5, text: "Probably the best and most useful app to have on your device. Well-made with strong functionalities. Keep up the good work.", avatar: "A" },
  { name: "Sarah K.", country: "UK", rating: 5, text: "Finally an app that lets me download my Telegram videos seamlessly in the background without constantly crashing.", avatar: "S" },
  { name: "David J.", country: "Canada", rating: 4, text: "Really clean UI. The Material 3 design looks native and the download speeds are much faster than the default Telegram app.", avatar: "D" },
  { name: "Elena R.", country: "Spain", rating: 5, text: "Absolutely essential. I use it every day to manage large files. The smart queue feature is a lifesaver.", avatar: "E" },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className={`container section-padding ${styles.reviewsSection}`}>
      <div className={styles.header}>
        <div className={styles.overallRating}>
          <h2 className="text-h2">4.9</h2>
          <div className={styles.stars}>
            <Star fill="var(--color-emerald)" color="var(--color-emerald)" size={24} />
            <Star fill="var(--color-emerald)" color="var(--color-emerald)" size={24} />
            <Star fill="var(--color-emerald)" color="var(--color-emerald)" size={24} />
            <Star fill="var(--color-emerald)" color="var(--color-emerald)" size={24} />
            <Star fill="var(--color-emerald)" color="var(--color-emerald)" size={24} />
          </div>
          <p className="text-subtitle">Based on 10,000+ Beta Testers</p>
        </div>
      </div>

      <div className={styles.grid}>
        {reviews.map((rev, idx) => (
          <div key={idx} className={`glass-panel ${styles.reviewCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>{rev.avatar}</div>
              <div className={styles.meta}>
                <div className={styles.name}>{rev.name} <span className={styles.country}>({rev.country})</span></div>
                <div className={styles.cardStars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fill={i < rev.rating ? "var(--color-emerald)" : "transparent"} color="var(--color-emerald)" size={14} />
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.reviewText}>"{rev.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
