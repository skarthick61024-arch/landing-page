import styles from './TVSection.module.css';

export default function TVSection() {
  return (
    <section className={`container ${styles.tvSection}`}>
      <div className={styles.grid}>
        
        {/* Left Text */}
        <div className={styles.textContent}>
          <h2 className="text-h2">Try TeleTorrent<br />On Your TV Now</h2>
          <p className="text-subtitle">
            You can now download all your favorite shows on your Android TV devices. The TeleTorrent TV app lets you enjoy a movie night with ease.
          </p>
          <a href="https://drive.google.com/file/d/1NJ0OAyH6QhVwLpOcR3pNsF7iikvO7bM-/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={`btn btn-lime ${styles.downloadBtn}`}>
            Download for Android TV
          </a>
        </div>

        {/* Right Mockup */}
        <div className={styles.mockupContainer}>
          <div className={styles.tvMockupWrapper}>
             <img 
                src="/screenshots/photo_2026-07-13_22-39-39.jpg" 
                alt="TeleTorrent TV Interface" 
                className={styles.tvScreenshot}
              />
          </div>
        </div>

      </div>
    </section>
  );
}
