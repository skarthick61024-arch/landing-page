import styles from "./MissionSection.module.css";

export default function MissionSection() {
  return (
    <section className={`container ${styles.missionSection}`}>
      <div className={styles.grid}>
        
        {/* Left Text */}
        <div className={styles.textContent}>
          <div className={styles.badge} style={{ 
            display: 'inline-block',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '9999px',
            padding: '0.5rem 1.5rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#555',
            marginBottom: '1rem',
            alignSelf: 'flex-start'
          }}>Our Mission</div>
          <h2 className="text-h2">We provide a secure, private,<br/>and high-speed download experience</h2>
          <h3 className="text-subtitle" style={{ color: '#666', marginTop: '1rem' }}>
            We believe in unrestricted access to your files with a perfect Material 3 Android experience.
          </h3>
          
          <a href="https://drive.google.com/file/d/1NJ0OAyH6QhVwLpOcR3pNsF7iikvO7bM-/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.downloadBtn}`}>
            Download Now
          </a>
        </div>

        {/* Right Mockup */}
        <div className={styles.mockupContainer}>
          <div className={styles.phoneMockup}>
            <div className={styles.notch}></div>
            <img 
              src="/screenshots/photo_2026-07-13_22-39-44.jpg" 
              alt="TeleTorrent Mobile Interface" 
              className={styles.screenshot}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
